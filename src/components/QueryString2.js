import React from 'react';

function QueryString2(props) {
    const {name,id}=props
    return (
        <div>
            <h1>The props received are {name} and {id}</h1>
        </div>
    );
}

export default QueryString2;