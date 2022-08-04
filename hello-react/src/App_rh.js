
import { useCallback, useRef, useState, useMemo } from 'react';
import Counter from './components/Counter';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

const initialState = [
  {
    id:1,
    name : "gzs",
    email : "gzs@gmail.com",
    isFriend:false,
  },
  {
    id:2,
    name : "gzstwo",
    email : "gzstwo@gmail.com",
    isFriend:true,
  },
]

function countFriend(list){
  return list.filter((user) => user.isFriend).length
}


function App() {

const [userList, setUserList] = useState(initialState);
const [inputs, setInputs] = useState({
  name:"",
  email:"",
});

const{name, email} = inputs;

const friendNum = useMemo(()=>{
  return countFriend(userList);
},[userList])

const nextId=useRef(3);

const onChange = useCallback(
  (e) =>{
  setInputs((inputs)=>{
   return{ ...inputs,
    [e.target.name ]:e.target.value,
  }})
},[]);

const onCreate = useCallback(() => {
    setUserList((userList) => {return [
      ...userList,
      {
      id : nextId.current,
      name,
      email,
      isFriend:false,
    }, 
    ]});
    nextId.current++;
    setInputs({
      name:"",
      email:"",
    })
  },[email, userList, name]
)

const onRemove = useCallback((id) => {
  setUserList((userList)=>{
    return userList.filter((user)=> user.id !== id )
  });
},[]
)

const onToggle = useCallback((id) =>{
setUserList(userList.map((user)=>{
return user.id === id ? {...user, isFriend: !user.isFriend }:user;
}))
},[userList]
)


  return(
    <>
      <CreateUser 
      onCreate={onCreate} 
      name={name} 
      email={email} 
      onChange={onChange}/>
      <UserList userList={userList} onRemove={onRemove} onToggle = {onToggle}/>
      <div>친한 친구 수:{friendNum}</div>
      <Counter/>
    </>
)}

export default App;
