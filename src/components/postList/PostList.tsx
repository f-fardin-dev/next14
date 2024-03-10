import { deletePost } from "@app/actions";
import { getPosts } from "@app/services/post";
import { ListItem } from "../listItem/ListItem";

export const PostList = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <ListItem
          key={post.slug}
          img={post?.img ?? "/defaultBlog.webp"}
          title={post.title}
          action={deletePost}
          filedName="slug"
          filedValue={post.slug}
        />
      ))}
    </div>
  );
};
