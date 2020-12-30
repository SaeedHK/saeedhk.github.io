# My Personal Page

## Build

We use [Nix](https://nixos.org) to have a reproducible build environment. Run `nix-shell`
in the project root. Then build the project dependencies and the CSS with:

```shell
$ npm install && cd src/semantic-ui && gulp build
```

## Deploy on gtihub pages

We github-pages and a corresponding node API to deploy the project. After building the code, run
the following commend to deploy the project in github pages:

```shell
$ npm run deploy
```
