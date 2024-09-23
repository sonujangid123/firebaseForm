// import { getDatabase } from "firebase/database";
// import React, { useState } from "react";

// const db = getDatabase(App);

// function MyForm() {
//   const Submit = ()=>{

    


//   }
  

//   return (
//     <form >
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
         
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
         
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="email"
         
//         />
//       </div>
//       <div>
//         <label>Message:</label>
//         <textarea
//           name="message"
         
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;

















import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkCs8BCIBCA9MpuuY4IXewFCv_7DYp3Uc",
  authDomain: "fir-first-c1c55.firebaseapp.com",
  projectId: "fir-first-c1c55",
  storageBucket: "fir-first-c1c55.appspot.com",
  messagingSenderId: "547296657352",
  appId: "1:547296657352:web:dec72f3f53cc14c8898afd",
  databaseURL:"https://fir-first-c1c55-default-rtdb.firebaseio.com/"
};




const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [massage, setMassage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const usersRef = ref(database, 'users');
    
    push(usersRef, {
      name: name,
      email: email,
      password: password,
      massage: massage
    })
    .then(() => {
      alert("Data saved successfully!");
      setName('');
      setEmail('')
      setPassword('')
      setMassage('')
    })
    .catch((error) => {
      console.error("Error saving data: ", error);
    });
  }

  return (
        <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          // name="name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name" 
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          // name="email"
          value={email}

          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your Email" 
         
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          // name="email"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your Password" 
         
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          // name="message"
          value={massage}
          onChange={(e) =>  setMassage(e.target.value)} 
          placeholder="Enter your Massage" 
         
        />
      </div>
      <button type="submit">Submit</button>
    </form>



   
  );
}

export default App;
