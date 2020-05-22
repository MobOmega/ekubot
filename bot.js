
const Discord = require('discord.js');
 const client = new Discord.Client();

const chanel = client.channels.cache.get('691793782466674721');
const chanell = client.channels.cache.get('713048489633906768');
const Auth = require('./auth.json')
const config = require('/home/drsmalls42/bot/config.json');
const ms = require('ms');
var removeChars = function(str, disallowedCharacters){
  var array = str.split('');
  for(var i of array){
    if(disallowedCharacters.includes(array[i])){
      array.splice(i, 1);
    }
  }
  var newString;
  for(var i of array){
    newString += array[i];
  }
  return newString
}

client.on('ready', () => {
 console.log(`${client.user.tag} is online and ready to do some work, boss!`);
 client.user.setActivity("and pirating anime.", {type: "WATCHING"})
 const chanel = client.channels.cache.get('691793782466674721');
 const chanell = client.channels.cache.get('713048489633906768');
 chanel.send("sono confused");

});

client.on('message', msg => {
var mention1 = msg.mentions.members.first()
if((msg.channel.id === '692003736192680027') && (msg.author.id != '539505577286434816') && (msg.author.id != '587138869947007007') && (msg.author.id != '282924172139560961') && (msg.author.id != '697823658680385557') && (msg.author.id != '697569067241832652')){
  if(msg.author.id != '643515430287310868'){
    msg.delete();
    msg.reply("You've been silenced. You said '" + msg.content + "'");
  }
  if(msg.author.id === '643515430287310868'){
    msg.delete();
    msg.channel.send("Gondalier, you annoying bot. You've been silenced. You said '" + msg.content + "'");
  }
}
if((msg.channel.id === '697458067285082142') && (msg.author.id != '539505577286434816') && (msg.author.id != '587138869947007007') && (msg.author.id != '282924172139560961') && (msg.author.id != '697823658680385557') && (msg.author.id != '697569067241832652') && (msg.author.id != '643515430287310868') && (msg.author.id != '471499074911338506') && (msg.author.id != '385190937795624960')){
  msg.delete();
  msg.reply("You've been silenced. You said '" + msg.content + "'");
}
if((msg.channel.id === '713048489633906768') && (msg.author.id != '471499670871343125') && (msg.author.id != '697569067241832652') && (msg.author.id != '587138869947007007') && (msg.author.id != '697823658680385557') && (msg.author.id != '282924172139560961')){
  msg.delete();
  msg.reply("You've been silenced. You said '" + msg.content + "'");
}
if((msg.channel.id === '697458067285082142') && (msg.author.id != '697569067241832652') && (msg.author.id != '539505577286434816') && (msg.author.id != '587138869947007007') && (msg.author.id != '282924172139560961') && (msg.author.id != '697823658680385557') && (msg.author.id != '697569067241832652') && (msg.author.id != '643515430287310868') && (msg.author.id != '471499074911338506') && (msg.author.id != '385190937795624960')){
  msg.delete();
  msg.reply("You've been silenced. You said '" + msg.content + "'");
}
else {
  if((msg.author.id === '471499670871343125') && (msg.channel.id != '713048489633906768')){
    chanell.send("Mehi said '" + msg.content + "' in channel #" + msg.channel.id + ".")
  }
  if(msg.content.slice(0,7) === 'e.help' && msg.author.id != '697823658680385557'){
    msg.channel.send("You need help? Too bad! You have to get through me first.");
  }
  if(msg.content.slice(0,11) === 'e.commands' && msg.author.id != '697823658680385557'){
    const helpEmbed = new Discord.MessageEmbed()
                .setColor('#278731')
                .setTitle("Ekubo's Special Spirit Command Guide")
                .setAuthor('Ekubot', 'https://i.imgur.com/kIHkG47.jpg', "https://github.com/DrSmalls/ekubot")
                .setDescription("I am this server's spirit guide. My prefix is `e.`")
                .setThumbnail('https://i.imgur.com/e5ykeq5.jpg')
                .addFields(
                    {name: '\u200B', value: '\u200B'},
                    {name: `${config.prefix}commands`, value: `\`Usage: ${config.prefix}commands\`\nBrings up this menu.`},
                    {name: '\u200B', value: '\u200B'},
                    {name: `${config.prefix}help`, value: `\`Usage: ${config.prefix}help\`\nYou won't get it.`},
                    {name: '\u200B', value: '\u200B'},
                    {name: `${config.prefix}乒, 乒, ${config.prefix}ping, ping`, value: `\`Usage: ${config.prefix}乒\`\n乓`},
                    {name: '\u200B', value: '\u200B'},
                    {name: `${config.prefix}ding`, value: `\`Usage: ${config.prefix}ding\`\nStop opening the door to the Spirits & Such Consultation office if you aren't giving us business.`},
                    {name: '\u200B', value: '\u200B'},
                    {name: `${config.prefix}commands`, value: `\`Usage: ${config.prefix}commands\`\nBrings up this menu.`},

                )
                .setTimestamp()
                .setFooter('Moonayy Bot Help Page', "https://i.imgur.com/QnEiNEc.png");
            msg.channel.send(helpEmbed);
    msg.channel.send("\
    `Ekubo's Special Spirit Command Guide`\n\
  •  e.help - You won't get it.\n\
  •  e.commands - Opens up this list.\n\
  •  e.乒 - 乓\n\
  •  乒 - 乓\n\
  •  e.ping - Pong!\n\
  •  ping - Pong!\n\
  •  e.ding - Stop opening the door to the Spirits & Such Consultation office if you aren't giving us business.\n\
  •  yummy yummy - Tasty.\n\
  •  yare yare - Good Grief.\n\
  •  telo telo - Tasty.\n\
    `Insulting Ekubo`\n\
    ⋗  e. - Stop wasting time.\n\
    ⋗  e.zawarudo - This isn't JoJo part 3.\n\
    ⋗  r!play muffin - We don't need to hear it again.\n\
    ⋗  e.possession - You are beneath him.\n\
    ⋗  e.turn - How dare you try to trick him.\n\
    ⋗  e.tree - Bring up a dark chapter of the past.\n\
    ⋗  e.lol - Bring up a dark chapter of the past.\n\
    ⋗  Secret command - You won't find it.\
    ")
  }
  if(msg.author.id === '282924172139560961'){
    msg.react(`:4:`)
    msg.react(`:4:`)
  }
  if(msg.content.slice(0,4) === 'e.乒' && msg.author.id != '697823658680385557'){
    msg.channel.send("乓");
  }
  if(msg.content.slice(0,2) === '乒' && msg.author.id != '697823658680385557'){
    msg.channel.send("乓");
  }
  if(msg.content.slice(0,45) === 'e.imaginethinkingthatmisspellingmakesyoucool' && msg.author.id != '697823658680385557'){
    msg.channel.send("this post was made by correct spelling gang");
  }
  if(msg.content.slice(0,7) === 'e.ping' && msg.author.id != '697823658680385557'){
    msg.channel.send("Pong!");
  }
  if(msg.content.slice(0,5) === 'ping' && msg.author.id != '697823658680385557'){
    msg.channel.send("Pong!");
  }
  if(msg.content.slice(0,8) === 'e.shutup' && msg.author.id === '697823658680385557'){
    var shutUpped = msg.content.slice(10,27);
    let mainRole = msg.guild.roles.find(role => role.name === "DJ");
    let muteRole = msg.guild.roles.find(role => role.name === "Shut up");
    shutUpped.removeRole(mainRole.id);
    shutUpped.addRole(muteRole.id);
    msg.channel.send('<@' + shutUpped + '> has been silenced for 1 minute.');
    setTimeout(function(){
      shutUpped.addRole(mainRole.id)
      shutUpped.removeRole(muteRole.id)
      msg.channel.send('<@' + shutUpped + '> has now been unmuted.')
    }, ms(60));
  }
  if(msg.content.slice(0,9) === 'e.atomize' && msg.author.id === '282924172139560961'){
    if(msg.content.split("@") != msg.content){
      msg.channel.send("User " + mention1 + " has now been atomized.")
  }
}
if(msg.mentions.members.first()){
    if(mention1.nickname === "(/b(a)^{w}t s{ai}ko 100/)"){
      msg.channel.send("DON'T WASTE MY TIME!!");
  }
}
  if(msg.content.slice(0,15) === 'bizz buzz boom' && msg.author.id != '697823658680385557'){
    msg.channel.send("Oh well, aren't you special?");
  }
  if(msg.content.slice(0,20) === 'WHAT A ***SCAAAM***' && msg.author.id != '697823658680385557'){
    msg.channel.send("***BECHNOTLAAAAAAADEE***");
  }
  if(msg.content.slice(0,12) === 'yummy yummy' && msg.author.id != '697823658680385557'){
    msg.channel.send("In my TEEEEEEELOPHASE");
  }
  if(msg.content.slice(0,10) === 'yare yare' && msg.author.id != '697823658680385557'){
    msg.channel.send("In my CRANIALPHASE");
  }
  if(msg.content.slice(0,10) === 'telo telo' && msg.author.id != '697823658680385557'){
    msg.channel.send("In my YUMMYPHASE");
  }
  if(msg.content.slice(0,11) === 'e.zawarudo' && msg.author.id != '697823658680385557'){
    msg.channel.send("That's the wrong anime, buckaroo!");
  }
  if(msg.content.slice(0,11) === '** **' && msg.author.id != '697823658680385557'){
    msg.delete();
    msg.channel.send("..v 3783 -y");
  }
  if(msg.content.split('ehi') != msg.content && msg.author.id === '643515430287310868'){
    msg.delete();
  }
  if(msg.content.split('ehi') != msg.content && msg.author.id === '697569067241832652'){
    msg.delete();
  }
  if(msg.content.split('ehi') != msg.content && msg.author.id === '705217430556901428'){
    msg.delete();
  }
  if(msg.content.slice(0,3) === 'e.' && msg.author.id != '697823658680385557'){
    msg.channel.send("C'mon, hurry it up, buddy! I ain't got all day! A spirit as highly esteemed as myself has places to be, y'know?!")
  }
  if(msg.content.slice(0,13) === 'r!play muffin' && msg.author.id != '697823658680385557'){
    msg.channel.send("Really?! Just, really? If I had a trillionth of a googolplexianth of a cent for every time that's been said here, I'd be richer than Jeff Bezos. And we all know he isn't paying *any* taxes.")
  }
  if(msg.content.slice(0,13) === 'e.possession' && msg.author.id != '697823658680385557'){
    msg.channel.send("I would love to inhabit a body right now, but I don't see any powerful psychics near here who are unconcsious or weak-minded. Everyone around here almost fits the parameters, but nobody seems to be psychic.")
  }
  if(msg.content.slice(0,7) === 'e.turn' && msg.author.id != '697823658680385557'){
    msg.channel.send("I don't care if he tried to exorcise me, he made me a better person! I got more opportunities, and now I'm stronger than I've ever been!")
  }
  if(msg.content.slice(0,7) === 'e.tree' && msg.author.id != '697823658680385557'){
    msg.channel.send("HEY! That's a low blow, I already did my time! Besides, I've changed! I promise I won't get roped into anything like that again.")
  }
  if(msg.content.slice(0,6) === 'e.lol' && msg.author.id != '697823658680385557'){
    msg.channel.send("It was the best of times, it was the worst of times. Hey, why are you making me reminisce on the best worst day of my life!? Cult, Smile, Milk contest. Spirit, Powerful, Gone, Back.")
  }
  if(msg.content.slice(0,18) === 'keyboard aneurysm' && msg.author.id != '697823658680385557'){
    msg.channel.send("https://youtu.be/Jljy8KtoXOU?t=818")
  }
  if(msg.content.slice(0,20) === '`keyboard aneurysm`' && msg.author.id != '697823658680385557'){
    msg.channel.send("https://youtu.be/Jljy8KtoXOU?t=818")
  }
  if(msg.content.slice(0,11) === 'hey, ekubo' && msg.author.id != '697823658680385557' && msg.author.id != '282924172139560961' && msg.author.id != '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo. Oh wait, you aren't Shigeo, imposter! Now get outta here before I get him to exorcise you!")
  }
  if(msg.content.slice(0,10) === 'hey ekubo' && msg.author.id != '697823658680385557' && msg.author.id != '282924172139560961' && msg.author.id != '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo. Oh wait, you aren't Shigeo, imposter! Now get outta here before I get him to exorcise you!")
  }
  if(msg.content.slice(0,13) === 'e.hey, ekubo' && msg.author.id != '697823658680385557' && msg.author.id != '282924172139560961' && msg.author.id != '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo. Oh wait, you aren't Shigeo, imposter! Now get outta here before I get him to exorcise you!")
  }
  if(msg.content.slice(0,12) === 'e.hey ekubo' && msg.author.id != '697823658680385557' && msg.author.id != '282924172139560961' && msg.author.id != '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo. Oh wait, you aren't Shigeo, imposter! Now get outta here before I get him to exorcise you!")
  }
  if(msg.content.slice(0,12) === 'hey, dimple' && msg.author.id != '697823658680385557' && msg.author.id != '282924172139560961' && msg.author.id != '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo. Oh wait, you aren't Shigeo, imposter! Now get outta here before I get him to exorcise you!")
  }
  if(msg.content.slice(0,11) === 'hey dimple' && msg.author.id != '697823658680385557' && msg.author.id != '282924172139560961' && msg.author.id != '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo. Oh wait, you aren't Shigeo, imposter! Now get outta here before I get him to exorcise you!")
  }
  if(msg.content.slice(0,14) === 'e.hey, dimple' && msg.author.id != '697823658680385557' && msg.author.id != '282924172139560961' && msg.author.id != '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo. Oh wait, you aren't Shigeo, imposter! Now get outta here before I get him to exorcise you!")
  }
  if(msg.content.slice(0,13) === 'e.hey dimple' && msg.author.id != '697823658680385557' && msg.author.id != '282924172139560961' && msg.author.id != '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo. Oh wait, you aren't Shigeo, imposter! Now get outta here before I get him to exorcise you!")
  }
  if(msg.content.slice(0,11) === 'hey, ekubo' && msg.author.id != '697823658680385557' && msg.author.id === '282924172139560961'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,10) === 'hey ekubo' && msg.author.id != '697823658680385557' && msg.author.id === '282924172139560961'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,13) === 'e.hey, ekubo' && msg.author.id != '697823658680385557' && msg.author.id === '282924172139560961'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,12) === 'e.hey ekubo' && msg.author.id != '697823658680385557' && msg.author.id === '282924172139560961'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,12) === 'hey, dimple' && msg.author.id != '697823658680385557' && msg.author.id === '282924172139560961'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,11) === 'hey dimple' && msg.author.id != '697823658680385557' && msg.author.id === '282924172139560961'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,14) === 'e.hey, dimple' && msg.author.id != '697823658680385557' && msg.author.id === '282924172139560961'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,13) === 'e.hey dimple' && msg.author.id != '697823658680385557' && msg.author.id === '282924172139560961'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,11) === 'hey, ekubo' && msg.author.id != '697823658680385557' && msg.author.id === '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,10) === 'hey ekubo' && msg.author.id != '697823658680385557' && msg.author.id === '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,13) === 'e.hey, ekubo' && msg.author.id != '697823658680385557' && msg.author.id === '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,12) === 'e.hey ekubo' && msg.author.id != '697823658680385557' && msg.author.id === '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,12) === 'hey, dimple' && msg.author.id != '697823658680385557' && msg.author.id === '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,11) === 'hey dimple' && msg.author.id != '697823658680385557' && msg.author.id === '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,14) === 'e.hey, dimple' && msg.author.id != '697823658680385557' && msg.author.id === '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,13) === 'e.hey dimple' && msg.author.id != '697823658680385557' && msg.author.id === '702576599295590563'){
    msg.channel.send("Oh hey, Shigeo.")
  }
  if(msg.content.slice(0,7) === 'e.ding' && msg.author.id != '697823658680385557'){
    msg.channel.send("Shigeo! There's a new customer!")
  }

}

});

client.login(Auth.token);
