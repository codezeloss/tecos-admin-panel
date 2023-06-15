import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";

function AddCategory() {
  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title="Add Category" />

        <div>
          <form action="">
            <div className="mb-3">
              <CustomInput
                type={"text"}
                name={"add-category"}
                placeholder={"Add Category"}
              />
            </div>

            <button
              className="bg-secondary w-fit py-3 px-4 text-white font-semibold rounded-md text-xs"
              type="submit"
            >
              Add Category
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddCategory;
