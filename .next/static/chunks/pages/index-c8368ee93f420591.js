(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2312)}])},2312:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return We}});var r=n(5893),o=n(8527),i=n(7294),a=n(2684),l=n(949),c=n(8364),s=n.n(c),u=n(6030);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(e){var t,n=e.ref,r=e.threshold,o=void 0===r?0:r,a=(0,i.useState)(!1),l=a[0],c=a[1],s=(0,i.useCallback)((function(e){var n=h(e,1)[0];n.isIntersecting&&(c(n.isIntersecting),t.disconnect())}),[]);return(0,i.useEffect)((function(){return(t=new IntersectionObserver(s,{threshold:o})).observe(n.current),function(){t.disconnect()}}),[n,s,o]),l};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=function(e){var t=e.delay,n=void 0===t?0:t,a=e.children,l=g(e,["delay","children"]),c=(0,i.useRef)(null),s=b({ref:c,threshold:.5});return(0,i.useEffect)((function(){c.current&&s&&u.Z.timeline().add({targets:c.current,delay:n,duration:0,opacity:1}).add({targets:c.current.children,duration:800,elasticity:600,delay:100,opacity:{value:[0,1],duration:600,easing:"linear"},scaleX:{value:[.4,1]},scaleY:{value:[.6,1],duration:1e3}})}),[c,s,n]),(0,r.jsx)(o.xu,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}({ref:c},l,{opacity:0,children:a}))},v=n(1604);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=function(e){var t=e.children,n=j(e,["children"]),o=(0,i.useRef)(null),a=function(e){var t=e.scale,n=e.duration,r=e.elasticity,i=e.zIndex;u.Z.remove(o.current),u.Z.timeline().add({targets:o.current,duration:0,zIndex:i}).add({targets:o.current,duration:n,easing:"spring(1, 100, 10, 10)",elasticity:r,scale:t})},l=(0,i.useCallback)((function(){a({scale:1.2,duration:800,elasticity:400,zIndex:1})}),[]),c=(0,i.useCallback)((function(){a({scale:1,duration:600,elasticity:300,zIndex:0})}),[]);return(0,r.jsx)(v.m$.span,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}({ref:o},n,{onMouseEnter:l,onMouseLeave:c,children:t}))};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k=function(e){var t=e.delay,n=void 0===t?0:t,a=e.children,l=S(e,["delay","children"]),c=(0,i.useRef)(null),s=b({ref:c,threshold:.5}),f=(null===a||void 0===a?void 0:a.split(""))||[],d=100*f.length;return(0,i.useEffect)((function(){c.current&&s&&u.Z.timeline().add({targets:c.current,delay:n,duration:0,opacity:1}).add({targets:c.current.children,delay:function(e,t){return 100*(t+1)},duration:d,easing:"easeOutExpo",offset:"-=775",opacity:[0,1]})}),[c,s,n,d]),(0,r.jsx)(o.xv,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}({ref:c},l,{opacity:0,children:f.map((function(e,t){return(0,r.jsx)(P,{children:e},t)}))}))},P=function(e){var t=e.children,n=(0,i.useState)(!1),o=n[0],a=n[1],l=function(){o?setTimeout((function(){a(!1)}),1200):a(!0)};return(0,r.jsx)("span",{style:{display:" "===t?"inline":"inline-block"},className:"rubberBand ".concat(o&&"animated"),onMouseEnter:l,onMouseLeave:l,children:t})};function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var E=function(e){var t=e.delay,n=void 0===t?0:t,a=e.children,l=I(e,["delay","children"]),c=(0,i.useRef)(null),s=b({ref:c,threshold:.2});return(0,i.useEffect)((function(){c.current&&s&&u.Z.timeline().add({targets:c.current,delay:n,duration:0,opacity:1}).add({targets:c.current.children,duration:1400,easing:"spring(1, 80, 10, 0)",opacity:[0,1],translateY:[100,0]})}),[c,s,n]),(0,r.jsx)(o.xu,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}({ref:c},l,{opacity:0,children:a}))};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var N=function(e){var t=e.delay,n=void 0===t?0:t,a=e.children,l=M(e,["delay","children"]),c=(0,i.useRef)(null),s=b({ref:c,threshold:.2});return(0,i.useEffect)((function(){c.current&&s&&u.Z.timeline().add({targets:c.current,delay:n,duration:200,opacity:1}).add({targets:c.current.children,rotateY:[-90,0],duration:1300})}),[c,s,n]),(0,r.jsx)(o.xu,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_(e,t,n[t])}))}return e}({ref:c},l,{opacity:0,children:a}))},A=n(3466),T=n.n(A);function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t,n){return t&&W(e.prototype,t),n&&W(e,n),e}var R=function(){var e=(0,i.useRef)(null);return(0,i.useEffect)((function(){if(e.current){var t=D(e.current);return t.init(),function(){t.destroy()}}}),[]),(0,r.jsx)(v.m$.canvas,{ref:e,position:"absolute",zIndex:-1,top:0,left:0,width:"full",height:"100vh",cursor:"none"})},D=function(e){var t,n,r=function(e){1==e.touches.length&&(o.x=e.touches[0].pageX,o.y=e.touches[0].pageY)},o={},i=[],a=.5,l=20,c=50,s=.25,u=.98,f=2*Math.PI,d=function(){function e(t){U(this,e),this.value=0,this.phase=t.phase||0,this.offset=t.offset||0,this.frequency=t.frequency||.001,this.amplitude=t.amplitude||1}return z(e,[{key:"update",value:function(){return this.phase+=this.frequency,this.value=this.offset+Math.sin(this.phase)*this.amplitude,this.value}},{key:"getValue",value:function(){return this.value}}]),e}(),p=function(){function e(t){var n;U(this,e),this.spring=(null!==(n=t.spring)&&void 0!==n?n:0)+.1*Math.random()-.05,this.friction=a+.01*Math.random()-.005,this.nodes=[];for(var r,i=0;i<c;i++)(r=new h).x=o.x,r.y=o.y,this.nodes.push(r)}return z(e,[{key:"update",value:function(){var e=this.spring,t=this.nodes[0];t.vx+=(o.x-t.x)*e,t.vy+=(o.y-t.y)*e;for(var n,r=0,i=this.nodes.length;r<i;r++)t=this.nodes[r],r>0&&(n=this.nodes[r-1],t.vx+=(n.x-t.x)*e,t.vy+=(n.y-t.y)*e,t.vx+=n.vx*s,t.vy+=n.vy*s),t.vx*=this.friction,t.vy*=this.friction,t.x+=t.vx,t.y+=t.vy,e*=u}},{key:"draw",value:function(){var e,n,r=this.nodes[0].x,o=this.nodes[0].y;t.beginPath(),t.moveTo(r,o);for(var i=1,a=this.nodes.length-2;i<a;i++)e=this.nodes[i],n=this.nodes[i+1],r=.5*(e.x+n.x),o=.5*(e.y+n.y),t.quadraticCurveTo(e.x,e.y,r,o);e=this.nodes[i],n=this.nodes[i+1],t.quadraticCurveTo(e.x,e.y,n.x,n.y),t.stroke(),t.closePath()}}]),e}(),h=function e(){U(this,e),this.x=0,this.y=0,this.vx=0,this.vy=0},b=function(){t.globalCompositeOperation="source-over",t.fillStyle="rgba(8,5,16,0.4)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.globalCompositeOperation="lighter",t.strokeStyle="hsla("+Math.round(n.update())+",90%,50%,0.25)",t.lineWidth=1,t.clearRect(0,0,e.width,e.height);for(var r,o=0;o<l;o++)(r=i[o]).update(),r.draw();t.stats.update(),y(b)},m=function(){t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight},g=function(e){e.touches?(o.x=e.touches[0].pageX,o.y=e.touches[0].pageY):(o.x=e.clientX,o.y=e.clientY)},y=window.requestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};return{init:function(){(t=e.getContext("2d")).stats=new(T()),n=new d({phase:Math.random()*f,amplitude:85,frequency:.0015,offset:285}),document.body.addEventListener("orientationchange",m),window.addEventListener("resize",m),document.addEventListener("mousemove",g),document.addEventListener("touchmove",g),document.addEventListener("touchstart",r),o.x=Math.random()*t.canvas.width,o.y=Math.random()*t.canvas.height,m(),function(){i=[];for(var e=0;e<l;e++)i.push(new p({spring:.45+e/l*.025}))}(),b(),setTimeout((function(){g({clientX:Math.random()*t.canvas.width,clientY:Math.random()*t.canvas.height})}),2e3),setTimeout((function(){g({clientX:Math.random()*t.canvas.width,clientY:Math.random()*t.canvas.height})}),2200)},destroy:function(){document.body.removeEventListener("orientationchange",m),window.removeEventListener("resize",m),document.removeEventListener("mousemove",g),document.removeEventListener("touchmove",g),document.removeEventListener("touchstart",r)}}};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var F=function(e){var t=e.children,n=q(e,["children"]);return(0,r.jsx)(o.xv,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){L(e,t,n[t])}))}return e}({fontFamily:"La Belle Aurore",fontSize:"xl"},n,{children:"<".concat(t,">")}))},B=n(9876),Y=n(7375),$=n(8718),H=n(5113),Z=n(4651);function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){X(e,t,n[t])}))}return e}function G(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var K=function(e){var t=e.navItems,n=e.onNavigate,i=void 0===n?function(){}:n,a=(0,Y.qY)(),c=a.isOpen,s=a.onToggle,u=a.onClose;return(0,r.jsx)(o.xu,{boxShadow:"md",bg:(0,l.ff)("white","gray.800"),children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Q,{navItems:t,isOpen:c,onToggle:s,onNavigate:i,display:c?"none":"flex"}),(0,r.jsx)($.dy,{autoFocus:!1,isOpen:c,placement:"left",onClose:u,returnFocusOnClose:!1,onOverlayClick:u,size:"full",children:(0,r.jsxs)($.sc,{bg:(0,l.ff)("white","gray.800"),children:[(0,r.jsx)(Q,{navItems:t,isOpen:c,onToggle:s,onNavigate:i}),(0,r.jsx)(ee,{navItems:t,display:{base:"flex",md:"none"},h:"100vh",onClose:u,onNavigate:i})]})})]})})},Q=function(e){var t=e.navItems,n=e.isOpen,i=e.onToggle,a=e.onNavigate,l=G(e,["navItems","isOpen","onToggle","onNavigate"]);return(0,r.jsx)(o.W2,{maxW:"container.xl",mx:"auto",children:(0,r.jsxs)(o.kC,J({py:{base:2},align:"center"},l,{children:[(0,r.jsx)(o.kC,{flex:{base:1,md:"auto"},display:{base:"flex",md:"none"},children:(0,r.jsx)(H.hU,{variant:"ghost","aria-label":"Toggle Navigation",onClick:i,icon:n?(0,r.jsx)(B.Tw,{w:3,h:3}):(0,r.jsx)(B.Uq,{w:5,h:5})})}),(0,r.jsx)(o.kC,{flex:{base:1},justify:"start",display:{base:"none",md:"flex"},children:(0,r.jsx)(o.oM,{w:"32px",ratio:1,children:(0,r.jsx)(Z.Ee,{cursor:"pointer",objectFit:"cover",src:"favicon.ico",alt:"logo",onClick:function(){return a(t[0])}})})}),(0,r.jsx)(o.kC,{flex:{base:0,md:1},justify:"center",children:(0,r.jsx)(o.kC,{display:{base:"none",md:"flex"},ml:10,children:(0,r.jsx)(V,{navItems:t,onNavigate:a})})}),(0,r.jsx)(o.kC,{flex:{base:1,md:1},justify:"flex-end",direction:"row",children:(0,r.jsx)(ae,{})})]}))})},V=function(e){var t=e.navItems,n=e.onNavigate,a=function(e){var t=e.navItems,n=(0,i.useState)("Home"),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=[];return t.forEach((function(t){var n=new IntersectionObserver((function(e){d(e,1)[0].isIntersecting&&o(t.label)}),{threshold:.9});n.observe(t.ref.current),e.push(n)})),function(){e.forEach((function(e){e.disconnect()}))}}),[]),r}({navItems:t}),c=(0,l.ff)("gray.600","gray.200"),s=(0,l.ff)("gray.800","white"),u=(0,l.ff)("blackAlpha.600","yellow.200");return(0,r.jsx)(o.Kq,{direction:"row",spacing:4,children:t.map((function(e){return(0,r.jsxs)(o.gC,{spacing:0,children:[(0,r.jsx)(o.rU,{p:2,fontSize:"sm",fontWeight:500,color:c,_hover:{textDecoration:"none",color:s},onClick:function(){return n(e)},children:e.label}),a===e.label&&(0,r.jsx)(N,{w:"full",children:(0,r.jsx)(o.xu,{w:"100%",h:2,borderColor:u,borderTopWidth:2,borderTopStyle:"solid"})})]},e.label)}))})},ee=function(e){var t=e.navItems,n=e.onNavigate,i=e.onClose,a=G(e,["navItems","onNavigate","onClose"]),c=(0,l.ff)("white","gray.800"),s=(0,l.ff)("gray.600","gray.200");return(0,r.jsx)(o.Kq,J({bg:c,p:4,display:{md:"none"}},a,{children:t.map((function(e){return(0,r.jsx)(o.kC,{py:2,as:o.rU,align:"center",_hover:{textDecoration:"none"},onClick:function(){n(e),i()},children:(0,r.jsx)(o.xv,{fontWeight:600,color:s,children:e.label})},e.label)}))}))},te=function(e){var t=e.isOpen,n=void 0!==t&&t,o=e.onClose,i=void 0===o?function(){}:o,a=e.imageUrl;return(0,r.jsxs)($.u_,{isOpen:n,onClose:i,size:"xl",autoFocus:!1,children:[(0,r.jsx)($.ZA,{backdropFilter:"blur(3px)"}),(0,r.jsx)($.hz,{bg:"transparent",children:(0,r.jsx)(E,{children:(0,r.jsx)(Z.Ee,{src:a,fallback:(0,r.jsx)(re,{}),alt:"project"})})})]})};function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var re=function(){var e=(0,i.useRef)(null);return(0,i.useEffect)((function(){e.current&&oe(e.current).init()}),[]),(0,r.jsx)(o.kC,{justifyContent:"center",children:(0,r.jsx)(v.m$.canvas,{ref:e,position:"absolute",zIndex:-1,cursor:"none",top:28})})},oe=function(e){var t,n,r,o,i,a,l,c,s=Math.PI,u=2*s,f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.radius=7,this.x=t.x,this.y=t.y,this.angle=t.angle,this.speed=t.speed,this.accel=t.accel,this.decay=.01,this.life=1}var o,i,a;return o=e,(i=[{key:"step",value:function(e){this.speed+=this.accel,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed,this.angle+=s/64,this.accel*=1.01,this.life-=this.decay,this.life<=0&&n.splice(e,1)}},{key:"draw",value:function(e){t.fillStyle=t.strokeStyle="hsla("+(r+120*this.life)+", 100%, 60%, "+this.life+")",t.beginPath(),n[e-1]&&(t.moveTo(this.x,this.y),t.lineTo(n[e-1].x,n[e-1].y)),t.stroke(),t.beginPath(),t.arc(this.x,this.y,Math.max(.001,this.life*this.radius),0,u),t.fill();var o=1.25*Math.random();t.fillRect(~~(this.x+35*(Math.random()-.5)*this.life),~~(this.y+35*(Math.random()-.5)*this.life),o,o)}}])&&ne(o.prototype,i),a&&ne(o,a),e}(),d=function(){requestAnimationFrame(d),n.push(new f({x:o/2+Math.cos(r/20)*a/2,y:i/2+Math.sin(r/20)*a/2,angle:l+c,speed:0,accel:.01})),n.forEach((function(e,t){e.step(t)})),l+=s/6,c+=s/6,t.clearRect(0,0,o,i),n.forEach((function(e,t){e.draw(t)})),r++};return{init:function(){t=e.getContext("2d"),o=300,i=300,e.width=o*window.devicePixelRatio,e.height=i*window.devicePixelRatio,e.style.width=o+"px",e.style.height=i+"px",t.scale(window.devicePixelRatio,window.devicePixelRatio),a=.5*o,n=[],c=0,l=0,r=0,t.globalCompositeOperation="lighter",d()}}},ie=n(9583),ae=function(){var e=(0,l.If)(),t=e.colorMode,n=e.toggleColorMode,o="light"==t?(0,r.jsx)(ie.TLr,{}):(0,r.jsx)(ie.Mei,{});return(0,r.jsx)(H.hU,{"aria-label":"Toggle Mode",variant:"outline",colorScheme:"light"==t?"blackAlpha":"yellow",icon:o,onClick:n})};function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}function ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return le(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var fe=["HTML","CSS","ES5/ES6","TypeScript","REST","JSON","GSAP","Data Science","Wordpress","Web Assembly","C/C++","Node JS","Git","_lodash","Bootstrap","Chakra UI","SASS","ReactJS","NextJS","jQuery","SQl","MongoDB","Gulp","npm","AWS","Blockchain","Smart Contracts","RUST","NEAR Protocol"],de=(0,i.forwardRef)((function(e,t){var n=se({},e),c=(0,i.useRef)(null),u=ue((0,a.ac)("(min-width: 62em)"),1)[0];return(0,i.useEffect)((function(){var e=s()(c.current,fe,{radius:u?200:160,direction:45});return function(){return e.destroy()}}),[c,u]),(0,r.jsxs)(o.kC,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ce(e,t,n[t])}))}return e}({ref:t,justifyItems:"center",direction:{base:"column",md:"row"}},n,{children:[(0,r.jsxs)(o.kC,{direction:"column",flex:1,children:[(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(F,{children:"h2"}),(0,r.jsx)(k,{mx:5,fontSize:{base:"3xl",sm:"4xl",md:"5xl"},lineHeight:"normal",fontWeight:"bold",letterSpacing:"tight",children:"About me"}),(0,r.jsx)(F,{children:"/h2"})]}),(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(F,{children:"p"}),(0,r.jsxs)(o.xu,{mx:5,children:[(0,r.jsx)(o.xv,{fontSize:{base:"md",md:"lg"},fontWeight:"medium",mb:5,children:"We're here to serve customers well and help our communities prosper."}),(0,r.jsx)(o.xv,{fontSize:{base:"md",md:"lg"},fontWeight:"medium",mb:5,children:"We're more than 32,000 colleagues, supporting more than eight and a half million customers in Australia and overseas across: personal accounts, small, medium and large businesses, private clients, government and institutional activities."}),(0,r.jsx)(o.xv,{fontSize:{base:"md",md:"lg"},fontWeight:"medium",children:"We became NAB when the National Bank of Australasia (est. 1858) merged with the Commercial Banking Company of Sydney (est. 1834) on October 1, 1981."})]}),(0,r.jsx)(F,{children:"/p"})]})]}),(0,r.jsx)(o.kC,{flex:1,children:(0,r.jsx)(o.kC,{ref:c,w:"full",justifyContent:"center",alignItems:"center",color:(0,l.ff)("","yellow.200"),zIndex:1})})]}))}));de.displayName="About Section";var pe=n(4051),he=n.n(pe),be=n(3238),me=n(4612),ge=n(3441);function ye(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,o)}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xe(){return xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe.apply(this,arguments)}var je=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,we=(0,i.forwardRef)((function(e,t){var n=xe({},e),a=(0,be.pm)(),c=(0,l.If)().colorMode,s=(0,i.useState)(""),u=s[0],f=s[1],d=(0,i.useState)(""),p=d[0],h=d[1],b=(0,i.useState)(""),m=b[0],g=b[1],y=(0,i.useState)(""),v=y[0],x=y[1],j=(0,i.useState)(""),w=j[0],O=j[1],S=(0,i.useState)(!1),P=S[0],C=S[1],I=je.test(p),_=""!==p&&""!==v,M=function(){var e,t=(e=he().mark((function e(){var t,n,r;return he().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I){e.next=12;break}if(t={name:u,email:p,subject:m,message:v,spamMessage:w},""!==w){e.next=10;break}return C(!0),e.next=6,fetch("/api/contact",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 6:n=e.sent,r=200===n.status?"Thank you for contacting me. I will respond to your inquiry as soon as possible.":"I was unable to send your message. If you would like to contact me directly, you can reach me on Discord at bazoka#4355",a({description:r,status:"success",duration:5e3,isClosable:!0,position:"bottom"}),f(""),h(""),g(""),x(""),O(""),C(!1);case 10:e.next=13;break;case 12:a({description:"Please enter a valid email address.",status:"error",duration:3e3,isClosable:!0,position:"bottom"});case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){ye(i,r,o,a,l,"next",e)}function l(e){ye(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,r.jsxs)(o.kC,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ve(e,t,n[t])}))}return e}({ref:t,justifyItems:"center",direction:{base:"column",md:"row"}},n,{children:[(0,r.jsxs)(o.kC,{direction:"column",flex:1,children:[(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(F,{children:"h2"}),(0,r.jsx)(k,{mx:5,fontSize:{base:"3xl",sm:"4xl",md:"5xl"},lineHeight:"normal",fontWeight:"bold",letterSpacing:"tight",children:"Get in touch"}),(0,r.jsx)(F,{children:"/h2"})]}),(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(F,{children:"p"}),(0,r.jsx)(o.xu,{mx:5,children:(0,r.jsx)(o.xv,{fontSize:{base:"md",md:"lg"},fontWeight:"medium",children:"If you have any questions or comments, please feel free to contact me using the form below."})}),(0,r.jsx)(F,{children:"/p"})]}),(0,r.jsxs)(o.xu,{my:5,children:[(0,r.jsx)(F,{children:"form"}),(0,r.jsx)(E,{children:(0,r.jsxs)(o.gC,{align:"stretch",mx:5,children:[(0,r.jsxs)(o.Kq,{direction:{base:"column",md:"row"},w:"full",children:[(0,r.jsx)(E,{flex:1,children:(0,r.jsx)(me.II,{value:u,placeholder:"Name",onChange:function(e){var t=e.target;return f(t.value)}})}),(0,r.jsx)(E,{flex:1,delay:100,children:(0,r.jsx)(me.II,{value:p,placeholder:"Email (*)",onChange:function(e){var t=e.target;return h(t.value)}})})]}),(0,r.jsx)(E,{delay:300,children:(0,r.jsx)(me.II,{value:m,placeholder:"Subject",onChange:function(e){var t=e.target;return g(t.value)}})}),(0,r.jsx)(E,{delay:500,children:(0,r.jsx)(ge.g,{value:v,placeholder:"Message (*)",onChange:function(e){var t=e.target;return x(t.value)}})}),(0,r.jsx)(me.II,{value:w,display:"none",onChange:function(e){var t=e.target;return O(t.value)}}),(0,r.jsx)(E,{delay:700,children:(0,r.jsxs)(o.Ug,{w:"full",pt:5,children:[(0,r.jsx)(o.LZ,{}),(0,r.jsx)(H.zx,{colorScheme:"light"==c?"blackAlpha":"yellow",variant:"outline",onClick:M,disabled:!_||P,loadingText:"Submitting",isLoading:P,children:"Send message!"})]})})]})}),(0,r.jsx)(F,{children:"/form"})]})]}),(0,r.jsx)(o.kC,{flex:1,justifyContent:{base:"center",md:"flex-end"},alignItems:"center",children:(0,r.jsx)(E,{children:(0,r.jsx)(Z.Ee,{objectFit:"cover",src:"light"==c?"map-light.webp":"map-dark.webp",alt:"project name",width:{base:"full",md:"auto"},loading:"lazy"})})})]}))}));function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(){return Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}we.displayName="Contact Section";var ke=function(e){var t=Se({},e);return(0,r.jsxs)(o.kC,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Oe(e,t,n[t])}))}return e}({direction:"column"},t,{children:[(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(F,{mx:5,children:"/body"}),(0,r.jsx)(F,{children:"/html"})]}),(0,r.jsx)(o.xu,{my:5,children:(0,r.jsx)(o.M5,{children:(0,r.jsxs)(o.Ug,{children:[(0,r.jsx)(v.m$.span,{children:"Made with"}),(0,r.jsx)(v.m$.span,{color:"red.500",children:(0,r.jsx)(ie.$0H,{})}),(0,r.jsx)(v.m$.span,{children:"and"}),(0,r.jsx)(ie.EKJ,{})]})})})]}))},Pe=n(9008),Ce=function(){return(0,r.jsxs)(Pe.default,{children:[(0,r.jsx)("title",{children:"Diep Tran | Web Developer | Freelancer"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"description",content:"Software engineer with a passion for creative problem solving."}),(0,r.jsx)("meta",{name:"keywords",content:"Diep, creative developer, strong developer, javascript developer"}),(0,r.jsx)("meta",{property:"og:title",content:"Diep | Web Developer | Freelancer"}),(0,r.jsx)("meta",{property:"og:description",content:"Software engineer with a passion for creative problem solving."}),(0,r.jsx)("meta",{property:"og:url",content:"https://dieptr-portfolio.vercel.app/"}),(0,r.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:image",content:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/portfolio.png?alt=media&token=54cc45b0-178a-4a30-bb2a-69956648d3ba"})]})},Ie=[{thumbnailUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_cover_1.webp?alt=media&token=03bd8510-1607-473c-9409-85b138fcdc8b",fullImageUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_full_1.webp?alt=media&token=b59beb45-6678-4db1-8041-767f7abd5f20",alt:"Project Name"},{thumbnailUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_cover_2.webp?alt=media&token=b978b141-044b-4ef1-abcc-4863b3c52b6a",fullImageUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_full_2.webp?alt=media&token=e54bfc8a-ddb8-4f71-b6a5-cc7cf0ef8061",alt:"Project Name"},{thumbnailUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_cover_3.webp?alt=media&token=143900fb-2a3d-45b6-9aba-d45f349620dd",fullImageUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_full_3.webp?alt=media&token=d1025a8f-969b-403e-80c4-396ef9aa1825",alt:"Project Name"},{thumbnailUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_cover_4.webp?alt=media&token=02e99a3d-5115-4d37-8132-4406c6be1261",fullImageUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_full_4.webp?alt=media&token=1b27a66d-e123-4327-939a-75e5f50e4c90",alt:"Project Name"},{thumbnailUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_cover_5.webp?alt=media&token=69bba68b-c8b6-4b7a-9ed1-668cdf35a59f",fullImageUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_full_5.webp?alt=media&token=f53797cb-e360-428b-b0d7-ce1ec5433733",alt:"Project Name"},{thumbnailUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_cover_6.webp?alt=media&token=681c1884-3a5e-4419-a839-9d5095bde4ed",fullImageUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_full_6.webp?alt=media&token=dc07b9dd-0fac-4e6e-9bd0-2e7bd68e44a2",alt:"Project Name"},{thumbnailUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_cover_7.webp?alt=media&token=0dbd3c61-895d-4590-8319-f53bf0f24bca",fullImageUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_full_7.webp?alt=media&token=4ffd4b5b-6045-43a2-8d52-89bcb28a124e",alt:"Project Name"},{thumbnailUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_cover_8.webp?alt=media&token=07a3bf4d-0b36-4a2d-ba4b-08fcd1c4993e",fullImageUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_full_8.webp?alt=media&token=cc92d65a-de03-47e0-a0dd-50f0abc111e3",alt:"Project Name"},{thumbnailUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_cover_9.webp?alt=media&token=7aac1ed1-a70a-469a-b0f4-1026b12b1443",fullImageUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_full_9.webp?alt=media&token=559a06e1-43ac-4b2a-8e1c-3293de4da37e",alt:"Project Name"},{thumbnailUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_cover_10.webp?alt=media&token=6b5ed2cf-4377-4137-9d60-25af8dca3b55",fullImageUrl:"https://firebasestorage.googleapis.com/v0/b/portfolio-2e5d6.appspot.com/o/landingpage_full_10.webp?alt=media&token=923995ac-9acc-4a5b-afa8-550597f21595",alt:"Project Name"}];function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _e(){return _e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_e.apply(this,arguments)}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ee(e,t,n[t])}))}return e}var Ne=(0,i.forwardRef)((function(e,t){var n=_e({},e),a=(0,Y.qY)(),l=a.isOpen,c=a.onOpen,s=a.onClose,u=(0,i.useState)(),f=u[0],d=u[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.kC,Me({ref:t,direction:"column"},n,{children:[(0,r.jsxs)(o.kC,{direction:{base:"column",md:"row"},children:[(0,r.jsxs)(o.xu,{flex:3,children:[(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(F,{children:"h2"}),(0,r.jsx)(k,{mx:5,fontSize:{base:"3xl",sm:"4xl",md:"5xl"},lineHeight:"normal",fontWeight:"bold",letterSpacing:"tight",children:"Recent work"}),(0,r.jsx)(F,{children:"/h2"})]}),(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(F,{children:"p"}),(0,r.jsx)(o.xv,{mx:5,fontSize:{base:"md",md:"lg"},fontWeight:"medium",children:"We work with small, medium and large businesses. We also fund schools, hospitals, roads and other infrastructure essential to our communities and livelihoods. We do this in a way that's responsible, inclusive and innovative."}),(0,r.jsx)(F,{children:"/p"})]})]}),(0,r.jsx)(o.kC,{flex:1})]}),(0,r.jsxs)(o.xu,{my:10,children:[(0,r.jsx)(F,{children:"section"}),(0,r.jsx)(o.MI,{columns:{base:2,md:3,lg:5},children:Ie.map((function(e,t){return(0,r.jsx)(w,{children:(0,r.jsx)(y,{delay:Math.random()*Ie.length*50,display:{md:9===t?"none":"initial",lg:"initial"},children:(0,r.jsx)(o.oM,{ratio:4/3,opacity:0,children:(0,r.jsx)(Z.Ee,{objectFit:"cover",src:e.thumbnailUrl,alt:e.alt,onClick:function(){return function(e){d(e),c()}(e)},cursor:"pointer",loading:"lazy"})})})},t)}))}),(0,r.jsx)(F,{children:"/section"})]})]})),f&&(0,r.jsx)(te,{imageUrl:f.fullImageUrl,isOpen:l,onClose:s})]})}));function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}Ne.displayName="Portfolio Section";var Ue=(0,i.forwardRef)((function(e,t){e.children;var n=e.onNavigate,i=Te(e,["children","onNavigate"]),a=(0,l.If)().colorMode;return(0,r.jsxs)(o.kC,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ae(e,t,n[t])}))}return e}({ref:t,direction:"column",h:"100vh"},i,{children:[(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(F,{children:"html"}),(0,r.jsx)(F,{mx:5,children:"body"})]}),(0,r.jsx)(o.LZ,{}),(0,r.jsxs)(o.xu,{mx:10,children:[(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(F,{children:"h"}),(0,r.jsxs)(o.xu,{mx:5,fontSize:{base:"3xl",sm:"4xl",md:"5xl",lg:"6xl"},lineHeight:"none",fontWeight:"bold",letterSpacing:"tight",children:[(0,r.jsx)(k,{delay:300,children:"Hi,"}),(0,r.jsx)(k,{delay:800,children:"[NAME],"}),(0,r.jsx)(k,{delay:1800,children:"[JOB_TITLE]"})]}),(0,r.jsx)(F,{children:"/h"})]}),(0,r.jsx)(E,{delay:2200,children:(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(F,{children:"p"}),(0,r.jsx)(o.xv,{mx:5,fontSize:{base:"md",md:"lg"},fontWeight:"medium",opacity:.8,children:"I'm a software engineer at NAB"}),(0,r.jsx)(F,{children:"/p"})]})}),(0,r.jsx)(E,{delay:2400,children:(0,r.jsx)(o.xu,{my:5,mx:5,children:(0,r.jsx)(H.zx,{colorScheme:"light"==a?"blackAlpha":"yellow",variant:"outline",onClick:n,children:"Contact me!"})})})]}),(0,r.jsx)(o.LZ,{})]}))}));Ue.displayName="Welcome Section";var We=function(){var e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,i.useRef)(null),a=(0,i.useRef)(null),l=[{label:"Welcome",ref:e},{label:"Portfolio",ref:t},{label:"About",ref:n},{label:"Contact",ref:a}],c=function(e){var t=e.ref.current.getBoundingClientRect().top+window.pageYOffset-65;window.scrollTo({top:t,behavior:"smooth"})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ce,{}),(0,r.jsx)(o.xu,{as:"header",w:"full",position:"sticky",top:0,left:0,right:0,zIndex:2,minH:"4.5rem",children:(0,r.jsx)(K,{navItems:l,onNavigate:c})}),(0,r.jsx)(R,{}),(0,r.jsxs)(o.W2,{as:"main",maxW:"container.xl",minW:"sm",children:[(0,r.jsx)(Ue,{ref:e,onNavigate:function(){return c(l[3])}}),(0,r.jsx)(Ne,{ref:t,mx:10}),(0,r.jsx)(de,{ref:n,mx:10,my:20}),(0,r.jsx)(we,{ref:a,mx:10,my:20}),(0,r.jsx)(ke,{mt:20})]})]})}}},function(e){e.O(0,[445,439,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);