import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1>Blogs</h1>
      <ul>
        <li>
          <Link href={"blog/post1"}>Post-1</Link>
        </li>
        <li>
          <Link href={"blog/post2"}>Post-2</Link>
        </li>
      </ul>
    </>
  );
}
