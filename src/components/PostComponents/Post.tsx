import Navbar from '../SiteComponents/Navbar';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import type { PostMeta } from '../../utils/postHandler';

type Props = {
  meta?: PostMeta | null;
};

const Post = ({ meta }: Props) => {
  return (
    <>
      <Navbar />
      <div className='post-container'>
        <div className='post'>
          <PostHeader meta={meta ?? null} />
          <PostBody />
          <div className='post-footer'></div>
        </div>
      </div>
    </>
  );
};

export default Post;
