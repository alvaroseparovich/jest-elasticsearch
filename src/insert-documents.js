const {refreshAllIndexes, getClient} = require('./elasticsearch');

module.exports = async function insertDocuments(documents) {
  const body = generateTargetBody(documents);
  await bulk(body, {index: 'documents'});
  await refreshAllIndexes();
};

function generateTargetBody(documents) {
  const targets = [];
  documents.map(document => {
    const body = [
      {update: {_index: 'documents', _id: document.id, routing: document.id}},
      {
        doc: document,
        doc_as_upsert: true
      }
    ];

    return targets.push(...body);
  });

  return targets;
}

async function bulk(body, {index} = {}) {
  const client = getClient();
  const params = {
    body
  };

  if (index) {
    params.index = index;
  }

  const {body: response} = await client.bulk(params);

  return response;
}
