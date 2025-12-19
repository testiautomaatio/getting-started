# Getting Started with Playwright Testing 🎭

This exercise walks you through installing the Playwright testing library and running and developing tests with it. Playwright is a powerful test library for writing versatile and reliable browser-based tests. It supports multiple browsers and offers rich features that make developing and running tests easier.

Use Playwright's official documentation and tutorial videos as your primary sources. Each section below includes pointers, but the authoritative reference is the Playwright docs.

We also highly recommend watching [Introduction to Playwright for End-to-End Testing with Debbie O'Brien (JS Drops, youtube.com)](https://youtu.be/lCb9JoZFpHI), which gives a thorough walkthrough of Playwright and its tooling.

> [!TIP]
> Run the commands for this and future exercises in the repository root (the same folder that contains this file). If needed, see [MDN's command-line navigation guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#navigation_on_the_command_line).


## Prerequisites

You need [Node.js](https://nodejs.org/) and the [Visual Studio Code editor](https://code.visualstudio.com/). Node.js is the JavaScript runtime that Playwright is built on, so installing it is required to develop and run Playwright tests. [Download the latest LTS release from nodejs.org](https://nodejs.org/) (LTS = Long Term Support).

Verify the Node.js installation on the command line:

```bash
node --version  # at writing time, the newest LTS is 22
```

You can write Playwright tests in different editors and languages (JavaScript or TypeScript). For this course we recommend TypeScript with VS Code because it makes writing tests and locating errors easier. Playwright's docs also use TypeScript in their examples.

If TypeScript is new to you, read more on the [official TypeScript site](https://www.typescriptlang.org/). TypeScript is a superset of JavaScript, and you will not need features beyond standard JavaScript here. You do not have to install TypeScript separately; Playwright ships with the needed support.

We also recommend installing the VS Code extension [Playwright Test for VS Code (ms-playwright.playwright)](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright). Its [documentation](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) details the features. You can find and install it directly in the [VS Code extensions view](https://code.visualstudio.com/docs/editor/extension-marketplace).


## Part 1: Install Playwright and create a project

See the official [Playwright Getting Started](https://playwright.dev/docs/intro) guide for exact installation and configuration steps. It covers installing via the command line or the VS Code extension; choose whichever you prefer.

There are many good videos to accompany the docs. For example, [Getting Started with Playwright and VS Code (youtube.com)](https://youtu.be/Xz6lhEzgI5I) is helpful during setup.


**Install via command line**

With Node.js and npm available, install Playwright at the repository root using:

```bash
npm init playwright@latest
```

Follow the prompts and pick the options you like. If unsure, the defaults work well.

> [!NOTE]
> Make sure you run `npm init` in the repository root (the folder containing this readme). If needed, move there first using the [MDN navigation guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#navigation_on_the_command_line).


**Install via VS Code extension**

Alternatively, use the extension's "install playwright" feature. The Playwright VS Code extension is well documented—see the [extension docs](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright#install-playwright).


**Verify the installation**

After a successful install, you should see new files such as `package.json` and `playwright.config.ts` in this repository. `package.json` lists dependencies and scripts, while `playwright.config.ts` holds Playwright settings. Playwright also creates example tests whose names and locations may vary based on the installer choices.

Check the Playwright version with:

```bash
npx playwright --version
```

If you see a version number, the installation was successful. You cannot run tests until you install browsers, though. So continue to the next step.

### Install Playwright browsers

Playwright supports many browsers, including Chromium, Firefox, and WebKit. Browser support is documented at https://playwright.dev/docs/browsers. Playwright uses its own bundled browser binaries (not the ones already on your OS) to keep tests isolated and repeatable across platforms. You can also run the same tests across multiple browsers to verify cross-browser behavior.

If you did not install browsers during the previous step, install them now:

```bash
npx playwright install              # installs several browsers
```

You can install a specific browser only. For example, to install just Chromium:

```bash
npx playwright install chromium     # installs only Chromium
```

Find more on browser installation and configuration in the docs: [https://playwright.dev/docs/browsers](https://playwright.dev/docs/browsers). Playwright stores the browsers in a separate directory, and you can [remove them if needed](https://playwright.dev/docs/browsers#uninstall-browsers).

> [!NOTE]
> Course solutions are automatically checked with the Chromium project, but we recommend trying other browsers in your own tests as well.


## Part 2: Run the tests

Use the docs page [Running and debugging tests (playwright.dev)](https://playwright.dev/docs/running-tests) for reference.

Run the tests from the repository root:

```bash
npx playwright test
```

By default, tests run "headless" (without a visible browser window). Tests typically complete so quickly that watching the browser adds little value.

You can change execution options by passing arguments to `npx playwright`. To run in headed mode with both list and HTML reporters:

```bash
npx playwright test --headed --reporter="list,html"
```

Here `--reporter` shows a list of test names and results in the terminal and also produces an HTML report.

If you want to pick tests interactively and watch them run in a UI, start the Playwright tool with:

```bash
npx playwright test --ui
```

To open the latest test report in your browser after running tests, use:

```bash
npx playwright show-report
```

There are many ways to run and inspect Playwright tests. The Playwright UI and the VS Code extension overlap in some features—choose whichever fits your workflow, whether command line or graphical tools.


## Completing and submitting the exercise

After installing Playwright and running the example tests successfully, you can submit this exercise to GitHub. As proof of completion, run the following command and save its output to [`results.txt`](./results.txt):

```bash
# copy this command's output into results.txt
npx playwright test --reporter='list,html' --project=chromium

# or direct the output straight to the file
npx playwright test --reporter='list,html' --project=chromium > results.txt
```

Add new files and changes to version control with `git status`, `git add`, and `git commit`. Push to GitHub with `git push`.

Submitting triggers an automated check in GitHub Actions. Results appear on the Actions tab, showing whether tests ran and passed. You can inspect detailed results and any error messages there. Learn more about GitHub Actions workflows in the [GitHub documentation](https://docs.github.com/en/actions).


## About this material

This exercise was created by Teemu Havulinna and is licensed under [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/).

Language models and AI tools, including GitHub Copilot and ChatGPT, were used when preparing this exercise.
