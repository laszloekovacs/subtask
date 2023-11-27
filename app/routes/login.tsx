import { Form } from '@remix-run/react'

export default function Login() {
  return (
    <Form action="/auth/auth0" method="post">
      <button type="submit">Login</button>
    </Form>
  )
}
