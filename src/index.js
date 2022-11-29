import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { getUser } from './state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
		<React.StrictMode>
			<App function={getUser}/>
		</React.StrictMode>
	</BrowserRouter>
);
