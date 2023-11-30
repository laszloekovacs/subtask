import type { ActionFunctionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { destroySession, getSession } from '~/services/session.server'

/**
 * Handles the logout functionality by destroying the user session, redirecting to the Auth0 logout URL,
 * and setting the 'Set-Cookie' header to destroy the session cookie.
 * @param request - The request object containing the headers.
 * @returns A redirect response to the Auth0 logout URL with the 'Set-Cookie' header set.
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  // Retrieve the user session using the 'Cookie' header from the request
  const session = await getSession(request.headers.get('Cookie'))

  // Create a new URL object using the Auth0 logout URL from the environment variables
  const logoutURL = new URL(process.env.AUTH0_LOGOUT_URL!)

  // Set the 'client_id' and 'returnTo' query parameters in the logout URL
  logoutURL.searchParams.set('client_id', process.env.AUTH0_CLIENT_ID!)
  logoutURL.searchParams.set('returnTo', process.env.AUTH0_RETURN_TO_URL!)

  // Destroy the user session and retrieve the 'Set-Cookie' header value
  const setCookieHeader = await destroySession(session)

  // Redirect the user to the logout URL and set the 'Set-Cookie' header in the response
  return redirect(logoutURL.toString(), {
    headers: {
      'Set-Cookie': setCookieHeader,
    },
  })
}
