# Dreamcacher

To Do

- [ ] Set up continuous deployment
- [ ] Setup up continuous integration
- [ ] Set up .env file configuration scripts

## Project Setup

```bash
// Dependency installation
yarn install
yarn build

// Database setup
yarn setup:localDatabases
yarn setup:ormconfig
yarn migration:run

// Seed the database
yarn setup:seedDatabase

// Start the project
yarn watch
```

## Working with the monorepo

When running commands, take note of the directory you're working within. Commands should ideally be run from the root directory. In order to run a script within the context of a specific package instead of the root (for example, to install a new node module), either navigate to the directory or run the command with one of the following yarn workspace scripts:

```bash
// To run commands within a specifc package, use:
yarn api <command>
yarn database <command>
yarn scripts <command>
yarn shared <command>
yarn web <command>
```

## Database Interaction Scripts

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
