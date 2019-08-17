const app = require('./server');
const PORT = process.env.PORT || 1337;

const mongoose = require('mongoose')
const db = require('./config/secrets').MONGO_URI
const chalk = require('chalk');



const init = async () => {
  await mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log(chalk.blue.bold('MongoDB Connected...')))
  .catch(err => console.log(chalk.red.bold(`${err}`)))
  app.listen(PORT, () => console.log(`==> 🌎 Listening at http://localhost:${PORT}`))
}

init();
