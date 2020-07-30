import { useEffect, useRef, useState } from "react"

export default function useIntersectionObserver({ distance = "100px" } = {}) {
	const [show, setShow] = useState(false)
	const elementRef = useRef()

	useEffect(() => {
		const onChange = (entries, observer) => {
			const el = entries[0]
			if(el.isIntersecting) {
				setShow(true)
				observer.disconnect() // so it stops rendering
			}
		}

		// This API allows me to know when an element is in the viewport
		const observer = new IntersectionObserver(onChange, {
			rootMargin: distance // distance to the element when gets triggered
		})

		observer.observe(elementRef.current)

		return() => observer.disconnect() // cleans
	})
	return {show, elementRef}
}