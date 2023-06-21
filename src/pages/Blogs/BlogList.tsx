import PageTitle from "../../components/PageTitle.tsx";
import BlogListTable from "../../components/Blogs/BlogListTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlogs } from "../../features/blogs/blogSlice.ts";

function BlogList() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(getBlogs());
    };
  }, []);

  const blogsState = useSelector((state: any) => state.blog.blogs);

  return (
    <main className="h-screen p-8">
      <PageTitle title="Blog list" />

      <div>
        <BlogListTable blogsData={blogsState} />
      </div>
    </main>
  );
}

export default BlogList;
