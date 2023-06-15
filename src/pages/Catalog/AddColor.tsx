import PageTitle from "../../components/PageTitle.tsx";
import CustomInput from "../../components/CustomInput.tsx";

function AddColor() {
  return (
    <>
      <main className="bg-white h-screen p-8">
        <PageTitle title="Add Color" />

        <div>
          <form action="">
            <div className="mb-3">
              <CustomInput
                type={"text"}
                name={"add-color"}
                placeholder={"Add Color"}
              />
            </div>

            <button
              className="bg-secondary w-fit py-3 px-4 text-white font-semibold rounded-md text-xs"
              type="submit"
            >
              Add Color
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default AddColor;
