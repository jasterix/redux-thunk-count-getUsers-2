import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
import Users from "./Users";
import { increment, decrement, getUsers, fetchUsers } from "../redux/Actions";

class Container extends Component {
  componentDidMount = () => {
    console.log(this.props.count);
    //this.props.getUsers();
  };
  render() {
    return (
      <div>
        <Counter
          count={this.props.currentCount}
          increment={this.props.increment}
          decrement={this.props.decrement}
        />
        <Users
          fetchUsers={this.props.getUsers}
          users={this.props.currentUsers}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCount: state.count,
  currentUsers: state.users
});

const mapDispatchToProps = {
  increment,
  decrement,
  getUsers,
  fetchUsers
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
