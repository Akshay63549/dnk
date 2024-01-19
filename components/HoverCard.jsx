import { useState, useCallback } from "react"

function throttle(func, delay) {
  let lastCall = 0
  return (...args) => {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return func(...args)
  }
}

const HoverCard = ({icon}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback(
    throttle(e => {
      const card = e.currentTarget
      const box = card.getBoundingClientRect()
      const x = e.clientX - box.left
      const y = e.clientY - box.top
      const centerX = box.width / 2
      const centerY = box.height / 2
      const rotateX = (y - centerY) / 4
      const rotateY = (centerX - x) / 4

      setRotate({ x: rotateX, y: rotateY })
    }, 100),
    []
  )

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <>
      <div
        className="card relative  rounded-xl transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s"
        }}
      >
        <div className="group relative flex h-full w-full select-none items-center justify-center rounded-lg text-sm font-light text-slate-300">
          <div className="duration-600 absolute -inset-0.5 -z-10 rounded-lg opacity-0 blur transition group-hover:opacity-75" />
          <img src={icon} alt="icon category" width={96} height={96} className="w-14 h-14 md:w-20 md:h-20" />
        </div>
      </div>
    </>
  )
}

export default HoverCard
