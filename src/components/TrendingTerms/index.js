import React, { Suspense } from 'react'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import Spinner from 'components/Spinner/Spinner'
// Lazy loading of component , Dynamic import: it imports whenever it needs it 
const TrendingTerms = React.lazy(
	() => import("./TrendingTerms")
)

export default function LazyTrendingTerms() {
	const { show, elementRef } = useIntersectionObserver({distance: "120px"})
	
	return (
		<div ref={elementRef}>
			{/* Lazy loading of component. Fallback is what will show until it loads */}
			<Suspense fallback={<Spinner/>}>
				{show ? <TrendingTerms/> : <Spinner/> }
			</Suspense>
		</div>
	)
}
