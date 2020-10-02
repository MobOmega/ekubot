const { prefix } = require('./../../../config.json')

let commandsHandler = [];

commandsHandler.handle = (msg, client) => {
    
    let content = msg.content.trim();
    let commandless = content.substr(content.indexOf(' ') + 1).trim();
    let parameters = commandless.split(' ');

    let commands = require('./../commandRegistry.js');
    let command = commands.find(c => c.alias.includes(parameters[0]));

    let helpPage;
    let types = [...new Set(commands.map(c => c.sect))];
    let names = commands.map(c => [c.sect, c.alias]);

    let getFields = () => {
        let fields = {};
        types.forEach((v) => { fields[v] = { name: v, value: '' } });
        names.forEach((v) => {
            let name = v[0];
            let value = v[1][0];
            let field = fields[name];
            if (!field.value) {
                field.value += value;
            } else {
                field.value += (`, ` + value);
            }
            fields[name] = field;
        });

        let parsedFields = Object.keys(fields).map((key) => fields[key]);
        parsedFields.push({ name: '\u200b', value: `Run \`${prefix}commands <command>\` for more specific help.`});

        return parsedFields;
    }

    helpPage = {
        color: 0x32a891,
        title: 'Ekubot Help',
        author: {
            name: 'MobOmega',
            icon_url: 'https://cdn.discordapp.com/avatars/282924172139560961/6a5d8be75b9baed9ce813fd18c98fee0.png?size=128',
            url: 'https://github.com/drsmalls'
        },
        description: `Eku Help Page`,
        thumbnail: {
            url: 'https://cdn.discordapp.com/avatars/697823658680385557/08894ee2b298a190d12c32eef8da6069.png?size=128'
        },
        timestamp: new Date(),
        footer: {
            text: 'Eku Help Page',
            icon_url: 'https://cdn.discordapp.com/avatars/697823658680385557/08894ee2b298a190d12c32eef8da6069.png?size=128'
        }, 
        fields: getFields()
    }

    if(typeof command != 'undefined'){ // if specified a command + the command exists (if doesn't = undefined)
        helpPage = command.createHelp(parameters[1]);
        console.log(helpPage);
    }

    msg.channel.send({ embed: helpPage });

};

module.exports = commandsHandler;