# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


# Astro Football Teams

This project is a static web application built using Astro, TypeScript, and Vue. It allows users to input a list of players and divides them into two teams for a football match. The application is styled using Tailwind CSS.

## Features

- Input player names
- Automatically divide players into two teams
- Responsive design with Tailwind CSS

## Project Structure

```
astro-football-teams
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── PlayerInput.vue
│   │   ├── TeamDisplay.vue
│   │   └── Header.vue
│   ├── layouts
│   │   └── BaseLayout.astro
│   ├── pages
│   │   └── index.astro
│   ├── styles
│   │   └── tailwind.css
│   └── types
│       └── index.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd astro-football-teams
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Enter player names in the input field and submit.
- The application will randomly divide the players into two teams and display them.

## Technologies Used

- Astro
- Vue
- TypeScript
- Tailwind CSS

## License

This project is licensed under the MIT License.
