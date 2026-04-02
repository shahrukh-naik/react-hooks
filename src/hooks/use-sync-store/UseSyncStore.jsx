import React, { useSyncExternalStore } from 'react'
import { store } from "./store";

const UseSyncStore = () => {
        const count = useSyncExternalStore(
            store.subscribe,
            store.getSnapshot
        );
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={store.increment}>Increment</button>
        </div>
    )
}
//main use 
//Sharing data between multiple components without props
//Connecting to:
//custom global stores
//libraries (like Redux internally uses similar logic)
//browser APIs (like localStorage, online/offline status)

// getSnapshot → returns current value
// subscribe → tells React when to re-render
// useSyncExternalStore → connects React to your external store

export default UseSyncStore