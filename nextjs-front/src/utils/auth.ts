export const KEYCLOAK_PUBLIC_CONFIG = {
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM as string,
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL as string,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID as string,
};
