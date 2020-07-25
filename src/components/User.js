import React from 'react';

const User = props => {
    return (
    <>
        <td>{props.username}</td>
        <td>{props.rank}</td>
        <td>{props.points}</td>
     </>   
    );
}

export default User




