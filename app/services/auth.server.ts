import { Authenticator } from 'remix-auth'
import { Auth0Strategy } from 'remix-auth-auth0'
import { sessionStorage } from './session.server'

// creates the authentication handler
export const authenticator = new Authenticator<string>(sessionStorage)

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: process.env.AUTH0_CALLBACK!,
    clientID: process.env.AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    domain: process.env.AUTH0_DOMAIN!,
  },

  async ({ accessToken, refreshToken, extraParams, profile }) => {
    //return User.findOrCreate({ email: profile.emails[0].value });
    console.log('what is happening here')

    console.log({
      accessToken,
      refreshToken,
      extraParams,
      profile,
    })
    return 'mike'
  }
)

authenticator.use(auth0Strategy)
