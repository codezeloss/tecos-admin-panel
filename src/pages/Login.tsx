import CustomInput from "../components/CustomInput.tsx";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-amber-200">
      <div className="bg-white w-[450px] rounded-md shadow-sm px-5 py-8 flex flex-col">
        <h1 className="text-2xl text-center mb-6 font-bold">Login</h1>

        <form className="" action="">
          <CustomInput
            type={"email"}
            placeholder={"Email address"}
            name={"Email"}
          />
          <CustomInput
            type={"password"}
            placeholder={"Password"}
            name={"Password"}
          />
        </form>

        <button
          className="bg-blue-950 w-full p-2 text-white font-semibold rounded-md text-sm"
          type="submit"
          onSubmit={() => {}}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
