// import { gistId } from '../names/gistId.js'

export default async function loadGist(id) {
    const res = await fetch(`https://api.github.com/gists/${id}`);
    const data = await res.json();
    const content = data.files["data.json"].content;
    return JSON.parse(content);
}