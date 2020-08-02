import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('renders without crashing', async () => {
	const { findByText } = render(<App />);
	const linkElement = await findByText(/Last Search/i);
	expect(linkElement).toBeInTheDocument();
});


// test.only('search form works', async () => {
// 	render(<App/>)
// 	const input = await screen.findByRole("textbox")
// 	fireEvent.change(input, { target: {value: "LOL"}})
// 	const button = await screen.findByRole("textbox")
// 	fireEvent.click(button)

// 	screen.debug()
	
// 	const title = await screen.findByText("LOL")
// 	expect(title).toBeVisible()
// });

