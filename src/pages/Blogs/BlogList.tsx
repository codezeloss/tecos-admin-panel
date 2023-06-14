import PageTitle from "../../components/PageTitle.tsx";
import BlogListTable from "../../components/Blogs/BlogListTable.tsx";

function BlogList() {
  return (
    <main className="h-screen p-8">
      <PageTitle title="Blog list" />

      <div>
        <BlogListTable />
      </div>
    </main>
  );
}

export default BlogList;
