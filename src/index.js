import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
 import './index.css';
import App from './App';
import {GoogleOAuthProvider} from '@react-oauth/google'

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);




root.render(
    <StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGL_API_TOKEN}>
        <App />
    </GoogleOAuthProvider>
    </StrictMode>,

);
