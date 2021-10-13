module.exports = (client, triggerText, replyText) => {
  client.on('message', (message) => {
    if (
      message.channel.type === 'dm' &&
      message.content.toLowerCase().includes(triggerText)
    ) {
      message.author.send(replyText).then (embedMessage => {
        if (triggerText == 'help') return 
        else {
        embedMessage.react("✅");
        embedMessage.react("❌");
        }
    });
    }
  })
}