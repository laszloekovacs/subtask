import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { authenticator } from '~/services/auth.server'

// return if we got here by GET
export const loader = async ({ request }: LoaderFunctionArgs) => {
  return redirect('/')
}

// POST handler initialized by the user
export const action = async ({ request }: ActionFunctionArgs) => {
  return authenticator.authenticate('auth0', request)
}
