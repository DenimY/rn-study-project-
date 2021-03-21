
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ExploreContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteListings: [],
        };
        this.handleAddToFav = this.handleAddToFav.bind(this);
        this.renderListings = this.renderListings.bind(this);
        this.onCreateListClose = this.onCreateListClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

}


const ListingsQuery = gql`
  query {
    multipleListings{
      title,
      description
    }
  }
`

const ExploreContainerTab = graphql(ListingsQuery)(ExploreContainer);

export default ExploreContainerTab;