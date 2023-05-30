# Sillevon

It is a backend application to provide services to Sillevon frontend who will bring to the user
musical services such as musical contracts to live shows.

### ENDPOINTS

Our endpoint documentation is located in a file within a folder called 'docs' at the root of the
application. To access this documentation, please import the file into a Postman project. This will
give you access to all the available endpoints.

### Tech

Sillevon use technologies to work properly:

- [Node](https://nodejs.org/es) - is an open-source, cross-platform JavaScript runtime environment.
- [Express](https://expressjs.com/) - fast node.js network app framework
- [Mongo](https://www.mongodb.com/) - MongoDB Atlas combines the leading document-oriented database
  with a full suite of developer tools for accelerating app development.

## Installation

Sillevon requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
pnpm install
pnpm run dev
```

For run seeders and develop with an initial data:

```sh
pnpm run seeder:genres
pnpm run seeder:pricing
pnpm run seeder:users
```

### Environment Variables

We provide a file called '.env.example' at the root of the project. Please read this file and fill
it with your credentials before running the application.
