import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
// import { store } from './store/store.js';
// import { Provider } from 'react-redux';
import { CuentaCorrienteApp } from './CuentaCorrienteApp.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <HashRouter>
      <CuentaCorrienteApp />
    </HashRouter>
    {/* </Provider> */}
  </StrictMode>,
)
