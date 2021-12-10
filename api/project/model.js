// build your `Project` model here

const db = require('../../data/dbConfig');

const getById = id => {
     return db('projects')
      .where('project_id', '=' , id).first()
      .then((project) => {
          return{ ...project, project_completed: !!project.project_completed}
      })
    
  }

  async function getProjects() {
   const projects = await db('projects')
   return projects.map((project) => {
     return{ ... project, project_completed: !!project.project_completed}
   })
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
