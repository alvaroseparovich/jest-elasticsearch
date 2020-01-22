const documentsMapping = require('./documents-mapping');

module.exports = function generateMapping() {
  return {
    esVersion: '6.8.2',
    clusterName: 'docs',
    nodeName: 'docs',
    port: 9200,
    indexes: [
      {
        name: 'documents',
        body: {
          settings: {
            number_of_shards: '1',
            number_of_replicas: '1'
          },
          aliases: {
            'some-doc-id': {}
          },
          mappings: documentsMapping
        }
      }
    ]
  };
};
