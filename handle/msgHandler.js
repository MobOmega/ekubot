const { prefix } = require('../config.json');
const registry = require('./commands/commandRegistry.js');

let handleMessage = {};

handleMessage.handleMessage = (msg, client) => {

    var content = msg.content.trim() + ' ';
    if(content.startsWith(prefix)) {
        let command = content.substring(prefix.length, content.indexOf(' '));
        let cmd = registry.find(c => c.alias.includes(command));

        if (typeof cmd == 'undefined' || (cmd.prfx == false && cmd.prfx != 'either')) { return; }
        cmd.handle(msg, client);
    } else {
        let parsedcontent = content.trim().toLowerCase().replace( /  +/g, ' ' );
        let cmd = registry.find(c => c.alias.includes(parsedcontent));

        if (typeof cmd == 'undefined' || (cmd.prfx == true && cmd.prfx != 'either')) { return; }
        cmd.handle(msg, client);
    }

}

module.exports = handleMessage;


