import { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Register = () => {
  const [passwordError, setPasswordError] = useState([]);
  const { createUser, updateUser, setUser } = use(AuthContext);

  const navigate = useNavigate();

  const validatePassword = (value) => {
    const newErrors = [];
    if (value.length < 6) {
      newErrors.push("Password must be at least 6 characters long.");
    }
    if (!/[a-z]/.test(value)) {
      newErrors.push("Password must contain a lowercase letter.");
    }
    if (!/[A-Z]/.test(value)) {
      newErrors.push("Password must contain an uppercase letter.");
    }
    setPasswordError(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordError.length == 0) {
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Swal.fire({
            icon: "success",
            title: "Registration successful",
          });
          setUser(user);
          updateUser({ displayName: name, photoURL: photo });
          const userInfo = {
            name,
            photo,
            email,
          };
          fetch("https://eco-roots-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              navigate("/");
            });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        });
    }
  };

  return (
    <div className="hero min-h-[60vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full md:w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-2xl font-bold text-center">Register</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                name="name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered"
                name="photo"
              />
            </div>

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
                onKeyUp={(e) => validatePassword(e.target.value)}
                required
              />
            </div>

            <div>
              <p className="mt-4">
                Already have an Account?{" "}
                <Link className="text-blue-400" to="/login">
                  Login
                </Link>
              </p>
            </div>

            {passwordError.length > 0 && (
              <ul className="mt-2 text-red-500 text-sm space-y-1">
                {passwordError.map((err, index) => (
                  <li className="" key={index}>
                    • {err}
                  </li>
                ))}
              </ul>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
