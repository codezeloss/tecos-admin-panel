import CustomInput from "../components/CustomInput.tsx";

function ResetPassword() {
  return (
    <div className="flex items-center justify-center h-screen bg-amber-200">
      <form
        className="bg-white w-[400px] rounded-md shadow-sm p-8 flex flex-col"
        onSubmit={() => {}}
      >
        <h1 className="text-2xl mb-1 font-bold">Reset password</h1>
        <p className="text-sm mb-6 text-gray-600">
          Please enter your new password.
        </p>

        <CustomInput
          label={"New Password"}
          type={"password"}
          name={"new-password"}
        />
        <CustomInput
          label={"Confirm Password"}
          type={"password"}
          name={"confirm-password"}
        />

        <button
          className="bg-secondary w-full py-3 text-white font-semibold rounded-md text-sm"
          type="submit"
        >
          Reset password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
