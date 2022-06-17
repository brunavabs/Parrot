import { Provider } from 'react-redux';
import { PersistGate }from 'redux-persist/integration/react'
import { store , persistor } from './store';
import AppRoutes from './routes'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer autoClose={3000}/>
        <AppRoutes /> 
      </PersistGate>
    </Provider>
  )
}

export default App
