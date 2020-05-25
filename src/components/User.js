import React from 'react';

const User = props => {
    return (
    <div>
        <td>{props.username}</td>
        <td>{props.rank}</td>
        <td>{props.points}</td>
     </div>   
    );
}

export default User