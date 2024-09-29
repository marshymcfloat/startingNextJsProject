export default function BlogDetails({ params }) {
  return (
    <>
      <h1>This the blog</h1>
      <p> this blog is about {params.posts}</p>
    </>
  );
}
