import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("uid")) navigate("/");
  });

  const LoginButton = async () => {
    toast.error("This method is not supported");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
    setLoading(true);
    try {
      const User = await signInWithEmailAndPassword(auth, email, password).then((creds) => {
        setLoading(false);
        toast.success("Successfully Logged in!");
        localStorage.setItem("uid", creds.user.uid);
        localStorage.setItem("email", creds.user.email);
        navigate("/");
      });
    } catch (err) {
      setLoading(false);
      console.log(err);
      err.code === "auth/invalid-credential"
        ? toast.error("Email or Password is incorrect")
        : toast.error("Something is wrong.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-center">
          <img src="/img/logo2.jpg" alt="PRATIGYA" width={250} height={250} />
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-indigo-700">Welcome!</p>
          <p className="text-sm font-bold text-indigo-700">Create a FREE account</p>
          <p className="text-xs">
            Already have an account?
            <span className="mx-1 text-indigo-500 font-bold"> Sign in</span>
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700">Type Username and Password</p>
            <p className="text-gray-400 text-sm">3/3</p>
          </div>
          <form className="mt-2" onSubmit={onSubmit}>
            <div className="flex flex-col">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Username"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                placeholder="Password"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center mt-1 gap-1">
                <div className="h-1 w-16 bg-green-500 rounded-full"></div>
                <div className="h-1 w-16 bg-gray-300 rounded-full"></div>
                <div className="h-1 w-16 bg-gray-300 rounded-full"></div>
                <div className="h-1 w-16 bg-gray-300 rounded-full"></div>
                <span className="text-xs text-gray-500 ml-2">Strong</span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500 text-center">or create an account with</p>
          <div className="flex justify-center mt-2 space-x-4">
            <button
              className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 text-sm flex items-center "
              onClick={LoginButton}
            >
              <FontAwesomeIcon icon={faGoogle} className="h-4 w-4 text-gray-700 mr-1" />
              Google
            </button>
            <button
              className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 text-sm flex items-center "
              onClick={LoginButton}
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 text-blue-700 mr-1" />
              Linkedin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
