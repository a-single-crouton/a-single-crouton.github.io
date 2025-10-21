/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostHeader from '../components/PostComponents/PostHeader';
import { getPostBySlug, type PostMeta } from '../utils/postHandler';

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [Content, setContent] = useState<React.ComponentType | null>(null);
  const [meta, setMeta] = useState<PostMeta | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      if (!slug) return;
      const result = await getPostBySlug(slug);
      if (!result) {
        setNotFound(true);
        return;
      }
      setNotFound(false);
      setContent(() => result.component);
      setMeta(result.meta);
    })();
  }, [slug]);

  if (notFound)
    return (
      <>
        <div className='post-container'>
          <div className='post'>
            <PostHeader meta={null} />
            <div className='post-body'>Post not found.</div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className='post-container'>
        <div className='post'>
          <PostHeader meta={meta} />
          <div className='post-body'>
            {Content ? <Content /> : <p>Loading...</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
