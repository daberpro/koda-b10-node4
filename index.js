
/**
 * @typedef {Object} GeoLocation
 *
 * @property {string} lat
 * @property {string} lng
 */

/**
 * @typedef {Object} Address
 *
 * @property {string} street
 * @property {string} suite
 * @property {string} city
 * @property {string} zipcode
 * @property {GeoLocation} geo
 */

/**
 * @typedef {Object} Company
 *
 * @property {string} name
 * @property {string} catchPhrase
 * @property {string} bs
 */

/**
 * @typedef {Object} User
 *
 * @property {number} id
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {Address} address
 * @property {string} phone
 * @property {string} website
 * @property {Company} company
 */

/**
 *
 * @param {User[]} source
 * @param {string} target
 * @returns {User[]}
 */
function filter(source,target) {
    return source.filter(d => {
        return d.name.toLowerCase().includes(target.toLowerCase());
    });
}

/**
 * @returns {Promise<void>}
 */
async function main() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const raw = await fetch(url);
    const json = await raw.json();

    const result = filter(json, "le");
    result.forEach(user => {
        console.log(user.name);
    });
}

main();
