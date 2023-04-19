<div align="center">
  <img src="/apps/web/assets/img/icon-lg.png" />
</div>

**World's first Web3 sandbox-wallet** with embedded dApps, simplified onboarding through social logins, and a unified cross-chain interface, offering a seamless experience for new web3 users. This allows for endless possibilities for building on Walless and enables even web2 apps to onboard to the world of web3.

More information at [Official website](https://walless.io) | [Discord](https://discord.gg/2bzf9qjuN3) | [Twitter](https://twitter.com/walless_wallet)

## Required tools
- [Node.js](https://nodejs.org/en) (for sure)
- [Yarn](https://yarnpkg.com/getting-started/install) installed globally (`npm i -g yarn`) — highly suggested `version 3.5` or later.
- [Metacraft CLI](https://github.com/cocrafts/metacraft-cli) installed globally (`npm i -g @metacraft/cli`)

## CLI commands
- Development: run `yarn dev` at project root (or `metacraft` under apps/home)
- Build: `yarn build` (or `metacraft bundle` under apps/[name])
- Extension build: under `apps/web` run `yarn build:ext` instead to produce zip files (output to `apps/landing/public/builds`)
- Package version check `yarn dlx lerna-update-wizard`
- Sync font for React Native: `yarn dlx react-native-asset`

## Credits
- [Open-source repo](https://github.com/MetaMask/metamask-extension) of [Metamask](https://metamask.io/) give us lot of useful clues.
- [Suiet open-source repo](https://github.com/suiet/suiet).
- [Oskar Kwaśniewski](https://www.callstack.com/blog-author/oskar-kwasniewski) for his [React Native monorepo article](https://www.callstack.com/blog/setting-up-react-native-monorepo-with-yarn-workspaces) saved our life.
- [Wallet Standard](https://github.com/wallet-standard/wallet-standard) definitely useful for any Wallet project.
- [PouchDB for Mobile](https://dev.to/craftzdog/a-performant-way-to-use-pouchdb7-on-react-native-in-2022-24ej) performance and cross-platform storage engine.

## License
Walless is [MIT licensed](./LICENSE).
