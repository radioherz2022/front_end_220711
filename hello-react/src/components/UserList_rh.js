import  { useEffect, useMemo,useState } from "react";

// 매개변수가 {userlist : [...]} 형식으로 전달 => 비구조화 할당
function User({User, onRemove, onToggle}){
    const{id, name, email, isFriend} = User;

    useEffect(()=>{
        console.log(id,"User가 마운트됨")
        // 초기값 설정할 때
// API 요청을 할 때
// setTimeout, setInterval
// 라이브러리 사용
return () => {
    console.log(id,"User가 언마운트됨")
    // 정리함수
    // clearTimeout, ClearInterval
    // 라이브러리 인스턴스 지울 때
}
    },[id])


useEffect(()=>{
        console.log(id, "isFriend 값이 변함", isFriend);
    },[isFriend, id]);
    

useEffect(()=>{
    console.log("렌더링이 일어남");
});

    return(
        <li style={{color:isFriend && "blue", display:"flex",alignItems:"center",}}>
            <p onClick = {()=>onToggle(id)}>{name}({email})</p>
            <button onClick ={()=>onRemove(id)}>삭제</button>
        </li>
    )
}



function UserList({userList, onRemove, onToggle}){

    useMemo(()=>{

    })
    
let friendNum = userList.filter((user) => user.isFriend).length;
return(
<>
    <ul>
        {userList.map((user)=>{
            return (
                <User user={user} onRemove={onRemove} onToggle={onToggle}/>
            // <li key={user.id} style={{color:user.isFriend && "blue"}}>
            //     <p onClick={()=> onToggle(user.id)} style={{cursor:"pointer"}}>
            //         {user.name}({user.email})
            //         </p>
            // <button onClick={()=>{onRemove();}}>삭제</button></li>
        // )}
        // )
    )})}
    </ul>
    </>
)
}

export default UserList;