import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import Cart from "cart/App"
import Auth from "auth/App"
import Admin from "admin/App"
import Order from "order/App"
import reduxStore from './redux/store'
import Layout from './pages/Layout'
import Protected from './share/Protected'

// HOST APP
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/cart/*' element={<Protected compo={<Cart />} />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/order/*' element={<Protected compo={<Order />} />} />
      </Route>
      {/* <Route path='/admin/*' element={<Admin />} /> */}
    </Routes>



  </BrowserRouter >
)
export default App
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
)


