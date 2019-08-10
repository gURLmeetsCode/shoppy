const app = require('./server');
const db = require('./server/db/_db');
const PORT = process.env.PORT || 4000;

const init = async () => {
  await db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  console.log('db synced')
  app.listen(PORT, () => console.log(`==> 🌎 Listening at http://localhost:${PORT}`))
}

init();
