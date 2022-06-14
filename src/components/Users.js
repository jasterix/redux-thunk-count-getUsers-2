import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.fetchUsers()}>Load Users</button>
        <div>
          {this.props && this.props.users
            ? this.props.users.map((user) => {
                return <div key={user.id}>{user.name}</div>;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Users;
