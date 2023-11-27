import { createCookieSessionStorage } from '@remix-run/node'

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__subtask_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: ['supersecret'],
    secure: process.env.NODE_ENV === 'production',
  },
})

export let { getSession, commitSession, destroySession } = sessionStorage
