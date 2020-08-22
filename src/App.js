import React from 'react';
import { Link, Route } from 'wouter'
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import Login from './pages/Login'
import Header from './components/Header'
import './App.css';

// import staticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'
import { UserContextProvider } from './context/UserContext'

// con el link cosigo que sea una SPA

function App() {

	return (
		// <staticContext.Provider value={{ 
		// 	// Initial Value
		// }}>
		<UserContextProvider >
			<div className="App">
				<section className="App-content">
					<Header />					
					<Link to="/">
						<figure className="App-logo App-header">
							{/* <img alt="giphify logo" src="/logo.png" /> */}
							<span>GIPHIFY</span>
						</figure>
					</Link>

					<GifsContextProvider>
						<Route 
							path="/" 
							component={Home} 
						/>
						<Route 
							path="/search/:keyword/:rating?" 
							component={SearchResults} 
						/>
						<Route 
							path="/gif/:id" 
							component={Detail} 
						/>
						<Route 
							path="/login" 
							component={Login} 
						/>
						<Route 
							path="/404" 
							component={() => <h1>404 Error</h1>} 
						/>
					</GifsContextProvider>

				</section>
			</div>
		</UserContextProvider>
		// </staticContext.Provider>
	);
}

export default App;

// Context object:
// 1. Consumidor
// 2. Proveedor
// Everything that is wrapped up in this object wil have access to it
