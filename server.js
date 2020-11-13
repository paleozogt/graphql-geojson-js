const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

const PORT = process.env.PORT ? process.env.PORT : 8000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
