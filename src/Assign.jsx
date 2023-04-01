import React, { useState ,useRef} from 'react'

const Assign = () => {

    const [email, setEmail] = useState('');
    const [fistname, setFistname] = useState('');
    const [lastname, setLastname] = useState('');
    const password = useRef();

    const handleSubmit = (e) => {
       e.preventDefault();
        const data = {
            Email: email,
            FistName: fistname,
            LastName: lastname,
            Password:password.current.value
        }
        console.log(JSON.stringify(data));

    }

    const arr = ["first name", "last name", "email"];
    const [array,setArray]=useState([false,false,false]);
  

    const handleClick=(ind)=>{
       
        const newArray =[...array];
        newArray[ind]=!array[ind];
        setArray(newArray);
        // console.log(newArray);
        console.log(array);
       
        



    }


    return (
        <>
            {/* <div className="continaer">
                <form  onSubmit={handleSubmit}>
                    <div>
                        <p>First Name</p>
                        <input
                            type="text"
                            placeholder='Enter you first name'
                            required
                            onChange={(e) => setFistname(e.target.value)} />

                    </div>
                    <div>
                        <p>Last Name</p>

                        <input
                            type="text"
                            placeholder='Enter you name'
                            required
                            onChange={(e) => setLastname(e.target.value)}


                        />

                    </div>
                    <div>
                        <p>Email</p>
                        <input
                            type="email"
                            placeholder='Enter you email'
                            required
                            onChange={(e) => setEmail(e.target.value)}


                        />

                    </div>
                    <div>
                        <p>Password</p>
                        <input
                            type="password"
                            placeholder='Enter you Password'
                            required
                           ref={password}


                        />

                    </div>

                    <input type="submit" />



                </form>
            </div> */}

            <div className="container">
                {arr.map((ele,i)=>{
                    return(
                        <div className='container' key={i}>
                       
                        <input type='checkbox' onClick={()=>handleClick(i)}/>
                        <p>{ele}</p>
                        {(array[i]?"": <button>Delete</button>)}
                       
                        
                        </div>
                    )
                })}
                
            </div>



        </>
    )
}

export default Assign