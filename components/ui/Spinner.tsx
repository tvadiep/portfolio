import { chakra, Flex } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

// https://codepen.io/jackrugile/pen/poGOqy
const Spinner = () => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (ref.current) {
      const animation = ParticleAnimation(ref.current)
      animation.init()
    }
  }, [])

  return (
    <Flex justifyContent={'center'}>
      <chakra.canvas
        ref={ref}
        position={'absolute'}
        zIndex={-1}
        cursor={'none'}
        top={28}
      ></chakra.canvas>
    </Flex>
  )
}

interface ParticleOptions {
  x: number
  y: number
  angle: number
  speed: number
  accel: number
}

const ParticleAnimation = (canvas: HTMLCanvasElement) => {
  let ctx: CanvasRenderingContext2D,
    particles: Array<Particle>,
    tick: number,
    width: number,
    height: number,
    min: number,
    globalRotation: number,
    globalAngle: number

  const PI = Math.PI
  const TWO_PI = PI * 2

  class Particle {
    radius: number
    x: number
    y: number
    angle: number
    speed: number
    accel: number
    decay: number
    life: number

    constructor(opt: ParticleOptions) {
      this.radius = 7
      this.x = opt.x
      this.y = opt.y
      this.angle = opt.angle
      this.speed = opt.speed
      this.accel = opt.accel
      this.decay = 0.01
      this.life = 1
    }

    step(i: number) {
      this.speed += this.accel
      this.x += Math.cos(this.angle) * this.speed
      this.y += Math.sin(this.angle) * this.speed
      this.angle += PI / 64
      this.accel *= 1.01
      this.life -= this.decay

      if (this.life <= 0) {
        particles.splice(i, 1)
      }
    }

    draw(i: number) {
      ctx.fillStyle = ctx.strokeStyle =
        'hsla(' + (tick + this.life * 120) + ', 100%, 60%, ' + this.life + ')'
      ctx.beginPath()
      if (particles[i - 1]) {
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(particles[i - 1].x, particles[i - 1].y)
      }
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(
        this.x,
        this.y,
        Math.max(0.001, this.life * this.radius),
        0,
        TWO_PI
      )
      ctx.fill()

      var size = Math.random() * 1.25
      ctx.fillRect(
        ~~(this.x + (Math.random() - 0.5) * 35 * this.life),
        ~~(this.y + (Math.random() - 0.5) * 35 * this.life),
        size,
        size
      )
    }
  }

  const step = () => {
    particles.push(
      new Particle({
        x: width / 2 + (Math.cos(tick / 20) * min) / 2,
        y: height / 2 + (Math.sin(tick / 20) * min) / 2,
        angle: globalRotation + globalAngle,
        speed: 0,
        accel: 0.01,
      })
    )

    particles.forEach(function (elem, index) {
      elem.step(index)
    })

    globalRotation += PI / 6
    globalAngle += PI / 6
  }

  const draw = () => {
    ctx.clearRect(0, 0, width, height)

    particles.forEach(function (elem, index) {
      elem.draw(index)
    })
  }

  const init = () => {
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    width = 300
    height = 300
    canvas.width = width * window.devicePixelRatio
    canvas.height = height * window.devicePixelRatio
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    min = width * 0.5
    particles = []
    globalAngle = 0
    globalRotation = 0
    tick = 0

    ctx.globalCompositeOperation = 'lighter'
    loop()
  }

  const loop = () => {
    requestAnimationFrame(loop)
    step()
    draw()
    tick++
  }

  return {
    init,
  }
}

export { Spinner }
