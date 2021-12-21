
import React from 'react';
import PropTypes from 'prop-types';

const UsersList = () => (
    <li>
        <div>{average}</div>
          <div>
              <p>{name}</p>
              <p>{attendance}</p>
          </div>
        <button>X</button>
    </li>
);

UsersList.propTypes = {};

export default UsersList;
