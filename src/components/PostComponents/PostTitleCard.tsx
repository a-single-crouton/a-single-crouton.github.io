import PostTag from './PostTag';
import type { PostMeta } from '../../utils/postHandler';

type Props = { meta: PostMeta | null };

const PostTitleCard = ({ meta }: Props) => {
  const title = meta?.title ?? 'Untitled Post';
  const tags = meta?.tags ?? [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const author = (meta as any)?.author ?? 'Unknown Author';
  const date = meta?.date;
  return (
    <>
      <div className='post-title-card'>
        {tags.length > 0 && (
          <div className='tags-container'>
            {tags.map((t) => (
              <PostTag key={t} label={t} />
            ))}
          </div>
        )}
        <div className='tags-container'></div>

        <div className='title-container'>
          <h2 className='post-title'>{title}</h2>
        </div>
        <div className='author-container'>
          <img
            className='author-image'
            src='/hero-images/generic-dev-image.jpg'
            alt=''
          />
          <div className='author-name'>{author}</div>
          <div className='date-container'>{date}</div>
        </div>
      </div>
    </>
  );
};

export default PostTitleCard;
