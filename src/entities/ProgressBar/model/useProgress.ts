import { useEffect, useRef, useState } from "react"

export function useProgress(
  onProgress?: (value: number) => void,
  initialValue?: number
) {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState<number>(initialValue || 0)
  const ref = useRef<HTMLDivElement | null>(null)
  
  function change(e: MouseEvent) {
    if (!ref.current) return
    setActive(true)

    const left = ref.current.getBoundingClientRect().left
    const clientX = e.clientX
    const offsetWidth = ref.current.offsetWidth
    const val = 100 * (clientX - left) / offsetWidth
    
    setValue(val < 0 ? 0 : (
      val > 100 ? 100 : val
    ))
  }

  useEffect(() => {
    const mousemove = (e: MouseEvent) => change(e)
    const mousedown = (e: MouseEvent) => {
      change(e)

      document.addEventListener("mousemove", mousemove)
    }
    const mouseup = () => {
      setActive(false)
      document.removeEventListener("mousemove", mousemove)
    }

    if (ref.current) {
      ref.current.addEventListener("mousedown", mousedown)
    }

    document.addEventListener("mouseup", mouseup)

    return () => {
      setActive(false)
      document.removeEventListener("mouseup", mouseup)
      document.removeEventListener("mousemove", mousemove)
      
      if (ref.current) {
        ref.current.removeEventListener("mousedown", mousedown)
      }
    }
  }, [ref])
  
  useEffect(() => {
    if (ref.current) {
      if (onProgress instanceof Function) {
        onProgress(value)
      }

      ref.current.style.setProperty("--value", `${value}%`)
    }
  }, [ref, value, onProgress])

  return { ref, value, active }
}