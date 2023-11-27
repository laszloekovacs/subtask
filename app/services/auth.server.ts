import assert from 'assert'
import { Authenticator } from 'remix-auth'
import { Auth0Strategy } from 'remix-auth-auth0'
import { sessionStorage } from './session.server'
import chalk from 'chalk'

assert(process.env.CALLBACK)
assert(process.env.CLIENT_ID)
assert(process.env.CLIENT_SECRET)
assert(process.env.DOMAIN)

export const authenticator = new Authenticator<string>(sessionStorage)

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: process.env.CALLBACK!,
    clientID: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
    domain: process.env.DOMAIN!,
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
