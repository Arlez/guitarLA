module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cj3tnsunqql8v0fknmkg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_k23n'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'CV5KwGQRf2JF6mCPxhEwfUDk0W56g9ap'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
