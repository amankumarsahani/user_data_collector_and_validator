import React,{useState} from 'react';
import Button from './UI/Button';
import AddUser from './User/AddUser';
import UserList from './User/UserList';
import Error from './UI/Error';


function App() {
  const [data, setData] = useState([]);
  const addData=(userData)=>{
    setData((prevState) => {
      return  [...prevState, userData ];
    });
  }

  return (
    <div>
    <AddUser addData={addData}/>
    <UserList data={data}/>
    </div>
  );
}

export default App;
