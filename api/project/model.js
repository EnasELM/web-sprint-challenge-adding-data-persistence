// build your `Project` model here

const db = require('../../data/dbConfig');

const getById = id => {
    return db('projects')
    .where('project_id', '=' , id).first()
    
  }

  function getProjects() {
   return db('projects').select('project_name','project_description','project_completed')
   }


async function createProject(project) {
    const [id] = await db('projects').insert(project)
   
    return getById(id)
}

module.exports = {
  getById ,
  getProjects,
  createProject,
};
