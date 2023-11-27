import { Form } from '@remix-run/react'

// start a login process
export default function Login() {
  return (
    <div>
      <Form action="/auth/auth0" method="post">
        <button type="submit">Login</button>
      </Form>

      <Form action="/auth/logout" method="post">
        <button type="submit">Logout</button>
      </Form>
    </div>
  )
}
