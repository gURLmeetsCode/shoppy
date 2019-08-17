import React, {Component} from 'react'
import Items from './Items'


import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo"

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql'
})

export default class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <div className="container">
            <div className="main-logo">
              <h2 className="main-logo-title"><img className="main-icon" src="#" alt="tv"/>Shoppy</h2>
            </div>
          <Items />
        </div>
      </ApolloProvider>
    )
  }
}
