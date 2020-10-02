let ripobama = {};


ripobama.handle = (msg, client) => {
  var embed = {
    "color":"#278731",
    "image":{
      "url":"https://i.redd.it/66u46ummrnp21.jpg"
    }
  }
  msg.channel.send({embed:embed});
}

module.exports = ripobama;
