import PageTitle from "../../components/PageTitle.tsx";
import BlogCategoryListTable from "../../components/Blogs/BlogCategoryListTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlogCategories } from "../../features/blogCategory/blogCategorySlice.ts";

function BlogCategoryList() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(getBlogCategories());
    };
  }, []);

  const blogCategoriesState = useSelector(
    (state: any) => state.blogCategory.blogCategories
  );

  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Blog category list" />

        <div>
          <BlogCategoryListTable blogCategoriesData={blogCategoriesState} />
        </div>
      </main>
    </>
  );
}

export default BlogCategoryList;
