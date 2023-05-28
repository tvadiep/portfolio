import { chakra } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
//@ts-ignore
import Stats from 'stats.js'

const Background = () => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (ref.current) {
      const animation = LightsAndMotion(ref.current)
      animation.init()

      return () => {
        animation.destroy()
      }
    }
  }, [])

  return (
    <chakra.canvas
      ref={ref}
      position={'absolute'}
      zIndex={-1}
      top={0}
      left={0}
      width={'full'}
      height={'100vh'}
      cursor={'none'}
    />
  )
}

interface SettingProps {
  debug: boolean
  friction: number
  trails: number
  size: number
  dampening: number
  tension: number
}

interface OptionProps {
  phase?: number
  offset?: number
  frequency?: number
  amplitude?: number
  spring?: number
}

interface CanvasProps extends CanvasRenderingContext2D {
  stats: any
}

const LightsAndMotion = (canvas: HTMLCanvasElement) => {
  let ctx: CanvasProps,
    hue: any,
    target: any = {},
    tendrils: any[] = [],
    settings: SettingProps = {
      debug: false,
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    }

  const TWO_PI = Math.PI * 2

  // ========================================================================================
  // Oscillator
  // ----------------------------------------------------------------------------------------

  class Oscillator {
    value: number = 0
    phase: number
    offset: number
    frequency: number
    amplitude: number

    constructor(options: OptionProps) {
      this.phase = options.phase || 0
      this.offset = options.offset || 0
      this.frequency = options.frequency || 0.001
      this.amplitude = options.amplitude || 1
    }

    update() {
      this.phase += this.frequency
      this.value = this.offset + Math.sin(this.phase) * this.amplitude
      return this.value
    }

    getValue() {
      return this.value
    }
  }

  // ========================================================================================
  // Tendril
  // ----------------------------------------------------------------------------------------

  class Tendril {
    spring: number
    friction: number
    nodes: any[]

    constructor(options: OptionProps) {
      this.spring = (options.spring ?? 0) + Math.random() * 0.1 - 0.05
      this.friction = settings.friction + Math.random() * 0.01 - 0.005
      this.nodes = []

      for (var i = 0, node; i < settings.size; i++) {
        node = new Node()
        node.x = target.x
        node.y = target.y

        this.nodes.push(node)
      }
    }

    update() {
      var spring = this.spring,
        node = this.nodes[0]

      node.vx += (target.x - node.x) * spring
      node.vy += (target.y - node.y) * spring

      for (var prev, i = 0, n = this.nodes.length; i < n; i++) {
        node = this.nodes[i]

        if (i > 0) {
          prev = this.nodes[i - 1]

          node.vx += (prev.x - node.x) * spring
          node.vy += (prev.y - node.y) * spring
          node.vx += prev.vx * settings.dampening
          node.vy += prev.vy * settings.dampening
        }

        node.vx *= this.friction
        node.vy *= this.friction
        node.x += node.vx
        node.y += node.vy

        spring *= settings.tension
      }
    }

    draw() {
      var x = this.nodes[0].x,
        y = this.nodes[0].y,
        a,
        b

      ctx.beginPath()
      ctx.moveTo(x, y)

      for (var i = 1, n = this.nodes.length - 2; i < n; i++) {
        a = this.nodes[i]
        b = this.nodes[i + 1]
        x = (a.x + b.x) * 0.5
        y = (a.y + b.y) * 0.5

        ctx.quadraticCurveTo(a.x, a.y, x, y)
      }

      a = this.nodes[i]
      b = this.nodes[i + 1]

      ctx.quadraticCurveTo(a.x, a.y, b.x, b.y)
      ctx.stroke()
      ctx.closePath()
    }
  }

  class Node {
    x: number = 0
    y: number = 0
    vx: number = 0
    vy: number = 0
  }

  // ----------------------------------------------------------------------------------------

  const reset = () => {
    tendrils = []

    for (var i = 0; i < settings.trails; i++) {
      tendrils.push(
        new Tendril({
          spring: 0.45 + 0.025 * (i / settings.trails),
        })
      )
    }
  }

  const loop = () => {
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = 'rgba(8,5,16,0.4)'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.globalCompositeOperation = 'lighter'
    ctx.strokeStyle = 'hsla(' + Math.round(hue.update()) + ',90%,50%,0.25)'
    ctx.lineWidth = 1
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (var i = 0, tendril; i < settings.trails; i++) {
      tendril = tendrils[i]
      tendril.update()
      tendril.draw()
    }

    ctx.stats.update()
    requestAnimFrame(loop)
  }

  const resize = () => {
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
  }

  const mousemove = (event: any) => {
    if (event.touches) {
      target.x = event.touches[0].pageX
      target.y = event.touches[0].pageY
    } else {
      target.x = event.clientX
      target.y = event.clientY
    }
  }

  function touchstart(event: TouchEvent) {
    if (event.touches.length == 1) {
      target.x = event.touches[0].pageX
      target.y = event.touches[0].pageY
    }
  }

  const requestAnimFrame = (() => {
    return (
      window.requestAnimationFrame ||
      function (fn) {
        window.setTimeout(fn, 1000 / 60)
      }
    )
  })()

  const init = () => {
    ctx = canvas.getContext('2d') as CanvasProps
    ctx.stats = new Stats()

    hue = new Oscillator({
      phase: Math.random() * TWO_PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    })

    document.body.addEventListener('orientationchange', resize)
    window.addEventListener('resize', resize)

    document.addEventListener('mousemove', mousemove)
    document.addEventListener('touchmove', mousemove)
    document.addEventListener('touchstart', touchstart)

    target.x = Math.random() * ctx.canvas.width
    target.y = Math.random() * ctx.canvas.height

    resize()
    reset()
    loop()

    setTimeout(function () {
      mousemove({
        clientX: Math.random() * ctx.canvas.width,
        clientY: Math.random() * ctx.canvas.height,
      })
    }, 2000)
    setTimeout(function () {
      mousemove({
        clientX: Math.random() * ctx.canvas.width,
        clientY: Math.random() * ctx.canvas.height,
      })
    }, 2200)
  }

  const destroy = () => {
    document.body.removeEventListener('orientationchange', resize)
    window.removeEventListener('resize', resize)

    document.removeEventListener('mousemove', mousemove)
    document.removeEventListener('touchmove', mousemove)
    document.removeEventListener('touchstart', touchstart)
  }

  return {
    init,
    destroy,
  }
}

export { Background }
