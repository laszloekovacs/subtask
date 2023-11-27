// app/routes/auth/auth0.tsx
import { redirect, type ActionFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/services/auth.server'

export const loader = () => redirect('/login')

/* i'm guessing this is where auth0 posts */
export const action = ({ request }: ActionFunctionArgs) => {
  return authenticator.authenticate('auth0', request)
}
