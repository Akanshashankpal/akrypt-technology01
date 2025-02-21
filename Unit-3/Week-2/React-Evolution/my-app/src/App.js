import logo from './logo.svg';
import './App.css';
import Employeedashboard from './component/Employeedashboard';
import Cards from './cardsData/Cards';
import Forms from './forms/Forms';
import NewForm from './forms/NewForm';
import Toast from './toastForm/Toast';
import Form from './react-forms/Form';
import RountingDom from './routing-component/RountingDom';
import Navbar from './routing-component/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Employeedashboard/> */}
    {/* <Cards/> */}
    {/* <Forms/> */}
    {/* <NewForm/> */}
    {/* <Toast/> */}
    {/* <Form/> */}
    <Navbar/>
   <RountingDom/>
    </div>
  );
}

export default App;
