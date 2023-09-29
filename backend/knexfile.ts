module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'locadora'
      },
      migrations: {
        directory: './src/db/migrations'
      },
      seeds: {
        directory: './src/db/seeds'
      }
    }
  };
  