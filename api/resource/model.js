// build your `Resource` model here

const db = require('../../data/dbConfig');

const getById = id => {
    return db('resources')
    .where('resource_id', '=' , id).first()   
  }

  function getResources() {
   return db('resources')
   }

async function createResources(resource) {
    const [id] = await db('resources').insert(resource)
    return getById(id)
}

module.exports = {
  getById ,
  getResources,
  createResources,
};