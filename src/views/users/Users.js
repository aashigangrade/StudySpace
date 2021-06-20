import React, { Component } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { fetchBooks } from '../../client/actions/fetch' 
import { connect } from 'react-redux';
import Configstore from '../../client/store/store'
import User from './User';
  

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
// const store = Configstore()
// console.log(store.getState())
class Users extends Component{
    componentDidMount()  {
        const data = {
            year: this.props.match.params.year,
            type: this.props.match.params.type,
            subject: this.props.match.params.subject,

        }
        console.log(this.props.dispatch(fetchBooks(data)))
        console.log(this.props)
    }

    render() {
        return <User
            fileName={this.props}
     />
                
    }

}
const mapStateToProps = state => {
    return {
        books: state.books,
        fetch: state.fetch
    }
}


export default connect(mapStateToProps)(Users);