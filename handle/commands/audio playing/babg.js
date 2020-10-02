const audio = require('./playAudio.js');

let babgHandler = [];

babgHandler.handle = (msg, client) => {
    audio(msg, 'babg.mp3', 'just like you', '', 100, 'that\'s what you are ^');
}

module.exports = babgHandler;