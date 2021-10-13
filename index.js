const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config/config.json");
const dataQuestions = require("./config/dataQuestions.json")
const dataResponses = require("./config/dataResponses.json")
const privateMessage = require('./private-message')
const client = new Discord.Client;
client.config = config;

const replyMessage = (new Discord.MessageEmbed().setTitle(`Discord DM Support`).setDescription('Please follow the following steps to get support!').addField('Step 1:', 'Please type your question below in the best possible format.').addField('Step 2:', "If you didn't get any response they try asking the question again with different key terms.").addField('Step 3:', "If you still didn't get a response please contact the bot manager about the issue.").setColor("#32556E").setThumbnail("https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/49403b1a-21a9-43e3-aeba-c43ad616a55d").setFooter(`Developed By: Neoptunium`));

const embedFooter = "Please react below if the data response helped you accordingly or not!";

const emebedTitle = "Discord DM Support Response";

const embedColor = "#32556E";

client.on('ready', () => {
    client.user.setPresence({
        status: 'available',
        activity: {
            name: "📲 DM me 'help'",
            type: 'PLAYING'
        }
    });

  privateMessage(client, 'help', replyMessage)

  privateMessage(client, dataQuestions.q1, (new Discord.MessageEmbed().setTitle(emebedTitle).setDescription(dataResponses.r1).setColor(embedColor).setFooter(embedFooter)));

  privateMessage(client, dataQuestions.q2, (new Discord.MessageEmbed().setTitle(emebedTitle).setDescription(dataResponses.r2).setColor(embedColor).setFooter(embedFooter)));

  privateMessage(client, dataQuestions.q3, (new Discord.MessageEmbed().setTitle(emebedTitle).setDescription(dataResponses.r3).setColor(embedColor).setFooter(embedFooter)));

  privateMessage(client, dataQuestions.q4, (new Discord.MessageEmbed().setTitle(emebedTitle).setDescription(dataResponses.r4).setColor(embedColor).setFooter(embedFooter)));

  privateMessage(client, dataQuestions.q5, (new Discord.MessageEmbed().setTitle(emebedTitle).setDescription(dataResponses.r5).setColor(embedColor).setFooter(embedFooter)));

  privateMessage(client, dataQuestions.q6, (new Discord.MessageEmbed().setTitle(emebedTitle).setDescription(dataResponses.r6).setColor(embedColor).setFooter(embedFooter)));

  privateMessage(client, dataQuestions.q7, (new Discord.MessageEmbed().setTitle(emebedTitle).setDescription(dataResponses.r7).setColor(embedColor).setFooter(embedFooter)));

  privateMessage(client, dataQuestions.q8, (new Discord.MessageEmbed().setTitle(emebedTitle).setDescription(dataResponses.r8).setColor(embedColor).setFooter(embedFooter)));

  privateMessage(client, dataQuestions.q9, (new Discord.MessageEmbed().setTitle(emebedTitle).setDescription(dataResponses.r9).setColor(embedColor).setFooter(embedFooter)));

  privateMessage(client, dataQuestions.q10, (new Discord.MessageEmbed().setTitle(emebedTitle).setDescription(dataResponses.r10).setColor(embedColor).setFooter(embedFooter)));

});

client.login(config.token);

// CREDITS: https://www.youtube.com/watch?v=y_bTHqMUmNQ