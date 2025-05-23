import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { logIn, forgetPassword } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          icon: "success",
          title: "Login successful",
          text: `${user.displayName}`,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Login Successful ${user.displayName}`,
        });
        navigate(from, { replace: true });
        const userInfo = {
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
        };
        fetch("https://eco-roots-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  const handleForget = () => {
    const emailInput = document.getElementById("email");
    if (emailInput && emailInput.value) {
      const email = emailInput.value;

      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (isEmail) {
        console.log("Valid email");
        forgetPassword(email)
          .then(() => {
            console.log("Password reset email sent!");
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Password reset email sent!",
            });
            emailInput.value = "";
          })
          .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${errorMessage}`,
            });
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid email format",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email input not found or empty",
      });
    }
  };

  return (
    <div className="hero min-h-[60vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full md:w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body relative">
            <h1 className="text-2xl font-bold text-center">Login</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                required
                id="email"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>

            <div>
              <p className="mt-4">
                Don't have an Account?{" "}
                <Link className="text-blue-400" to="/register">
                  Register
                </Link>
              </p>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">LogIn</button>
            </div>
          </form>
          <div className="flex justify-center mb-4">
            <button
              onClick={loginWithGoogle}
              className="btn btn-success text-white md:absolute bottom-20 right-10 text-lg"
            >
              <FcGoogle className="text-2xl"></FcGoogle> Google Loging
            </button>
          </div>
          <div className="w-full text-center">
            <button className="mb-4" onClick={handleForget}>
              Forget Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
