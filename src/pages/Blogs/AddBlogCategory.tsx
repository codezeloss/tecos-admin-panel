import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";

function AddBlogCategory() {
  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title="Add Blog Category" />

        <div>
          <form action="">
            <div className="mb-3">
              <CustomInput
                type={"text"}
                name={"blog-category"}
                placeholder={"Enter Blog Category"}
              />
            </div>

            <button
              className="bg-secondary w-full py-3 text-white font-semibold rounded-md text-sm"
              type="submit"
            >
              Add Blog Category
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddBlogCategory;
