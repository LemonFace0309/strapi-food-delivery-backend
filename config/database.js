module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        // host: env('DATABASE_HOST', '127.0.0.1'),
        // srv: env.bool('DATABASE_SRV', false),
        // port: env.int('DATABASE_PORT', 27017),
        // database: env('DATABASE_NAME', 'backend'),
        // username: env('DATABASE_USERNAME', null),
        // password: env('DATABASE_PASSWORD', null),

        "uri": "mongodb://charles:Alexmuir39@cluster0-shard-00-00.rhldv.mongodb.net:27017,cluster0-shard-00-01.rhldv.mongodb.net:27017,cluster0-shard-00-02.rhldv.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-xp052l-shard-0&authSource=admin&retryWrites=true&w=majority"
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
