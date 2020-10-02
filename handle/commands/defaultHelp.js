const { prefix } = require('./.../../../../config.json');

module.exports = (cmd) => {
    return { 
        color: 0x32a891,
        title: cmd.main,
        author: {
            name: 'MobOmega',
            icon_url: 'https://cdn.discordapp.com/avatars/282924172139560961/6a5d8be75b9baed9ce813fd18c98fee0.png?size=128',
            url: 'https://github.com/drsmalls'
        },
        description: `Help page for ${cmd.main} command.`,
        thumbnail: {
            url: 'https://cdn.discordapp.com/avatars/697823658680385557/08894ee2b298a190d12c32eef8da6069.png?size=128'
        },
        timestamp: new Date(),
        footer: {
            text: 'Eku Help Page',
            icon_url: 'https://cdn.discordapp.com/avatars/697823658680385557/08894ee2b298a190d12c32eef8da6069.png?size=128'
        }, 

        fields: [
            {
                name: cmd.use,
                value: cmd.desc
            },
            {
                name: 'prefix?',
                value: cmd.prfx == 'either' ? 'either' : cmd.prfx ? 'yes, use the prefix' : 'no, no prefix is necessary'
            },
            {
                name: `aliases`,
                value: cmd.formattedAliases
            },
            {
                name:  `arguments`,
                value: cmd.formattedArguments ? cmd.formattedArguments : 'none! just run the command.'
            },
            {
                name: '\u200b',
                value: '\u200b',
                inline: false,
            },
            {
                name: `Want more depth?`,
                value: `You can get explanations of each argument by running \`${prefix}commands ${cmd.alias[0]} <argument>\`.`
            },
        ]
    }
}