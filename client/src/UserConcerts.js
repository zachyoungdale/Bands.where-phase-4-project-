import React from 'react';

function UserConcerts({ comments }) {

    return(
        <div>
            <ul>
            {comments?.map((comment) => {
                return <li className="comment">{comment}</li>
            })}
            </ul>
        </div>
    )
}

export default UserConcerts;