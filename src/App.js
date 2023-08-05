import Navbar from "./components/navbar";

import UserList from "./components/UserList";

import Search from "./components/Search";

import Alert from "./components/Alert";


import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
       users:[],
       error: null,
    }
  }



searchUsers = (keyWord) => 
{
    this.setState({loading: true});
setTimeout(() => 
{
  fetch(
   
    `https://api.github.com/search/users?q=${keyWord}`
   
  ).then(
    response => response.json()).then(data =>
  this.setState({users: data.items, loading: false}));

}, 500);
}

displayAlert = (msg, type) => 
{
    this.setState({error: {msg : msg, type: type }});

    setTimeout(()=>
    {
      this.setState({error: null});
    },2000);

}


clearResults = () => 
{
    this.setState({users: []});

}

  render() {
    return (
      <div>

      <Navbar />
      <Search searchUsers={this.searchUsers} clearResults={this.clearResults} activateClearButton = { this.state.users.length == 0 ? true : false }  displayAlert = {this.displayAlert} />
      <Alert error={this.state.error}/>
      <div className="container mt-3">
        <UserList  users={this.state.users} loading={this.state.loading}/>
      
      </div>
    </div>
    )
  }
}

// export default App

// function App() {
//   return (
//     <div>
//       <Navbar />

//       <div className="container mt-3">
//         <UserList />
      
//       </div>
//     </div>
//   );
// }

export default App;
