import { useEffect, useRef, useState } from "react"

export default function useIntersectionObserver({ distance = "100px", externalRef, once = true } = {}) {
	const [show, setShow] = useState(false)
	const elementRef = useRef()

	useEffect(() => {
		let observer

		const element = externalRef ? externalRef.current : elementRef.current

		const onChange = (entries, observer) => {
			const el = entries[0]
			if(el.isIntersecting) {
				setShow(true)
				once && observer.disconnect() // so it stops rendering
			} else {
				!once && setShow(false)
			}
		}

		// This API allows me to know when an element is in the viewport
		// const observer = new IntersectionObserver(onChange, {
		// 	rootMargin: distance // distance to the element when gets triggered
		// })

		// ... in case the browser doesnt support it 
		Promise.resolve(
			typeof IntersectionObserver !== 'undefined'
				? IntersectionObserver
				: import('intersection-observer')
		).then(() => {
			observer = new IntersectionObserver(onChange, {
				rootMargin: distance
			})
			if(element) observer.observe(element)
		})

		return() => observer && observer.disconnect() // cleans
	})
	return {show, elementRef}
}