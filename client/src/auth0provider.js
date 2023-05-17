import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = "dev-oa6kftjco4pbuzjl.us.auth0.com";
const CLIENT_ID = "6T6Kos97gZ7SHcH6Gf1Fxv6Uu14OK5qP";

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate("/home"); // Redirige a la ubicación deseada
  };

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback} // Añade el callback de redirección
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
