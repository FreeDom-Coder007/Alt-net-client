import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../context/AuthContextProvider';
import useTitle from '../hooks/useTitle';

const SignUp = () => {
    const {setUser, setLoading, signUp, updateUserProfile, GoogleProvider} = useContext(AuthContext)
    useTitle('Register')
    const navigate = useNavigate()
    //----------- SignIn with email, Password ----------//
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target

        const fullName = form.fullName.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        form.reset()

        signUp(email,password)
        .then(result => {
           const user = result.user
           const userID = user.uid
           setUser(user)
           setLoading(false)
           handleUpdateUserProfile(fullName,photoURL)
           navigate('/')           
        })
        .catch(error => console.log(error.message))
    }

    //----------- User Profile Update ----------//
    const handleUpdateUserProfile = (fullName,photoURL) => {
      const profile = {
        displayName: fullName,
        photoURL: photoURL 
      }

      updateUserProfile(profile)
      .then(() => {})
      .catch(err => console.error(err.message))
    }

    //-------- Google SignIn --------//
    const handleGoogleSignIn = () => {
       signInWithPopup(auth,GoogleProvider)
       .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)
        navigate('/')
     })
     .catch(error => console.log(error.message)) 
    }

    return (
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col my-10">
         <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
         </div>
         <div className="card shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
           <div className="form-control">
             <label className="label"><span className="label-text">Full Name</span></label>
             <input name='fullName' type="text" placeholder="FullName" className="input input-bordered" />
           </div>
           <div className="form-control">
             <label className="label"><span className="label-text">Photo URL</span></label>
             <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered" />
           </div>
           <div className="form-control">
             <label className="label"><span className="label-text">Email</span></label>
             <input name='email' type="email" placeholder="email" className="input input-bordered" />
           </div>
           <div className="form-control">
            <label className="label"><span className="label-text">Password</span></label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" />
           </div>
           <p>Alredy have an account? <Link to="/login" className='text-warning'>Login</Link></p>
           <div className="form-control mt-6">
            <button type='submit' className="btn">Sign Up</button>
            <button onClick={handleGoogleSignIn} className="btn my-5">Google</button>
           </div>
          </form>
         </div>
        </div>
       </div>
    )
}

export default SignUp;