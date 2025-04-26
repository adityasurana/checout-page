// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Checkout from './components/Checkout';
import './App.css';

function App() {
	return (
		<div className="app">
			<Sidebar />
			<div className="main">
				<Header />
				<div className="content">
					<Checkout />
				</div>
			</div>
		</div>
	);
}

export default App;
