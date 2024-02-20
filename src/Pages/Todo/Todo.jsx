import React, {  useState } from "react";
import axios from "axios";
import UseFetch from "../../Hooks/UseFetch";

export const Todo = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Submit = async (e) => {
    e.preventDefault();

    let { data } = await axios.post("/todoList", {
      name,
      username,
      email,
      password
    });

    datas();


  };


  // const Datas = async (e) => {
  //   let res = await axios.get("/todoList");
  //   let data = res.data
  //   console.log(data);
  // };

  
  let { data, datas } = UseFetch("/todoList");
  const handleDelete = async (id) => {
    await axios.delete(`/todoList/${id}`);
    datas()
  };
  return (
    <div>
      <form onSubmit={Submit}>
        <input onChange={(e) => setName(e.target.value)} type="text" />
        <input onChange={(e) => setUsername(e.target.value)} type="text" />
        <input onChange={(e) => setEmail(e.target.value)} type="email" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
        <button>Add</button>
      </form>
      {data?.map((item) => (
        <div key={item.id} >
          <p>{item.name}</p>
          <p>{item.username}</p>
          <p>{item.email}</p>
          <p>{item.password}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

