import React from 'react'
import { Link, useLoaderData } from '@remix-run/react'
import { json, type LoaderFunction } from '@remix-run/node'
import { getSession } from '~/services/session.server'

export const loader: LoaderFunction = (params) => {
  const session = getSession(params.request.headers.get('Cookie'))

  return json(session)
}

const DebugHeader = () => {
  const session = useLoaderData<typeof loader>()

  return (
    <section className="row gap-2">
      <div>
        <Link to="/login">login</Link>
      </div>
      <details>
        <summary>profile</summary>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </details>
    </section>
  )
}

export default DebugHeader
