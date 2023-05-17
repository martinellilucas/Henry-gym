import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = "dev-oa6kftjco4pbuzjl.us.auth0.com";
const CLIENT_ID = "6T6Kos97gZ7SHcH6Gf1Fxv6Uu14OK5qP";

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = () => {
    navigate("/home");
  };

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
