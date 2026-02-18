import { writable, derived, readable } from "svelte/store";

export const count = writable(0)
// derived signature=> derived (store, callback)
export const inflation = derived(count, ($count) => $count * 2)

export const time = readable(new Date(), (set) => {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return () => clearInterval(interval);
});