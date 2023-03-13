# Project Details

## Intent

This project is an interface to a backend for the CHS Feedback app. The purpose was to demonstrate how to deliver continuously. This is the server side of the application, which is hosted on Google Cloud platform. The client side of the application is hosted on Netlify.

## Timeline

The initial project start January 2023 in a series of demonstrations to the CHS team.

## Project Status

Work in Progress

## Specifics about the server side

1. The server side is written in TypeScript and uses the NestJS framework.
2. The server side is hosted on Google Cloud Platform.
3. The server side started of using Monday.com Graphql API to as a persistence layer.
4. Create a secret in GPC to store the Monday.com API key.
5. The first version did not persist the data,just held in an in-memory array on the server.

projects/396881755897/secrets/mondaykey/versions/1

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
