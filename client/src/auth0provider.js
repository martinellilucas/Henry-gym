import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

//  const DOMAIN = "dev-7nbk3insf1dr67c3.us.auth0.com";
//  const CLIENT_ID = "5GMWPIA9jVbH6tuVHd3lpPN4oTVILKdn";

const DOMAIN = "dev-6w4rjxduu3fdedog.us.auth0.com"
const CLIENT_ID = "6GRybLc3BIIUc8UimZrgZhBUYOrGRh7V"

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = () => {
    navigate("/home");
  };

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
