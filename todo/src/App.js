import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import React, { useState, Fragment } from "react";
import data from "./mock-data.json";
import {nanoid} from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from './components/EditableRow';






const App = () => {
  const [contacts, setContacts] = useState(data);
  const[addFormData, setAddFormData] = useState({
    Time: " ",
    Activity: " ",
  });

  const[editFormData, setEditFormData] =useState({
    Time: " ",
    Activity: " ",
  });


  const [editContactId, setEditContactId ] = useState(null);


  const handleAddFormChange =(event) =>{
    event.preventDefault();

    const filedName =event.target.getAttribute("name");
    const fieldValue =event.target.value;

    const newFormData = { ...addFormData };
    newFormData[filedName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange =(event) => {
    event.preventDefault();

    const filedName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData ={ ...editFormData };
    newFormData[filedName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event) =>{
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Time: addFormData.Time,
      Activity: addFormData.Activity,
    };
    const newContacts =[...contacts, newContact];
    setContacts(newContact);
  };

  const handleEditFormSubmit = (event) =>{
    event.preventDefault();
    
    const editedContact = {
      id: editContactId,
      Time: editFormData.Time,
      Activity: editFormData.Activity,

    };
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };


  const handleEditClick = (event, contact)=> {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Time: contact.filedName,
      Activity: contact.Activity,

    };

    setEditFormData(formValues);
  };
  const handleCancalClick = () =>{
    setEditContactId(null);
  };

  const handleDeleteClick =(contactId) =>{
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id === contactId );

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const [query,setQuery] = useState("")




  return (
    
    <div className="App" >
      <form className='search'
      onChange={(event) => setQuery(event.target.value)}>
        
       <input 
       type="text"
       name='search'
       required="required"
       placeholder='Search...'/>
       
       <Login/>
       <Registration/>
       <Home/>


       
      </form>
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.filter((contact) =>
          contact.Time.toLowerCase().includes(query))
          .map((contact) => (
            <Fragment>
             {editContactId === contact.id ? (
             <EditableRow 
             editFormData={editFormData} 
             handleEditFormChange={handleEditFormChange}
             handleCancalClick={handleCancalClick}
             />
             ) : (
              <ReadOnlyRow 
              contact={contact} 
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
              />
             )}
             </Fragment> 

       ))}

        </tbody>
      </table>
      </form>

      <h2>Add a Contact</h2>
     <form onSubmit={handleAddFormSubmit}>
      <input 
      type="text" 
      name="Time" 
      required="required" 
      placeholder="Enter a Time..."
      onChange={handleAddFormChange}
      />

      <input 
      type="text" 
      name="Activity" 
      required="required" 
      placeholder="Enter an Activity..."
      onChange={handleAddFormChange}
      />
      <button type="submit">Add</button>
     </form>
    </div>
  )
}

      


export default App;
