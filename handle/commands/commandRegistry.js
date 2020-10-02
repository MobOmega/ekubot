const Command = require('./commandClass');
const { prefix } = require('./../../config.json');
const largeLists = require('./large-arguments.json');


// PLEASE KEEP EACH ONE OF THESE 1 LINE AND NOT TOO LONG, IF YOU NEED MORE LINES, OUTSOURCE TO A NEW FILE (like what was done for the commands + babg variable down there)

const help = (msg, client) => { msg.channel.send(`You need help? Well, you'll have to get through me first. Unless you want the command list, then you should use \`${prefix}commands\`.`); };
const commands = (msg, client) => { require('./help/commandsHandler').handle(msg, client); }
const yummy = (msg, client) => { msg.channel.send('in my TEEEELOPHAAAAASE'); }
const 乒 = (msg, client) => { msg.channel.send('乓!'); }
const ping = (msg, client) => { msg.channel.send('Pong!'); }
const babg = (msg, client) => { require('./audio playing/babg.js').handle(msg, client); }
const ripobama = (msg, client) => { require('./miscellaneous/ripobama.js').handle(msg, client);}

let CommandRegistry = [];

// to make a new command, register them using the setup I have here. arguments go: name, alias, description, usage, args, function, section, prefixNecessary
// due to this amazing strategy, commands automatically get their functionality and help pages built. talk about convenience! (and also overworking @Secnyt, but whatever)

CommandRegistry.push( new Command('help', ['help'], 'You won\'t get it.', `\`${prefix}help\``, [], help, 'eku-experience', true) ); // command with no arguments
CommandRegistry.push( new Command('commands', ['commands', 'functions'], 'Uhh, you just ran it.', `\`${prefix}commands\``,  largeLists.commandsArguments, commands, 'eku-experience', true) );
CommandRegistry.push( new Command('yummy', ['yummy yummy', 'yummy yummy in my'], 'CERTAIN STAGE OF MITOSIS', `\`yummy yummy\``, [], yummy, 'fun') ); // no prefix command
CommandRegistry.push( new Command('乒', ['乒'], '乓', `\`e.乒\``, [], 乒, 'eku-experience', 'either') ); // prefix-or-not command
CommandRegistry.push( new Command('ping', ['ping'], 'play a game of table tennis', `\`e.ping\``, [], ping, 'eku-experience', 'either') ); // same as above
CommandRegistry.push( new Command('babg', ['babg'], 'this is what you are', '`babg`', [], babg, 'fun', 'either'));
CommandRegistry.push( new Command('ripobama', ['rip obama', 'ripobama', 'f for obama'], 'press f to pay respects', '`rip obama`', [], ripobama, 'fun', false));

module.exports = CommandRegistry;
