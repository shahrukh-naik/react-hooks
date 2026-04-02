import React, { useDeferredValue } from 'react'

const UseDeferedValue = () => {
    const [query, setQuery] = useState("");
    const items = Array.from({ length: 1000000 }, (_, i) => `Item ${i + 1}`);
    const deferredQuery = useDeferredValue(query);

    const filteredItem = items.filter((item) => (
        item.toLocaleLowerCase().includes(deferredQuery.toLocaleLowerCase())
    ))

    return (
        <div>
            <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search item' />
            {query !== deferredQuery && <p>Loading...</p>}
            <ul>
                {filteredItem.map((item, index) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

//this hook is mainly like the debounce function which we use to delay the call of the function...

export default UseDeferedValue