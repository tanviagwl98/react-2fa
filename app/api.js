export async function login(username, pass) {
    const res = await fetch('/login', {
        method:'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify({username, pass})
    });

    if (res.status === 401) return {};

    const user = await res.json();

    return {user}
}