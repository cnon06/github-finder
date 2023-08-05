import React, { Component } from 'react';
import User from "./User";
import Loading from './Loading';
export class UserList extends Component {
  
  render() {
    if(this.props.loading)
    {
        return(
            <Loading/>
        )
    }
    return (
      <div>{this.props.users.map((user,index) => (
        <User user={user} key={index}  />
    
      ))}</div>
    )
  }
}

export default UserList