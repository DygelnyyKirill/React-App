import React from "react";
import Button from "../UI/Button";

import './UserNameInput.css'

const UserNameInput = props => {
    return (
        <form>
            <div className="form-control">
                <label>Username</label>
                <input type="text" />

                <label>Age(Years)</label>
                <input type="text" />
            </div>
            <Button type="submit">Add User</Button>
        </form>
    );
};


export default UserNameInput;