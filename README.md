# Midjourney Display 🎨🖥️ 

Midjourney Showcase is a futuristic, web-based gallery that showcases a mesmerizing collection of AI-generated images 🤖🎭. Immerse yourself in the extraordinary world of AI creativity with our interactive and vibrant platform!

## 🛠️ Prerequisites

Before embarking on this setup journey, ensure that you have:

- [Node.js](https://nodejs.org/en/download/) 🟩 (version 12.0.0 or higher) installed.
- An account on [Discord](https://discord.com/) 🎙️.
- Basic familiarity with JavaScript ☕ and React ⚛️.

## 🔧 Setup Instructions

### Step 1️⃣: Clone the Repository 📥

First, duplicate this repository to your local machine using Git. Execute the following command:

```bash
git clone https://github.com/yourusername/midjourney-showcase.git
```

### Step 2️⃣: Install Dependencies 📦

Next, navigate into the project directory and install the essential dependencies with npm. Important: Due to a dependency conflict with `react-image-lightbox`, use the `--legacy-peer-deps` flag:

```bash
cd midjourney-showcase
npm install --legacy-peer-deps
```

### Step 3️⃣: Setup Discord Bot 🤖

Follow these steps to set up a new Discord bot:

1. Visit the [Discord Developer Portal](https://discord.com/developers/applications) and log in to your account.
2. Hit "New Application", then provide a name and confirm by clicking "Create".
3. Go to the "Bot" tab and click "Add Bot". Affirm by clicking "Yes, do it!".
4. Under the "Token" section, click "Copy" to get your bot's token. Safeguard this token as it will be used in the subsequent step.

### Step 4️⃣: Environment Variables 🌍

In the root of your project, create a `.env` file. This file will store environmental variables, including the Discord bot token and the IDs for the server, channel, and session.

Your `.env` file should resemble this:

```bash
SALAI_TOKEN=<your-bot-token>
CHANNEL_ID=<your-channel-id>
SERVER_ID=<your-server-id>
SESSION_ID=<your-session-id>
```

Replace `<your-bot-token>` with the token obtained from the Discord Developer Portal. The `<your-channel-id>`, `<your-server-id>`, and `<your-session-id>` must be replaced with the relevant IDs from your Discord server.

### Step 5️⃣: Run the App 🚀

Now, it's time to run the app using the following command:

```bash
npm run dev
```

Open `localhost:3000` in your browser, and you should see the Midjourney Showcase in all its glory!

## 🤝 Contributing

Your contributions can make this showcase even more stunning! We warmly welcome changes from the community. If you wish to contribute, please fork this repository, make your changes, and submit a pull request.

## 📜 License

This project is licensed under the MIT License. You can find more details in the [LICENSE](./LICENSE) file.
