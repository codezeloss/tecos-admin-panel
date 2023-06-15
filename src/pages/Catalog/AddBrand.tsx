import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";

function AddBrand() {
  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title="Add Brand" />

        <div>
          <form action="">
            <div className="mb-3">
              <CustomInput
                type={"text"}
                name={"add-brand"}
                placeholder={"Add Brand"}
              />
            </div>

            <button
              className="bg-secondary w-fit py-3 px-4 text-white font-semibold rounded-md text-xs"
              type="submit"
            >
              Add Brand
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddBrand;
