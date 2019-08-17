const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')
const axios = require('axios')

const ShoppingListType = new GraphQLObjectType({
  name: "Item",
  fields:() => ({
    name: { type: GraphQLString},
    category: {type: GraphQLString}
  })
})




const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    items: {
      type: new GraphQLList(ShoppingListType),
      resolve(parentVal, args){
        return axios.get('#')
          .then(res => res.data)
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery
})
