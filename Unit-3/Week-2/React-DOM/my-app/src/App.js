
import { useContext } from 'react';
import './App.css';
import { AppContext } from './index';
import { AuthContext } from './ContextApi/AuthContexzt/AuthContextProvider';
import Navbar from '../src/Components/Navbar'
import AllRoutes from '../src/Components/AllRoutes'

function App() {
  const [state,ChangeState]=useContext(AppContext)
  const [isAuth,Login,Logout]=useContext(AuthContext)
  console.log(state)
  console.log(ChangeState)
  return (
    <div className='text-center'>
      <Navbar/>
      <AllRoutes/>
      {/* <h1>Theme  {state}</h1>
      <button onClick={ChangeState}>Click</button>
        
    <h1>user is authoticated  {isAuth ? "yes":"no"}</h1>

    <button onClick={Login}>Login</button> 
    <button onClick={Logout}>Logout</button> */}

    </div>
  );
}

export default App;
