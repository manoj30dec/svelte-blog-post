export function load({ url }) {
    return {
        name: url.searchParams.get('name'),
        email: url.searchParams.get('email'),
    }
}