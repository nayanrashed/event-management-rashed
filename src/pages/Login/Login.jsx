import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin=e=>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email,password);
    }
  return (
    <div>
        <h2 className="text-2xl text-center my-4">Please Login</h2>
      <form onSubmit={handleLogin} className="md:w-1/2 mx-auto my-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
            name="email"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
            name="password"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">Do not have an account? <Link to='/register' className="text-red-400 font-bold">Register</Link> </p>
    </div>
  );
};

export default Login;
