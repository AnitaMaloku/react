import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddUser from './AddUser';



const User=()=>{
    const [user,setUser]=useState([]);
    const [search,setSearch]=useState({
        search:""
    });

    useEffect(()=>{
        getUser();
    },[]);

    const handleChange=(e)=>{
        setSearch({...search,[e.target.name]:e.target.value});
    };


     const filteredUsers = user.filter((u) =>
        u.name.toLowerCase().includes(search.search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.search.toLowerCase())
    );

    const getUser=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUser(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    };

    return(
        <>
        
         <div className="d-flex justify-content-center align-items-center">
            
             <div className="w-100" style={{ maxWidth: '1200px' }}>
            <h1 style={{textAlign:"center"}}>User Info</h1>
            <div className="mb-3">
              <input type="text" className="form-control" id="formGroupExampleInput" name='search' value={search.search} onChange={handleChange} placeholder='Search by Name or Email'  />
            </div>

          <table className="table table-hover">
             <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Company</th>
                  <th>Details</th>
     

                </tr>
            </thead>
            <tbody>
            {filteredUsers.map((value)=>{
                return(
                    
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.company?.name || "--"}</td>   
                        <td>
                            <Link to={`/userDetails/${value.id}`}>
                             <button type="button" className="btn btn-info">Details</button>
                            </Link>
                        </td>            

                    </tr>
                    
                );
            })}
             </tbody>
          </table>
          <AddUser user={user} setUser={setUser}/>
          </div>
         </div>
        </>
    );
};

export default User;