import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './Components/Context/CartProvider.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <CartProvider>

      <Auth0Provider
        domain="dev-0cos6k0z848ievhv.us.auth0.com"
        clientId="6N7msM95YWjQJjawdu5g6JddUnunwYZC"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>,


    </CartProvider>
  </BrowserRouter>,
)
