import AddPost from "./AddPost";


function PostsCard({posts, isLoading}) {

   
  return (
    <div>
      <AddPost />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts?.map((post) => (
          <div
            key={post.id}
            className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 my-4 "
          >
            <h3 className="text-lg font-bold mb-2">{post.post}</h3>
            <p className="text-gray-700 mb-2">{post.caption}.</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PostsCard;
