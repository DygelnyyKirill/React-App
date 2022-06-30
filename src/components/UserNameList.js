import React from "react";

import './UserNameList.css'

const UserNameList = props => {
    return (
        <ul className="user-list">
           {props.items.map(user => (
            <p>{user.user}</p>
           ))}
        </ul>
    );
};

export default UserNameList;