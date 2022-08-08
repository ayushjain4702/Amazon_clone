import React,{useState,useEffect} from 'react';
import './Register.css';
import { Link,useHistory } from 'react-router-dom';
import AmazonLogo from '../../Amazon_Logo.png';
import { useSelector,useDispatch } from 'react-redux';
import { registerInitiate } from '../../Redux/actions';

const Register = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const { user } = useSelector((state) =>state.data);
  const history = useHistory();
  let dispatch = useDispatch();
  useEffect(()=>{
    if(user){
      history.push('/');
    }
  },[user,dispatch]);

 
  
  const register = e =>{
    e.preventDefault();
    dispatch(registerInitiate(email,password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className='register'>
      <Link to='/'>
        <img src={AmazonLogo} className='register-logo' alt='logo'/>
      </Link>
      <div className='register-container'>
        <h1>Create account</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </form>
        <button type='submit' onClick={register} className='continue'>
          Continue
        </button>
        <div className='detail'>
          <p>Already have an account? </p>
          <Link to='/login' className='signin-link'>
            <p>Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register