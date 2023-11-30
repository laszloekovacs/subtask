import { assertType, describe, expect, it } from 'vitest'
import type { Cookie } from '@remix-run/node'
import { createCookie } from '@remix-run/node'

describe('snap', () => {
  it('should uppercase text', () => {
    const res = 'hello'.toUpperCase()

    expect(res).toMatchInlineSnapshot('"HELLO"')
  })
  it('create a cookie', () => {
    const session = createCookie('session', {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'lax',
      secrets: ['supersecret'],
      secure: process.env.NODE_ENV === 'production',
    })

    assertType<Cookie>(session)
  })
})
