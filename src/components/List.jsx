import React from "react";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';


function List(props) {

    const arrayList = props.arrList
    const deleteItems = props.delete


    return (
        <ul>
            {arrayList.map((stringItem, i) => (
                <Item
                    key={uuidv4()}
                    info={stringItem.info}
                    delete= {() => deleteItems(i)}
                />
            ))}
        </ul>
    )

}

export default List