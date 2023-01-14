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
    <React.Fragment>
    <AddUser addData={addData}/>
    <UserList data={data}/>
    </React.Fragment>
  );
}

export default App;
