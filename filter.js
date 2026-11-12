import "./types/global.js"
/**
 *
 * @param {User[]} source
 * @param {string} target
 * @returns {User[]}
 */
export default function filter(source,target) {
    return source.filter(d => {
        return d.name.toLowerCase().includes(target.toLowerCase());
    });
}
