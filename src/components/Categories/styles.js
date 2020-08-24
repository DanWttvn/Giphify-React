import styled from "@emotion/styled"
import { Link } from "wouter"


// Media queries
const breakPoints = {
	desktop: "@media screen and (min-width: 55rem)"
}


export const CategoryTitle = styled.h3`
	color: white;
	font-weight: bold;
	margin-buttom: 0.7rem;
	margin-top: 0.6rem;
`

export const CategoryList = styled.ul`
	list-style-position: inside;
	display: flex;
	flex-wrap: wrap;
	padding: 0;
	margin: 0;

	${breakPoints.desktop} {
		justify-content: flex-end;
	}
`

const needWhiteLetters = [3, 4]

export const CategoryListItem = styled.li`
	list-style: none;
	padding: 0.3rem;
	margin: 0.2rem;
	font-size: 1.2rem;

	${props => {
		const colorIndex = props.index % 5 + 1
		const changeLettersColor = needWhiteLetters.includes(colorIndex)

		const textColor = changeLettersColor ? "white" : "var(--theme-body-bg)"

		return `
			background: var(--brand-color_${colorIndex});
			color: ${textColor};
		`
	}}

	& a {
		color: inherit;
	}
`

export const CategoryLink = styled(Link)`
	color: inherit;
	font-size: 1em;
	text-decoration: none;
	font-size: 1em;
	transition: color ease-in 0.1s;
`