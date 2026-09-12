# Playwright Framework

This project is a basic Playwright test automation setup created for browser testing with JavaScript/TypeScript.

## Prerequisites

Before running this project, make sure you have:

- Node.js installed
- npm installed

You can verify installation with:

```bash
node -v
npm -v
```

## Install and create the project

The project was created using:

```bash
npm init playwright@latest
```

This command sets up the Playwright project structure and installs the necessary dependencies.

If you want to install the browser binaries manually later, run:

```bash
npx playwright install
```

This downloads the browsers used by Playwright, including Chromium, Firefox, and WebKit.

## Project Setup

This project was initialized with Playwright and includes:

- a Playwright configuration file: `playwright.config.ts`
- test files under the `tests` folder
- example tests

## Run the tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode (browser visible):

```bash
npx playwright test --headed
```

Open the HTML report:

```bash
npx playwright show-report
```

## Generate tests with Playwright Codegen

Playwright Codegen helps you record browser actions and generate test code automatically.

Start the generator:

```bash
npx playwright codegen
```

This opens a browser and records your clicks, typing, and navigation. The generated script is saved in a test file that you can later edit and run.

You can also target a specific site:

```bash
npx playwright codegen https://example.com
```

## Basic Folder Structure

```text
PlaywrightFramework/
├── node_modules/
├── tests/
│   └── example.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── package-lock.json
```

## Example Test

A basic Playwright test may look like this:

```ts
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
```

## Useful Commands

```bash
npm test
npm run test:headed
npm run codegen
npm run report
```

## Notes

- Playwright test files typically use the `.spec.ts` extension.
- The default test folder is `tests`.
- The Playwright config file can be customized for different browsers, reporters, retries, and base URLs.

## GitHub Push

If you want to push this project to GitHub, run:

```bash
git init
git add .
git commit -m "Initial Playwright setup"
git branch -M main
git remote add origin https://github.com/YourUsername/YourRepo.git
git push -u origin main
```

Replace the GitHub URL with your actual repository link.
