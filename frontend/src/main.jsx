import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Store } from './store/Store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import Bottom from './components/Bottom.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
    </Provider>
)
