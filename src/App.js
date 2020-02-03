import React from 'react';
import './App.css';

import Routes from './routes'
import Header from './components/Header'

const App = props => (
    <div className="App">
       <Header />
       <Routes />
    </div>
)

export default App;
