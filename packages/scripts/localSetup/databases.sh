findOrCreatePostgresSuperUser(){
  # Check to see if postgres user exists
  POSTGRES_SUPERUSER_COUNT=$(psql -At -c "SELECT COUNT(*) FROM pg_catalog.pg_roles WHERE pg_roles.rolname='postgres' AND pg_roles.rolsuper='t';")

  if ! [ "$POSTGRES_SUPERUSER_COUNT" == 1 ]
  then
    echo "A Postgres superuser role named 'postgres' does not exist"
    echo "Creating a 'postgres' superuser..."
    psql -c "CREATE USER postgres SUPERUSER;"

    POSTGRES_SUPERUSER_COUNT=$(psql -At -c "SELECT COUNT(*) FROM pg_catalog.pg_roles WHERE pg_roles.rolname='postgres' AND pg_roles.rolsuper='t';")
    if ! [ "$POSTGRES_SUPERUSER_COUNT" == 1 ]
    then
      echo "A Postgres superuser role could not be created, please set one up manually: https://www.postgresql.org/docs/8.1/sql-createrole.html"
    fi
  else
    echo "\xE2\x9C\x94 Postgres superuser already exists"
  fi
}

findOrCreateLocalDatabases(){
  # Development database
  DB_COUNT=$(psql -At -c "SELECT COUNT(*) FROM pg_catalog.pg_database WHERE datname='dreamcacher';")
  if ! [ $DB_COUNT == 1 ]
  then
    echo "Creating local database dreamcacher..."
    createdb -O postgres dreamcacher
    echo "\xE2\x9C\x94 Created dreamcacher"
  else
    echo "\xE2\x9C\x94 local database dreamcacher already exists."
  fi

  # Test Database
  TEST_DB_COUNT=$(psql -At -c "SELECT COUNT(*) FROM pg_catalog.pg_database WHERE datname='dreamcacher-test';")
  if ! [ $TEST_DB_COUNT == 1 ]
  then
    echo "Creating local test database dreamcacher-test..."
    createdb -O postgres dreamcacher-test
    echo "\xE2\x9C\x94 Created dreamcacher-test"
  else
    echo "\xE2\x9C\x94 Local database dreamcacher-test already exists."
  fi
}

findOrCreatePostgresSuperUser
findOrCreateLocalDatabases