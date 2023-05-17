import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../src/redux/Store/store";
import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderConfig from "./components/AuthZeroConfig/auth0config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider {...Auth0ProviderConfig}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
