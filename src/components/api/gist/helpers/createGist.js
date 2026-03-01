import { gistToken } from "./token";

export default async function createGist(obj, token = gistToken) {
    const res = await fetch("https://api.github.com/gists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "token " + token,
        },
        body: JSON.stringify({
            description: "storage",
            public: true,
            files: {
                "data.json": {
                    content: JSON.stringify(obj),
                },
            },
        }),
    });
    const parsed = res.json()

    console.log(parsed.id)

    return parsed;
}
