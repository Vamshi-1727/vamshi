import {useState} from 'react';
function Form()
{
  const [inputs,setInputs] = useState({});
  const handleChange =(event)=>{
    const name =event.target.name;
    const value =event.target.value;
    setInputs(values =>({...values,[name]:values})) 
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    alert(input,username+" "+inputs.age);
  }
  return(
    <form onSubmit ={handleSubmit}>
        <label>Enter your name:
            <input
              type="text"
              name="username"
              value={inputs.username|| " "}
              onChange={handleChange}
            />
        </label>
        <label>Enter your age:
            <input
              type="number"
              name="age"
              value={inputs.age|| " "}
            />
        </label>
        <input type =" submit"/>
        </form>
  )
} 
export default Form;
