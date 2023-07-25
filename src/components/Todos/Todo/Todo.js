import React from 'react';

const Todo = ({todo}) => {
    const {id, title, completed} = todo
    return (
        <div>
            <h3>id:{id}</h3>
            <div>Title:{title}</div>
            <div>Completed:{completed}</div>
        </div>
    );
};

export default Todo;