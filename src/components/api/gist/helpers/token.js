export const gistToken = globalThis.localStorage.getItem('gistToken');

if (!gistToken) {
    console.error('gistToken is undefined')
}