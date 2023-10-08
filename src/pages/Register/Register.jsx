import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister=e=>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email');
        const password = form.get('password')
        console.log(name,email,password);
    }
    return (
        <div>
        <h2 className="text-2xl text-center my-4">Please Register</h2>
      <form onSubmit={handleRegister} className="md:w-1/2 mx-auto my-4">
        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
            name="name"
          />
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">Have an account? <Link to='/login'      className="text-red-400 font-bold">Login</Link> </p>
    </div>
    );
};

export default Register;