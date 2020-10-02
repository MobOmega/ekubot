const { prefix } = require('./../../config.json')

class Command {
    constructor(main, alias, desc, use, arg, func, sect, prfx){
        this.main = main;
        this.alias = alias;
        this.desc = desc;
        this.use = use;
        this.arg = arg;
        this.func = func;
        this.sect = sect;
        this.prfx = prfx;
    }

    handle(msg, client) { this.func(msg, client) };
    get formattedArguments() {
        let args = '';
        console.log(this.arg);
        this.arg.forEach((v) => { args += v.name + '\n' });
        return args.trim();
    }
    get formattedAliases() {
        let ali = '';
        this.alias.forEach((v) => { ali += v + '\n' });
        return ali.trim();
    }

    createHelp(arg) {

        let helpPage;
        let defaultPage = require('./defaultHelp')(this);
        
        if(arg) {
            let prmtr = this.arg.find(par => par.name == arg);
            if (typeof prmtr != 'undefined') {
                helpPage = defaultPage;
                helpPage.fields = [
                    {
                        name: `${arg} argument`,
                        value: `Optional: ${prmtr.optional ? 'yes' : 'no'}\n${prmtr.desc}\nex.${prmtr.ex}`
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: false,
                    },
                    {
                        name: `Want the full command explanation?`,
                        value: `You can get an explanation of the root command with \`${prefix}commands ${this.alias[0]}\`.`
                    },
                ];
            } else {
                helpPage = defaultPage;
                helpPage.fields.unshift({ name: "\u200b", value: `Argument \`${arg}\` does not exist.`});
            }
        } else {
            helpPage = defaultPage;
        }
        return helpPage;
    }
}

module.exports = Command;