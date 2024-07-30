import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store/store.js'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from "./Components/Header.jsx"
 import ProductList from './Components/ProductList.jsx'
 

ReactDOM.createRoot(document.getElementById('root')).render(
  
<Provider store={store}>
  <BrowserRouter>
<App />
  </BrowserRouter>
  {/* <ProductList /> */}
</Provider>

 
)
