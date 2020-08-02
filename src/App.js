import React from 'react';
import './App.css';
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import { Link, Route } from 'wouter'
import staticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

// con el link cosigo que sea una SPA


//! https://www.youtube.com/watch?v=Wo7_OVtu1ls&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=7&t=2224s
// 32:50

function App() {

	return (
		<staticContext.Provider value={{
			// Valor inicial:
			name: "Daniela",
			suscribeteAlCanal: true
		}}>
			<div className="App">
				<section className="App-content">

					<Link to="/">
						<figure className="App-logo">
							{/* <img alt="giphify logo" src="/logo.png" /> */}
							<span>GIPGIFY</span>
						</figure>
					</Link>


					<GifsContextProvider>
						<Route 
							path="/" 
							component={Home} 
						/>
						<Route 
							path="/search/:keyword" 
							component={SearchResults} 
						/>
						<Route 
							path="/gif/:id" 
							component={Detail} 
						/>
					</GifsContextProvider>

				</section>
			</div>
		</staticContext.Provider>
	);
}

export default App;

// Context object:
// 1. Consumidor
// 2. Proveedor
// Everything that is wrapped up in this object wil have acces to it

// https://www.youtube.com/watch?v=2qgs7buSnHQ