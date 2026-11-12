import filterUser from "./filter.js"

/**
 * @returns {Promise<void>}
 */
async function main() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const raw = await fetch(url);
    const json = await raw.json();

    const result = filterUser(json, "le");
    result.forEach(user => {
        console.log(user.name);
    });
}

main();
