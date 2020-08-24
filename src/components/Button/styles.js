import { Link } from 'wouter'
import styled from "@emotion/styled"


const sizes = {
	small: "1rem",
	medium: "1.5rem",
	large: "3rem"
}

const getFontSize = props => {
	const size = sizes[props.size]
	if(!size) {
		console.warn("Incorrect size name for button");
		// To make it resilient
		return sizes.small
	}
	return size
}

export const LinkStyled = styled(Link)`
	padding: .5rem 1rem;
	cursor: pointer;
	// font-size: ${props => sizes[props.size]};
	font-size: ${getFontSize};
	background-color: royalblue;

	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
`

// Reutilize the styles with another component
export const ButtonStyled = LinkStyled.withComponent("button")