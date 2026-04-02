import React, { useState, useTransition } from 'react'

const UseTransition = () => {
    const [query,setQuery]=useState("");
    const [filteredItem,setFilteredItems]=useState([]);
    const [isPending,startTransition]=useTransition();

    const items=Array.from({length:1000000},(_,i)=>`Item ${i+1}`);

    const handleFilter=(e)=>{
        const value = e.target.value;
        setQuery(value);

        startTransition(()=>{
            const filteredItem=items.filter((item)=>(
                item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
            ))
            setFilteredItems(filteredItem);
        });
    }
  return (
    <div>
        <input type='text' value={query} onChange={handleFilter} placeholder='Search item'/>
        {isPending && <p>Loading .....</p>}

        <ul>
            {filteredItem.map((item,index)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

//this hook can be mainly use to show the loading indicators and improving the user experiences...

export default UseTransition