# Midjourney Showcase

Midjourney Showcase is a web-based gallery that presents a collection of AI-generated images. It's a dynamic and interactive platform that lets you explore and immerse yourself in the fascinating world of AI creativity.

## Prerequisites

Before you start with the setup process, make sure you have the following:

- [Node.js](https://nodejs.org/en/download/) installed (version 12.0.0 or higher).
- An account on [Discord](https://discord.com/).
- Basic understanding of JavaScript and React.

## Setup Instructions

### Step 1: Clone the Repository

First, you need to clone this repository to your local machine using Git. You can do this with the following command:

```bash
git clone https://github.com/yourusername/midjourney-showcase.git
```

### Step 2: Install Dependencies

Navigate into the project directory and install the required dependencies with npm. Note: Due to a dependency conflict with `react-image-lightbox`, you need to add the `--legacy-peer-deps` flag:

```bash
cd midjourney-showcase
npm install --legacy-peer-deps
```

### Step 3: Setup Discord Bot

To set up a new Discord bot, follow these steps:

1. Visit the [Discord Developer Portal](https://discord.com/developers/applications) and log in with your account.
2. Click on "New Application", then provide a name and confirm by clicking "Create".
3. Go to the "Bot" tab and click "Add Bot". Confirm by clicking "Yes, do it!".
4. Under the "Token" section, click "Copy" to get your bot's token. This token will be used in the next step, so make sure to keep it safe.

### Step 4: Environment Variables

In the root of your project, create a `.env` file. This file will store environment variables, including the Discord bot token and the IDs for the server, channel, and session.

The `.env` file should look something like this:

```bash
SALAI_TOKEN=<your-bot-token>
CHANNEL_ID=<your-channel-id>
SERVER_ID=<your-server-id>
SESSION_ID=<your-session-id>
```

Replace `<your-bot-token>` with the token you got from the Discord Developer Portal. The `<your-channel-id>`, `<your-server-id>`, and `<your-session-id>` need to be replaced with the corresponding IDs from your Discord server.

### Step 5: Run the App

Now, you can run the app using the following command:

```bash
npm run dev
```

Visit `localhost:3000` in your browser, and you should see the Midjourney Showcase up and running!

## Contributing

We welcome contributions from the community. If you wish to contribute, please fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

