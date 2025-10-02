import { useState } from "react";

const AddUser=({user,setUser})=>{

    const [data,setData]=useState({
        name:"",
        email:""
    });
    const handleForm=(e)=>{
        e.preventDefault();
        setUser([data,...user]);
        setData({
            name:"",
            email:""
        });
    
    };

    const handlChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };
    return(
        <>
         <div className="d-flex justify-content-center align-items-center">
            
             <div className="w-100 p-4" 
             style={{ maxWidth: '500px',
                 borderRadius:'10px',
                 boxShadow:'0 4px 15px rgba(0,0,0,0.1)',
                 backgroundColor:"#fff",

              }}>
                <h1 style={{textAlign:"center"}}>Add User</h1>
                <form onSubmit={handleForm}>
                    <div className="mb-3">
                       <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                       <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" name='name' value={data.name} required onChange={handlChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" name='email' value={data.email} required onChange={handlChange}/>
                    </div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <button type="submit" className="btn btn-primary">Add User</button>
                    </div>

                </form>
                

             </div>
             </div>
        </>
    );
};

export default AddUser;