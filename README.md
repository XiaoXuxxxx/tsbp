# tsbp - minimal typescript boilerplate

I'm too lazy to install the dependencies and make config files when I init node app, so I made this for myself.

## Command

automatically restart app when save

```sh
yarn dev
```

build it into .js file

```sh
yarn build
```

> the output will generated into `dist/build`

run the app from build folder

```sh
yarn start
```

bundle the app into one .js file (including node_modules)

```sh
yarn bundle
```

> the output will generted into `dist/bundle`

running unit test

```sh
yarn test
```

and if you want to retest when save

```sh
yarn test:watch
```

lint the code

```sh
yarn lint
```
