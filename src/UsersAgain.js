import React, { useEffect, useState} from 'react';
import axios from "axios"

 

const UsersAgain = () => {
      let myUsers =[];
      const [users ,setUsers] =useState(myUsers);

      useEffect(()=> {
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then((res)=> {
              console.log(res);
              setUsers(res.data)
          })
          .catch((err)=> console.log(err));
      });

    return (
        <div>
            <h1>All Users</h1>
            <hr/>
            <div>
                   {users.map((user)=> (
                    <div>
                        <p>{user.username}</p>
                        <p>{user.id}</p>
                        <p>{user.phone}</p>
                        <p>{user.email}</p>
                        <hr/>
                    </div>   
                   ))}
               </div>
        </div>
        
    );
}

export default UsersAgain;
