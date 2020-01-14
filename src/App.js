import React,{ useState, useEffect} from 'react';
import './App.css';
import SignUp from './component/SignUp.jsx';



const App = () => {

  const [formValue, setformValues] = useState({
    name:'',
    userId:'',
    userPw:'',
    userPwAgain:''
  });

  const formValueChange = (e) =>{
  console.log(e.target)
    setformValues({
      ...formValue,
      [e.target.name] : e.target.value
    });
  }

  useEffect(() => {
    console.log(formValue);
  }, [formValue]);


  return(
    <SignUp formValue={formValue} formValueChange={formValueChange} />
  );
}

export default App;
