# Dreamcacher

This project is meant to be a repository for best practices and technologies I've picked up over the past year. Instead of storing them in a contextless environment, I'm incorporating them into a side project.

Dreamcacher is eventually meant to be a dream journaling application that incorporates data visualization and natural language processing features.

### Product Todo's

- [ ] Outline MVP feaures
- [ ] Create wireframes

Infrastructure Todo's

- [ ] Set up continuous deployment
- [ ] Setup up continuous integration
- [ ] Set up .env file configuration scripts
- [ ] Set up integration tests

API Todo's

- [ ] Add error handling
- [ ] Add request schema validation
- [ ] Add integration and unit tests

Datbase Todo's

- [ ] Add entity integration tests

Web Todo's

- [ ] Create Dreams index page with filtering and sorting

Longer Term Todo's

- [ ] Add users and authentication

## Project Setup

```bash
# Dependency installation
yarn install
yarn build

# Database setup
yarn setup:localDatabases
yarn setup:ormconfig
yarn migration:run

# Seed the database
yarn setup:seedDatabase

# Start the project
yarn watch
```

## Working with the monorepo

When running commands, take note of the directory you're working within. Commands should ideally be run from the root directory. In order to run a script within the context of a specific package instead of the root (for example, to install a new node module), either navigate to the directory or run the command with one of the following yarn workspace scripts:

```bash
# To run commands within a specifc package, use:
yarn api <command>
yarn database <command>
yarn scripts <command>
yarn shared <command>
yarn web <command>
```

## Database Interaction Scripts

Note: If working locally, you must `yarn build` the `database` package before the CLI will recognize any changes to the entity or migration files. This is because it will reference the `./dist` folder instead of the TypeScript files.

### Configure TypeORM

```bash
# Generate ormconfig.json, used to configure TypeORM CLI
yarn setup:ormconfig
```

### Migration Scripts

```bash
# Generate a migration file from changes to entity files
yarn migration:generate

# Generate an empty migration file
yarn migration:create

# Run migrations
yarn migration:run

# Revert a migration
yarn migration:revert

# Display the status of all migrations
yarn migration:show
```

### Utility Scripts

```bash
# Seed the database
yarn setup:seedDatabase

# Wipe existing data and seed the database
yarn setup:seedDatabase --wipeOldData
```
