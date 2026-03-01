// import { gistId } from '../names/gistId.js'
import { gistToken } from './token.js'

export default async function saveGist(obj, id, token = gistToken) {
    const res = await fetch(`https://api.github.com/gists/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: "token " + token,
        },
        body: JSON.stringify({
            files: {
                "data.json": {
                    content: JSON.stringify(obj),
                },
            },
        }),
    });

    return res.json();
}
