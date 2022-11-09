import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../context/AuthContextProvider';


const Login = () => {
    const {setUser,signIn,GoogleProvider} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault()  
        const email = event.target.email.value 
        const password = event.target.password.value
        event.target.reset() 

        signIn(email,password)
        .then(result => {
           const user = result.user
           console.log(user)
           setUser(user)
           navigate(from, {replace: true})
        })
        .catch(error => console.log(error.message))
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth,GoogleProvider)
        .then(result => {
         const user = result.user
         console.log(user)
         navigate(from, {replace: true})
      })
      .catch(error => console.log(error.message)) 
     }

    return (
        <div className="hero min-h-screen bg-base-100">
         <div className="hero-content flex-col my-10">
          <div className="text-center lg:text-left">
           <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input name='email' type="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
             <label className="label"><span className="label-text">Password</span></label>
             <input name='password' type="password" placeholder="password" className="input input-bordered" />
            </div>
            <p>Don't have a account? <Link className='text-warning' to="/signup">Sign Up</Link></p>
            <div className="form-control mt-6">
             <button type='submit' className="btn">Login</button>
             <button onClick={handleGoogleSignIn} className="btn my-5">Google</button>
            </div>
           </form>
          </div>
         </div>
        </div>
    )
}

export default Login;