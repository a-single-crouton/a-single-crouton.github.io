import type { ProjectMeta } from '../../utils/projectHandler';

type Props = {
  meta: ProjectMeta;
  onOpen: () => void;
};

const ProjectItem = ({ meta, onOpen }: Props) => {
  const { title, image, description, tech = [] } = meta;

  return (
    <>
      <button
        className='project-item-container'
        onClick={onOpen}
        aria-label={`Open ${title}`}
      >
        <div className='project-item-image-container'>
          {image ? (
            <img src={image} alt='' className='project-item-image' />
          ) : null}
        </div>

        <div className='project-item-text-container'>
          <h3 className='project-item-title'>{title}</h3>
          {tech.length ? (
            <div className='project-item-tech'>{tech.join(' · ')}</div>
          ) : null}
          {description ? (
            <p className='project-item-desc'>{description}</p>
          ) : null}
        </div>
      </button>
    </>
  );
};

export default ProjectItem;
