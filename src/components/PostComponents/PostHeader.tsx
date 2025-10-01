import PostImage from './PostImage';
import PostTitleCard from './PostTitleCard';
import type { PostMeta } from '../../utils/postHandler';

type Props = { meta: PostMeta | null };

const PostHeader = ({ meta }: Props) => {
  return (
    <>
      <div className='post-header'>
        <PostImage src={meta?.image || '/hero-images/generic-dev-image.jpg'} />
        <PostTitleCard meta={meta} />
      </div>
    </>
  );
};

export default PostHeader;
