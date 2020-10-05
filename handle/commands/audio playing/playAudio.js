const path = require('path');

function play(message, audio, feedback, end, volume, notInChannel){
    const { voice } = message.member;

    if (!voice.channelID) { if (notInChannel && notInChannel.trim()) { message.channel.send(notInChannel); } return; }

    voice.channel.join().then((connection) => {
        const dispatcher = connection.play(path.join(__dirname, audio));
        dispatcher.on('start', () => {
            dispatcher.setVolume(volume);
            if(feedback && feedback.trim()) message.channel.send(feedback);
        });
        dispatcher.on('finish', () => {
            if(end && end.trim()) message.channel.send(end);
            dispatcher.destroy();
            voice.channel.leave();
        })
    })
}

module.exports = play;
