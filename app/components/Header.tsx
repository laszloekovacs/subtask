import { json, type LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getSession } from '~/services/session.server'
import { authenticator as auth } from '~/services/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await auth.isAuthenticated(request, {
    successRedirect: '/private',
  })
  const session = await getSession(request.headers.get('Cookie'))

  return json({ session, user })
}

/* holds logo and login / logout button  */
const Header = () => {
  const data = useLoaderData<typeof loader>()
  console.log(data)

  return (
    <>
      <section className="row space-between header">
        <div>
          <img src="subtask-logo.jpg" alt="subtask logo" height={'100px'} />
        </div>
        <div>
          <button>login / logout</button>
        </div>
      </section>
    </>
  )
}

export default Header
