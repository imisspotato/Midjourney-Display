// bot.ts
import { Client, Intents, TextChannel } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
  ],
});

client.login(process.env.SALAI_TOKEN);

export async function getLatestImages() {
  const channelId = process.env.CHANNEL_ID;
  const channel = await client.channels.fetch(channelId || '');

  let imageURLs: string[] = [];

  if (channel && channel.isText()) {
    const textChannel = channel as TextChannel;
    const messages = await textChannel.messages.fetch({ limit: 100 });

    messages.forEach((message) => {
      message.attachments.forEach((attachment) => {
        if (attachment.height) {
          imageURLs.push(attachment.url);
        }
      });
    });
  }

  return imageURLs;
}

//latest 

// import { config } from 'dotenv';
// import { Client, Intents, TextChannel } from 'discord.js';

// config();

// const client = new Client({
//   intents: [
//     Intents.FLAGS.GUILDS, 
//     Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
//     Intents.FLAGS.GUILD_MESSAGE_TYPING,
//   ],
// });

// let imageURLs: string[] = [];

// client.on('ready', async () => {
//   const channelId = process.env.CHANNEL_ID;
//   const channel = await client.channels.fetch(channelId || '');

//   if (channel && channel.isText()) {
//     const textChannel = channel as TextChannel;
//     const messages = await textChannel.messages.fetch({ limit: 100 });

//     messages.forEach((message) => {
//       message.attachments.forEach((attachment) => {
//         if (attachment.height) {
//           imageURLs.push(attachment.url);
//         }
//       });
//     });
//   }
// });

// client.on('messageCreate', (message) => {
//   message.attachments.forEach((attachment) => {
//     if (attachment.height) {
//       imageURLs.push(attachment.url);
//     }
//   });
// });

// client.login(process.env.SALAI_TOKEN);

// export function getImages() {
//   return imageURLs;
// }


//old code

// import { config } from 'dotenv';
// import { Client, Intents, TextChannel } from 'discord.js';

// config();

// const client = new Client({
//   intents: [
//     Intents.FLAGS.GUILDS, 
//     Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
//     Intents.FLAGS.GUILD_MESSAGE_TYPING,
//   ],
// });


// let imageURLs: string[] = [];

// client.on('ready', async () => {
//   const channelId = process.env.CHANNEL_ID;
//   const channel = await client.channels.fetch(channelId || '');

//   if (channel.isText()) {
//     const textChannel = channel as TextChannel;
//     const messages = await textChannel.messages.fetch({ limit: 100 });

//     messages.forEach((message) => {
//       message.attachments.forEach((attachment) => {
//         if (attachment.height) {
//           imageURLs.push(attachment.url);
//         }
//       });
//     });
//   }
// });

// client.on('messageCreate', (message) => {
//   message.attachments.forEach((attachment) => {
//     if (attachment.height) {
//       imageURLs.push(attachment.url);
//     }
//   });
// });

// client.login(process.env.SALAI_TOKEN);

// export function getImages() {
//   return imageURLs;
// }
