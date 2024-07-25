<h3 align="center">Corinna - automate your Email-Marketing </h3>

This is a repository for Fullstack Email-Marketing Chat-bot website: Next.js 15, EmailMarketing, React, Prisma, Stripe, Tailwind, Postgrasql;

Key Features:
- 📡 RealTime Communication
- 🌐 Generating questions 
- 🔗 Connecting Next.js app to another domain which you want
- 🔐 Authentication 
- 📸 upload your domain logo
- 👀 count the users
- 🚦 Live statuses 
- 💬 Real-time AI chat using open-AI 
- 🎨 Unique Identification with unique domain
- 👥 Following Instructions
- 🚫 No code Chatbot
- 🎛️ Dashboard with live stack
- 🔒 security
- 📴 mode swipe 
- 🏠 Intresttig UI 
- 🔍 Search Chat for spacific Chat
- 🔄 Syncing user information to our DB 
- 🤝 Email automation 
- 🎨 Beautiful design
- ⚡ Blazing fast application 
- 📄 SSR (Server-Side Rendering) 
- 🗺️ Grouped routes & layouts 
- 🗃️ Postgrasql
- 🚀 Deployment

### Prerequisites

**Node version 18.17 or later**

### Cloning the repository

```shell
git clone https://github.com/Darshit02/corinna-ai
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NODE_MAILER_EMAIL=
NODE_MAILER_GMAIL_APP_PASSWORD=

NEXT_PUBLIC_PUSHER_APP_CLUSTOR=
NEXT_PUBLIC_PUSHER_APP_SECRET=
NEXT_PUBLIC_PUSHER_APP_KEY=
NEXT_PUBLIC_PUSHER_APP_ID=

OPEN_AI_KEY=

NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY=
UPLOAD_CARE_SECRET_KEY=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up

STRIPE_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISH_KEY=

DATABASE_URL=

```

### Setup Prisma

Add MySQL Database (I used neonDB)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
