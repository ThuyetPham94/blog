import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import App from './App'
import UserRow from './UserRow'
import Pagination from "react-js-pagination";

class UserList extends Component {
  constructor (props) {
    super(props)
    this.state = {
        users: '',
        activePage: 0,
        itemsCountPerPage: 0,
        totalItemsCount: 0,
        pageRangeDisplayed: 5,
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount () {
    axios.get(window.Laravel.baseUrl + '/api/users?page=' + this.state.activePage)
      .then(response => {
        this.setState({
            users: response.data.data,
            activePage: response.data.current_page,
            itemsCountPerPage: response.data.per_page,
            totalItemsCount: response.data.total,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handlePageChange(pageNumber) {
    axios.get(window.Laravel.baseUrl + '/api/users?page=' + pageNumber)
        .then(response => {
            this.setState({
                users: response.data.data,
                activePage: response.data.current_page,
            });
        })
    }
  deleteRow (key) {
    var users = [...this.state.users];
    users.splice(key, 1);
    this.setState( {users} );
  }
  fetchRows () {
    if (this.state.users instanceof Array) {
      return this.state.users.map( (object, i) => {
        return <UserRow obj={object} key={i} index={i} deleteRow={ this.deleteRow.bind(this) } />
      })
    }
  }

  render () {
    return (
      <App>
        <h1>Users</h1>
        <div className='clearfix'>
          <Link className='btn btn-success pull-right' to='/users/create'>Add User</Link>
        </div><br />
        <table className='table table-hover'>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.fetchRows()}
          </tbody>
        </table>
        <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemsCountPerPage}
            totalItemsCount={this.state.totalItemsCount}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
        />
      </App>
    )
  }
}
export default UserList