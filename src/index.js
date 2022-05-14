import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import 'modern-normalize/modern-normalize.css'
import './styles/index.css'
import App from './App'
import { persistor, store } from '../src/redux/store'
import LoginForm from './components/LoginForm/LoginForm'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <LoginForm></LoginForm>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
