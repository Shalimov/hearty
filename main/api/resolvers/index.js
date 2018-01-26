const Scalars = require('./scalars')
const Queries = require('./queries')
const Mutations = require('./mutations')

module.exports = Object.assign({}, Queries, Mutations, Scalars)
