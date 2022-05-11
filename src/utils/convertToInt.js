const convertToInt = (value) => {
    if (value === null || value === undefined) {
        return null;
    }
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        return parseInt(value, 10);
    }
    return null;
}
module.exports = convertToInt;