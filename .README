# Dreamcacher

To Do
[] Set up continuous deployment
[] Setup up continuous integration
[] Set up .env file configuration scripts

## Local Setup
`yarn install`

## Local Development Scripts

First time setup:
```
// Dependency installation
yarn install
yarn build

// Database setup
yarn setup:localDatabases
setup:ormconfig
```


To start the project locally:
`yarn watch`


### Database Interaction Scripts
Note: If working locally, you must `yarn build` the `database` package before the CLI will recognize any changes to the entity or migration files. This is because it will reference the `./dist` folder instead of the TypeScript files.

Generate the `ormconfig.json` file used to configure TypeORM CLI

Generate a migration file from changes to entity files
`yarn migration:generate`

Generate an empty migration file
`yarn migration:create`

Run migrations
`yarn migration:run`

Revert a migration
`yarn migration:revert`

Display the status of all migrations
`yarn migration:show`