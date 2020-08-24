// for emotion to translate:
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { Fragment } from "react";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";
import Button from 'components/Button'
import { pageErrorStyles, codeErrorStyles, msgErrorStyles, gifErrorStyles } from './styles'

import { jsx } from '@emotion/core'


const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];



export default function ErrorPage() {
	const randomImage = () => {
		return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
	}

	return (
		<Fragment>
			<Helmet>
				<title>Error 404 | Giffy</title>
			</Helmet>
			<header className="o-header">
				<SearchForm />
			</header>
			<div className="App-wrapper">
				<div css={pageErrorStyles}>
						<span css={codeErrorStyles}>404</span>
						<span css={msgErrorStyles}>Sometimes gettings lost isn't that bad</span>
						<img css={gifErrorStyles} src={randomImage()} alt="alt-page-404"/>
						<Button href='/'>Go back home</Button>
				</div>
			</div>
		</Fragment>
	);
}
 