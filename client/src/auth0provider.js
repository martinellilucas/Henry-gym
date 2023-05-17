import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = "dev-7nbk3insf1dr67c3.us.auth0.com";
const CLIENT_ID = "5GMWPIA9jVbH6tuVHd3lpPN4oTVILKdn";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useNavigate();

  const onRedirectCallback = () => {
    history.push("/home");
  };

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin + "/home"}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
