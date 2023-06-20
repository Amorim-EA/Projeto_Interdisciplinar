const { Pool } = require('pg');

let connect = async function () {
  try {
    if (global.connection) {
      return Promise.resolve(global.connection);
    }

    const pool = new Pool({
      connectionString: 'postgres://postgres:postgres@127.0.0.1:5432/projeto-interdiciplinar'
    });

    global.connection = pool;
    return Promise.resolve(pool);
  } catch (error) {
    console.error('Erro ao estabelecer a conexão:', error);
    throw error;
  }
};

module.exports = { connect };

//postgres://gurjcvqg:LyBRWvNvQ2VgKGVcYxpuYS7YSINd1GBq@silly.db.elephantsql.com/gurjcvqg