import React from 'react'
import { LinkStyled, ButtonStyled } from './styles'


function Button({ children, href, size = "small" }) {
	return (
		href
		? <LinkStyled href={href} size={size}>{children}</LinkStyled>
		: <ButtonStyled size={size}>{children}</ButtonStyled>
	)
}

export default Button;