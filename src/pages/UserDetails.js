import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetails=()=>{

     const { id } = useParams();
     const [userId,setUserId]=useState(null);

     useEffect(()=>{
        getUserById(id);
     },[]);

     
 
     const getUserById=(id)=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            const findUser=res.data.find((value)=>value.id==id);
            setUserId(findUser);
        }).catch((err)=>{
            console.log(err);
        });
     };

     if(!userId){
        return <p>Loading user details.Please wait!</p>
     }

    return(
        <>
             <div className="d-flex justify-content-center align-items-center">
                           <div className="w-100" style={{ maxWidth: '1200px' }}>

            <h2 style={{textAlign:'center'}}>User Details</h2>
            <table class="table">
              <thead>
                     <tr>
                       <th scope="col">ID</th>
                        <th scope="col">Address(City\Street)</th>
                         <th scope="col">Phone</th>
                         <th scope="col">Website</th>
                     </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                    <td>{userId.id? userId.id:"--"}</td>
                    <td>{userId.address.city? userId.address.city:"--"},
                        {userId.address.street?userId.address.street:"--"}
                    </td>
                    <td>{userId.phone?userId.phone:"--"}</td>
                    <td>{userId.website?userId.website:"--"}</td>

                </tr>
              </tbody>
            </table>
        </div>
        </div>

        </>
    );
};

export default UserDetails;