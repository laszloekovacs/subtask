import type { LoaderFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/services/auth.server'

// called by auth0
export const loader = async ({ request }: LoaderFunctionArgs) => {
  return await authenticator.authenticate('auth0', request, {
    successRedirect: '/',
    failureRedirect: '/login_error',
  })
}
