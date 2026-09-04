# Playwright Automation Suite

End-to-end (UI) and API test automation built with [Playwright](https://playwright.dev/) and TypeScript, using a Page Object Model (POM) architecture.

## 📁 Project Structure

```
playwright-automation/
├── .github/workflows/      # CI pipeline (GitHub Actions)
├── fixtures/                # Custom Playwright fixtures (auto-inject Page Objects)
├── pages/                   # Page Object Model classes
├── tests/
│   ├── ui/                  # UI/E2E test specs
│   └── api/                 # API test specs
├── utils/                   # Shared test data & helper functions
├── .env.example             # Template for environment variables
├── .eslintrc.json
├── .prettierrc.json
├── playwright.config.ts     # Main Playwright configuration
├── tsconfig.json
└── package.json
```

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- Git

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd playwright-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers** (Chromium, Firefox, WebKit)
   ```bash
   npm run install:browsers
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and set `BASE_URL` (and any credentials) for the environment you want to target.

## 🧪 Running Tests

| Command                  | Description                                  |
|---------------------------|-----------------------------------------------|
| `npm test`                | Run all tests (all browsers)                 |
| `npm run test:ui`         | Run only UI test specs                        |
| `npm run test:api`        | Run only API test specs                       |
| `npm run test:headed`     | Run tests with the browser visibly open       |
| `npm run test:debug`      | Run tests in Playwright's step-by-step debugger |
| `npm run test:ui-mode`    | Open Playwright's interactive UI Mode         |
| `npm run test:chromium`   | Run tests only on Chromium                    |
| `npm run test:firefox`    | Run tests only on Firefox                     |
| `npm run test:webkit`     | Run tests only on WebKit (Safari engine)      |
| `npm run report`          | Open the last HTML report                     |
| `npm run codegen`         | Launch Playwright Codegen to record actions   |

You can also filter tests by tag, e.g. tests tagged `@smoke` or `@api`:
```bash
npx playwright test --grep @smoke
```

## 🏗️ Writing New Tests

1. **Add a Page Object** in `pages/` for any new page/screen, extending `BasePage`.
2. **Register it as a fixture** in `fixtures/test-fixtures.ts` so it can be injected into tests.
3. **Write the spec** in `tests/ui/` or `tests/api/`, importing `test`/`expect` from the fixtures file (for UI specs that use Page Objects) or directly from `@playwright/test` (for plain/API specs).
4. Keep test data in `utils/test-data.ts` rather than hardcoding values inline.

## 📊 Reports & Debugging

- **HTML report**: generated automatically after each run in `playwright-report/`. Open with `npm run report`.
- **Traces/videos/screenshots**: captured automatically on failure (see `test-results/`), viewable via `npx playwright show-trace <trace.zip>`.
- **JUnit XML**: written to `test-results/junit-results.xml` for CI integrations (e.g. Jenkins, Azure DevOps, qTest/ALM importers).

## 🔁 Continuous Integration

A ready-to-use GitHub Actions workflow is included at `.github/workflows/playwright.yml`. It runs on every push/PR to `main`/`master`, installs browsers, executes the full suite, and uploads the HTML report and traces as build artifacts.

If you use a different CI system (Azure Pipelines, GitLab CI, Jenkins), the same three steps apply: `npm ci` → `npx playwright install --with-deps` → `npx playwright test`.

## 🧹 Linting & Formatting

```bash
npm run lint     # check code with ESLint
npm run format   # auto-format with Prettier
```

## 🔐 Notes on Secrets

Never commit `.env` (it's already git-ignored). For CI, store `BASE_URL` and any credentials as encrypted secrets in your CI provider's settings and reference them as environment variables, as shown in the workflow file.

## 📄 License

MIT — see [LICENSE](./LICENSE).
