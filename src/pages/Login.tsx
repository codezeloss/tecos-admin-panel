import CustomInput from "../components/CustomInput.tsx";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-amber-200">
      <form
        className="bg-white w-[400px] rounded-md shadow-sm p-8 flex flex-col"
        onSubmit={() => {}}
      >
        <h1 className="text-2xl mb-1 font-bold">Sign In</h1>
        <p className="text-sm mb-6 text-gray-600">
          Log in to your account to continue.
        </p>

        <CustomInput label={"Email Address"} type={"email"} name={"Email"} />
        <CustomInput label={"Password"} type={"password"} name={"Password"} />

        <div className="text-sm flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <input className="text-xs" type="checkbox" />
            <p className="text-black">Remember me</p>
          </div>
          <div>
            <Link className="text-blue-500 font-medium" to="/forgot-password">
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          className="bg-secondary w-full py-3 text-white font-semibold rounded-md text-sm"
          type="submit"
        >
          Sign In
        </button>

        <div className="flex items-center my-6">
          <div className="bg-gray-300 h-[1px] w-full" />
          <div className="text-xs text-gray-300 px-1 uppercase">Or</div>
          <div className="bg-gray-300 h-[1px] w-full" />
        </div>

        <div className="flex text-sm items-center gap-1 justify-center">
          <p className="text-gray-600">Don't have an account?</p>
          <Link className="text-blue-500 font-medium" to="/signup">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
