# wr-client-web

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build

docker build -t wr-client-web -f ./storage/build/Dockerfile .

docker run -dp 8080:80 --name client wr-client-web
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
