# jest-elasticsearch
> Jest preset for running tests with local ElasticSearch

## Usage

### 0. Install

```
$ yarn add @shelf/jest-elasticsearch --dev
```

### 1. Create `jest.config.js`

```js
module.exports = {
  preset: '@shelf/jest-elasticsearch'
};
```

If you have a custom `jest.config.js` make sure you remove `testEnvironment` property, otherwise it will conflict with the preset.

### 2. Create `jest-es-config.js`

```js
module.exports = () => {
  return {
    esVersion: '7.5.0',        <-- must be < 7.5.0
    clusterName: 'your-cluster-name',
    nodeName: 'your-node-name',
    port: 9200,
    indexes: [
      {
        name: 'your-index-name',
        body: {
          settings: {
            number_of_shards: '1',
            number_of_replicas: '1'
          },
          aliases: {
            'your-alias': {}
          },
          mappings: {
            dynamic: false,
            properties: {
              //here you should paste your mapping
              //Example:
              id: {
                type: "keyword"
              }
            }
          }
        }
      }
    ]
  }
}
```



### 4. PROFIT! Write tests

```js
it()

```


## See Also

- [jest-dynamodb](https://github.com/shelfio/jest-dynamodb)
- [jest-mongodb](https://github.com/shelfio/jest-mongodb)

## License

MIT © [Shelf](https://shelf.io)
