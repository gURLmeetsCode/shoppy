import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Spinner from 'react-bootstrap/Spinner'
import SingleItemView from './SingleItemView'

const ITEMS_QUERY = gql `
query ItemsQuery{
  shows {
    name
    category
  }
}
`;


export class Items extends Component{
  render(){
    return (
      <Fragment>
        <h1 className="display-4 my-3">Shopping List</h1>
        <Query query={ITEMS_QUERY}>
        {
          ({ loading, error, data}) => {
            if(loading) return <Spinner animation="grow" variant="info" />
            if(error) console.error(error, "something went wrong" )
            return <Fragment>
              {
                data.shows.map(show => (
                  <SingleItemView key={show.premiered} show={show}/>
                ))
              }
            </Fragment>
          }
        }
        </Query>
      </Fragment>
    )
  }
}


export default Items
