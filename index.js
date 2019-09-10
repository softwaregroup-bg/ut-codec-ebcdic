module.exports = function CodecEbcdic(config = {}) {
    const conversionTable = config.conversionTable || require('./ebcdic');
    function validateInput(str) {
        if (!str || !str.length || !str.split) {
            return '';
        }
        return str;
    }
    return {
        /**
         *
         * @param {String} input - ASCII encoded string
         *
         * @returns {String} - EBCDIC encoded string
         */
        encode(input = '') {
            return validateInput(input)
                .split('')
                .map(c => conversionTable[c.charCodeAt(0)])
                .join('');
        },
        /**
         *
         * @param {String} input - EBCDIC encoded string
         *
         * @returns {String} - ASCII encoded string
         */
        decode(input = '') {
            let arr = validateInput(input)
                .toUpperCase()
                .match(/([0-9A-F]{2})/g);
            if (!arr || !arr.length || (arr.length * 2 !== input.length)) {
                return '';
            }
            return arr
                .map(c => String.fromCharCode(conversionTable.indexOf(c)))
                .join('');
        }
    };
};
