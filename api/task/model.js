// build your `Task` model here
// build your `Resource` model here

const db = require('../../data/dbConfig');

const getById = id => {
    return db('tasks')
    .where('task_id', '=' , id).first()
    
  }

  async function getTasks() {
   const tasks = await db('tasks as t').leftJoin(
       
   )
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