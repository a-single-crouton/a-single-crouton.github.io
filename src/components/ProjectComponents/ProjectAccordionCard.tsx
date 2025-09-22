import { useId, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { ProjectMeta } from '../../utils/projectHandler';

type Props = { meta: ProjectMeta };

export default function ProjectAccordionCard({ meta }: Props) {
  const {
    slug,
    title,
    image,
    description,
    tech = [],
    positives = [],
    negatives = [],
    notes = [],
    demoUrl,
    repoUrl,
  } = meta;

  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | 'auto'>(0);
  const regionId = useId();

  // Measure content for smooth height animation
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    if (open) {
      const h = el.scrollHeight;
      setHeight(h);
      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== 'max-height') return;
        setHeight('auto');
        el.removeEventListener('transitionend', onEnd);
      };
      el.addEventListener('transitionend', onEnd);

      return () => el.removeEventListener('transitionend', onEnd);
    } else {
      // from auto → fixed px so we can animate back to 0
      if (height === 'auto') {
        setHeight(el.scrollHeight); // lock current height

        // force the browser to paint this value before we set 0
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setHeight(0));
        });
      } else {
        // already a number, just go to 0 on next frame
        requestAnimationFrame(() => setHeight(0));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <article
      className={`proj-card${open ? ' is-open' : ''}`}
      onClick={() => setOpen((v) => !v)}
    >
      <header className='proj-card__header'>
        <div className='proj-card__title'>
          <h3>{title}</h3>
          {tech.length ? (
            <div className='proj-card__tech'>{tech.join(' · ')}</div>
          ) : null}
          {description ? (
            <p className='proj-card__desc'>{description}</p>
          ) : null}
        </div>

        {/* <button
          className='proj-card__toggle'
          aria-expanded={open}
          aria-controls={regionId}
          type='button'
        >
          {open ? 'Hide details' : 'Show details'}
        </button> */}
      </header>

      {/* Collapsible region */}
      <div
        id={regionId}
        role='region'
        aria-label={`${title} details`}
        ref={contentRef}
        className='proj-card__collapsible'
        style={{ maxHeight: height === 'auto' ? 'none' : `${height}px` }}
      >
        <div className='proj-card__img-container'>
          <img src={`${image}`} alt='' className='proj-card__img' />
        </div>
        <div
          className='proj-card__accordion'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Use <details> for simple, accessible sub-accordion items */}
          {!!positives.length && (
            <details>
              <summary>What Went Well</summary>
              <ul>
                {positives.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </details>
          )}
          {!!negatives.length && (
            <details>
              <summary>What I Couldve Done Better</summary>
              <ul>
                {negatives.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </details>
          )}
          {!!notes.length && (
            <details>
              <summary>Notes</summary>
              <ul>
                {notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </details>
          )}
        </div>

        <div className='proj-card__actions'>
          <Link className='btn' to={`/projects/${slug}`}>
            Case study
          </Link>
          {demoUrl && (
            <a className='btn' href={demoUrl} target='_blank' rel='noreferrer'>
              Live demo
            </a>
          )}
          {repoUrl && (
            <a className='btn' href={repoUrl} target='_blank' rel='noreferrer'>
              Repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
