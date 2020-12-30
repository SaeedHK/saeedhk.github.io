# My Personal Page

## Build

We use [Nix](https://nixos.org) to have a reproducible build environment. Run `nix-shell`
in the project root. Then build the project dependencies and the CSS with:

```shell
$ npm install && npm run build-css
```

## Deploy on gtihub pages

We use github-pages and [its nodejs API](https://www.npmjs.com/package/gh-pages) to deploy the 
project. After building the code, run the following commend:

```shell
$ npm run deploy
```
