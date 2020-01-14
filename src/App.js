import React,{ useState, useEffect} from 'react';
import './App.css';
import SignUp from './component/SignUp.jsx';
import { post } from 'axios';


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

  const formSubmit = (e) => {
    e.preventDefault();
    
    postInput()
      .then((res) => {
        console.log(res.data);        
      });
    
  }

  const postInput = () => {
    const formData = new FormData();
    const url = '/api/inputValues';
    formData.append('name', formValue.name);
    formData.append('userId', formValue.userId);
    formData.append('userPw', formValue.userPw);
    formData.append('userPwAgain', formValue.userPwAgain);

    return post(url, formData);
  }


  useEffect(() => {
    console.log(formValue);
  }, [formValue]);


  return(
    <SignUp formValue={formValue} formValueChange={formValueChange} formSubmit={formSubmit}/>
  );
}

export default App;
