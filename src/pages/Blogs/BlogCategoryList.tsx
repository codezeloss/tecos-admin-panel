import PageTitle from "../../components/PageTitle.tsx";
import BlogCategoryListTable from "../../components/Blogs/BlogCategoryListTable.tsx";

function BlogCategoryList() {
  return (
    <>
      <main className="h-screen p-8">
        <PageTitle title="Blog category list" />

        <div>
          <BlogCategoryListTable />
        </div>
      </main>
    </>
  );
}

export default BlogCategoryList;
