import React from 'react';
import styles from './App.module.scss'
import AppRoutes from './routes/AppRoutes'
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App;
