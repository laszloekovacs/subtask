import { it, describe, expect } from 'vitest'
import { createCookieSessionStorage } from '@remix-run/node'

describe('session', () => {
  it('should create session', async () => {
    const sessionStorage = createCookieSessionStorage({
      cookie: {
        name: '__subtask_session',
        sameSite: 'lax',
        path: '/',
        httpOnly: true,
        secrets: ['supersecret'],
        secure: process.env.NODE_ENV === 'production',
      },
    })

    expect(sessionStorage).toBeDefined()
  })
})
