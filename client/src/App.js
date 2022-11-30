import React, {useState, useEffect} from "react";
import './App.css';
import Axios from 'axios'

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contact_list, setNameList] = useState([]);
  const [newPhone, setNewPhone] = useState("");
  useEffect(()=> {
    Axios.get('http://localhost:4000/api/get').then((response)=> {
      setNameList(response.data);
    })
  }, []);
  const submit = () => {
    Axios.post("http://localhost:4000/api/insert", {name: name, phone: phone,});
    setNameList([...contact_list, {name: name, phone: phone},]);
  };
  const deleteContact = (contact) => {
    Axios.delete(`http://localhost:4000/api/delete/${contact}`);
    window.location.reload();
    return false;
  };
  const updatePhone = (contact) => {
    Axios.put("http://localhost:4000/api/update", {name: contact, phone: newPhone,});
    setNewPhone("");
    window.location.reload();
    return false;
  };
  return (
    <div className="App">
      <div class='newContact'>
        <div class='addContactStyle'>
          <h1 class='title'>ADD CONTACT</h1>
          <label>Name</label>
          <input type='text' name='name' onChange={(e)=>{setName(e.target.value)}}/>
          <label>Phone Number</label>
          <input type='text' name='phone' onChange={(e)=>{setPhone(e.target.value)}}/>
          <button onClick={(submit)}>Add Name</button>
        </div>
        <br></br><br></br>

        <div class='elementlist'>
          <h1 class='list'>CONTACT LIST</h1>
          {contact_list.map((val)=> {
            return (<div className="element">
              <h1>{val.name}</h1>
              <h3>Phone Number: {val.phone}</h3>
              <input type="text" id="update" onChange={(e)=> {
                setNewPhone(e.target.value)
              }}/>
              <button class="button" onClick={()=>{updatePhone(val.name)}}>Update Phone Number</button>
              <button onClick={()=>{deleteContact(val.name)}}>Delete Contact</button>
            </div>);
          })}
        </div>
      </div>
    </div>
  );
}

export default App;