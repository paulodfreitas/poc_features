// Create a new object, that prototypically inherits from the Error constructor
function InvalidMatch(message, code) {
    this.name = 'InvalidMatch';
    this.message = message || 'Invalid match found';
    this.stack = (new Error()).stack;
    this.code = code;
}

InvalidMatch.CODE_NOT_FULLY_PLAYED = 1;
InvalidMatch.CODE_PLAYER_DONT_PLAYED = 2;
InvalidMatch.CODE_WEIRD_MATCH = 3;
InvalidMatch.CODE_QUATRO = 4;
InvalidMatch.CODE_CINCO = 5;
InvalidMatch.prototype = Object.create(Error.prototype);
InvalidMatch.prototype.constructor = InvalidMatch;

module.exports = InvalidMatch;