import { css } from '@emotion/core'

export const pageErrorStyles = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	text-align: center;
`

export const codeErrorStyles = css`
	font-size: 5rem;
	font-weight: bold;
	font-style: italic;
`

export const msgErrorStyles = css`
	font-size: 1.5rem;
	margin: 1rem auto;
`

const SIZE = '350px'

export const gifErrorStyles = css({
	margin: "1rem auto",
	width: SIZE,
	height: SIZE,
	objectFit: 'cover',
	//   "&:hover": {
	// 	  transform: "scale(1.2)"
	//   }
})

