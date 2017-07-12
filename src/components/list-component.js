import React from 'react';
export default function ListComponent(props){

    const listItems = props.items.map((item)=>{
      return(
        <li key={item}>
        {item}
        </li>
      );
    })

    return(
      <ul>
      {listItems}
      </ul>
    )
}
