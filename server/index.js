const express = require('express')
const path = require('path')
const morgan = require('morgan')
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema')

const app = express()


// Logging middleware
app.use(morgan('dev'))

// Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))


// graphql endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


app.use('/api', require('./api')); // include our routes!



// sends index.html
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})


// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})



module.exports = app;
