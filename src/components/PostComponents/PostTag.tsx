type Props = { label: string };

const PostTag = ({ label }: Props) => {
  return (
    <>
      <div className='post-tag'>{label}</div>
    </>
  );
};

export default PostTag;
