
import React from 'react';
import PropTypes from 'prop-types';
import {users} from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem'

const UsersList = () => (
  <div>
    <ul>
      {users.map(({name, average, attendance}) =>(
          <UsersListItem/>
      ))}
    </ul>
  </div>
);

UsersList.propTypes = {};

export default UsersList;
