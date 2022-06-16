import { Provider } from 'react-redux';
import { useState } from 'react'
import './App.css'
import { store } from './store';

import AppRoutes from './routes'

function App() {

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App
