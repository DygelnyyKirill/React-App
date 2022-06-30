import React from "react";
import UserNameItem from "./UserNameItem";

import './UserNameList.css'

const UserNameList = props => {
    return (
        <ul className="user-list">
           {props.items.map(user => (
            <UserNameItem>
                {user.user}
            </UserNameItem>
           ))}
        </ul>
    );
};

export default UserNameList;