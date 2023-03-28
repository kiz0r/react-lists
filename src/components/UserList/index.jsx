import React, { Component } from 'react';
import UserListItem from './UserListItem';
import users from '../Users.js';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: users.map((u) => ({ ...u, isSelected: false })),
    };
  }

  selectUser = (id) => {
    const { users } = this.state;
    const foundIndex = users.findIndex((u) => u.id === id);

    const newUsers = [...users];
    newUsers[foundIndex] = {
      ...newUsers[foundIndex],
      isSelected: !newUsers[foundIndex].isSelected,
    };

    this.setState({ users: newUsers });
  };

  mapUser = (u) => {
    return <UserListItem key={u.id} user={u} selectUser={this.selectUser} />;
  };

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}

export default UserList;
