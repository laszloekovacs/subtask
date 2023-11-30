# Subtask is a tree like project planner. it has auth, the tasks are stored in mongoDB. uses auth0 for auth.

- users can create projects that holds tasks
- user can create tasks.
- task have a in created, in progress, finished, deleted state
- users can edit tasks
- users can delete tasks
- users can have private and public tasks
- the index page shows all users projects, and public projects

## IN PROGRESS

- [x] create a header component with a logo and a login / logout and profile button
- [x] add auth0 and mongoDB to the project
- [x] add remix auth

- [x] add session storage
- [x] add authenticator
- [x] add auth strategy (auth0 or github)
- [x] auth endpoint, callback
- [x] create a logout that removes the session
- [x] add auth0 tenant, get id, secret
- [x] double check auth0 env variables
- [ ] write proper README
- [ ] create a module that asserts env variables
- [ ] create a profile dropdown
- [ ] profile name in the header
- [ ] fix missing user account
- [ ] fancy error page

- [ ] implement oidc stuff
