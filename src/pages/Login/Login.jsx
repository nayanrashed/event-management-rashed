import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signIn,signInWithGoogle}= useContext(AuthContext);
    const location =useLocation();
    const navigate  = useNavigate();

    const [error, setError]= useState('');

    const handleLogin=e=>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email,password);

        setError("");
        
        signIn(email,password)
        .then(result=>{
            console.log(result.error)
            navigate(location?.state?location.state:'/')
            return toast("Wow so easy !");
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })
    }
    const handleGoogleSignIn=()=>{
      signInWithGoogle()
      .then(result=>{
        navigate('/');
        console.log(result.user)
        toast("Wow so easy !");
      })
      .catch(error=>{
        console.error(error)
      })
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
        {
          error && <p className="text-red-400">{error}</p>
        }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <ToastContainer />
        </div>
        <p className="text-center">or</p>
        <p className="text-center">Login with <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
      </form>
      
      <p className="text-center">Do not have an account? <Link to='/register' className="text-red-400 font-bold">Register</Link> </p>
    </div>
  );
};

export default Login;
