import { useEffect, useState } from 'react';
import { getAllProjectMeta, type ProjectMeta } from '../utils/projectHandler';
import ProjectAccordionCard from '../components/ProjectComponents/ProjectAccordionCard';

const ProjectsIndex = () => {
  const [projects, setProjects] = useState<ProjectMeta[]>([]);

  useEffect(() => {
    getAllProjectMeta().then(setProjects).catch(console.error);
  }, []);
  return (
    <>
      <div className='project-index-title-container'>
        <h1 className='project-index-title'>Projects</h1>
      </div>
      <div className='project-index-grid'>
        <div className='project-index-column-one'></div>
        <div className='project-index-column-two'>
          {projects.map((p) => (
            <ProjectAccordionCard key={p.slug} meta={p} />
          ))}
        </div>
        <div className='project-column-three'></div>
      </div>
    </>
  );
};

export default ProjectsIndex;
