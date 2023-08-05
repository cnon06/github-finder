import React, { Component } from "react";


export class User extends Component {
//   constructor(props.user) {
//     super(props.user);

//     this.props.user = {
//       id: 59291488,
//       name: "Sinan Alagöz",
//       username: "cnon06",
//       avatar_url: "https://avatars.githubusercontent.com/u/59291488?v=4",
//       github_url: "https://github.com/cnon06",
//       website: "https://github.com/cnon06",
//       followers: 30,
//       following: 190,
//     };
//   }



  render() {
    const {avatar_url,login,html_url} = this.props.user;
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              alt={login}
              className="img-fluid rounded-start avatar"
              src={avatar_url}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h3 className="card-title">{login}</h3>
              {/* <p>Followers: {followers}</p>
              <p>Following: {this.props.user.following}</p> */}
              <a
                target="_blank"
                rel="noreferrer"
                href={html_url}
                className="btn btn-primary"
              >
                Github Profile
              </a>
              {/* <a
                target="_blank"
                href={this.props.user.website}
                className="btn btn-primary ms-2"
              >
                WebSite
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
