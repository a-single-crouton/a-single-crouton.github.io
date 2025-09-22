import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { ProjectMeta } from '../../utils/projectHandler';

type Props = {
  meta?: ProjectMeta;
  isOpen: boolean;
  onClose: () => void;
};

const ProjectModal = ({ meta, isOpen, onClose }: Props) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Open/close the native <dialog> properly
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;

    if (isOpen && !dlg.open) dlg.showModal();
    if (!isOpen && dlg.open) dlg.close();
  }, [isOpen]);

  // Wire native events once
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;

    const onCancel = (e: Event) => {
      // Prevent default dialog cancel behavior, then close via parent state
      e.preventDefault();
      onClose();
    };
    const onNativeClose = () => onClose();

    dlg.addEventListener('cancel', onCancel);
    dlg.addEventListener('close', onNativeClose);

    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);

    return () => {
      dlg.removeEventListener('cancel', onCancel);
      dlg.removeEventListener('close', onNativeClose);
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!meta) return null;

  const {
    slug,
    title,
    positives = [],
    negatives = [],
    description,
    notes = [],
    demoUrl,
    repoUrl,
  } = meta;

  // Close when clicking backdrop (outside the dialog box)
  const onBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className='project-modal'
      aria-labelledby='project-modal-title'
      onClick={onBackdropClick}
    >
      <div className='project-modal-header'>
        <h2 id='project-modal-title' className='project-modal-title'>
          {title}
        </h2>
        <button
          className='project-modal-close'
          onClick={onClose}
          aria-label='Close'
          type='button'
        >
          ×
        </button>
      </div>

      {description ? <p className='project-modal-desc'>{description}</p> : null}

      <div className='project-modal-sections'>
        {!!positives.length && (
          <section>
            <h3>Positives</h3>
            <ul>
              {positives.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>
        )}
        {!!negatives.length && (
          <section>
            <h3>Negatives</h3>
            <ul>
              {negatives.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </section>
        )}
        {!!notes.length && (
          <section>
            <h3>Notes</h3>
            <ul>
              {notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <div className='project-modal-actions'>
        <Link className='modal-btn' to={`/projects/${slug}`}>
          View project
        </Link>
        {demoUrl && (
          <a
            className='modal-btn'
            href={demoUrl}
            target='_blank'
            rel='noreferrer'
          >
            Live demo
          </a>
        )}
        {repoUrl && (
          <a
            className='modal-btn'
            href={repoUrl}
            target='_blank'
            rel='noreferrer'
          >
            Repo
          </a>
        )}
      </div>
    </dialog>
  );
};

export default ProjectModal;
