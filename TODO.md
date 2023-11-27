# Subtask is a tree like project planner. it has auth, the tasks are stored in mongoDB. uses auth0 for auth.

- users can create projects that holds tasks
- user can create tasks.
- task have a in created, in progress, finished, deleted state
- users can edit tasks
- users can delete tasks
- users can have private and public tasks
- the index page shows all users projects, and public projects

## IN PROGRESS

[X] create a header component with a logo and a login / logout and profile button
[X] add auth0 and mongoDB to the project
[X] add remix auth

[X] add session storage
[X] add authenticator
[X] add auth strategy (auth0 or github)
[X] auth endpoint, callback
[X] create a logout that removes the session
[X] add auth0 tenant, get id, secret
[X] double check auth0 env variables
[] write proper README
[] create a module that asserts env variables
[] create a profile dropdown
[] profile name in the header
[] fix missing user account

[] fancy error page
