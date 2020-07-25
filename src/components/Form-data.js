import React, { Component } from 'react';

export default props => {

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: document.getElementById('username').value,
            rank: document.getElementById('rank').value
        }
        console.log("User data:", newUser);
        props.onUserAdd(newUser);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>
                Username:
  <input id="username" type="text" />
            </label>
            <label>
                Rank:
  <input id="rank" type="text" />
            </label>
            <button type="submit">Add New User</button>
        </form>
    )
}