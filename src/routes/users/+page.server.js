export async function load({ fetch }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
        throw new Error('Failded to fetch users')
    }
    const users = await res.json();
    return { users }
}