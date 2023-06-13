import CustomInput from "../components/CustomInput.tsx";

function ForgotPassword() {
  return (
    <div className="flex items-center justify-center h-screen bg-amber-200">
      <form
        className="bg-white w-[450px] rounded-md shadow-sm p-8 flex flex-col"
        onSubmit={() => {}}
      >
        <h1 className="text-2xl mb-1 font-bold">Forgot password</h1>
        <p className="text-sm mb-6 text-gray-600">
          Please enter your register email to get reset password mail.
        </p>

        <CustomInput label={"Email Address"} type={"email"} name={"Email"} />

        <button
          className="bg-secondary w-full py-3 text-white font-semibold rounded-md text-sm "
          type="submit"
        >
          Send link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
