type Props = { src?: string };

const PostImage = ({ src }: Props) => {
  return (
    <>
      <div className='post-image-container'>
        <img
          className='post-image'
          src={src || 'hero-images/generic-dev-image.jpg'}
          alt=''
        />
      </div>
    </>
  );
};

export default PostImage;
