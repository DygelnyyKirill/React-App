import React from "react";

import './UserNameItem.css'

const UserNameItem = props => {
    return (
        <li className="user-item">
            <p>{props.children}</p>
        </li>
    );
};

export default UserNameItem;