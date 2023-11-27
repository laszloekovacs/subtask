import { Authenticator } from 'remix-auth'
import { Auth0Strategy } from 'remix-auth-auth0'
import { sessionStorage } from './session.server'
import chalk from 'chalk'

export const authenticator = new Authenticator<string>(sessionStorage)

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: process.env.AUTH_CALLBACK!,
    clientID: process.env.AUTH_CLIENT_ID!,
    clientSecret: process.env.AUTH_CLIENT_SECRET!,
    domain: process.env.AUTH_DOMAIN!,
  },

  async ({ accessToken, refreshToken, extraParams, profile }) => {
    //return User.findOrCreate({ email: profile.emails[0].value });
    console.log(chalk.green('[ auth ]:'), {
      accessToken,
      refreshToken,
      extraParams,
      profile,
    })
    return 'mike'
  }
)

authenticator.use(auth0Strategy)
