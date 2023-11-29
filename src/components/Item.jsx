import React from "react";

function Item(props) {

    

    return (
        <>
            <p>{props.info}</p>
            <button onClick={props.delete}>Delete task</button>
        </>

    )
}

export default Item