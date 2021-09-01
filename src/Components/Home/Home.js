import "./styles.css";
import GraphInput from "../GraphInput/GraphInput"
import GraphTable from "../GraphTable/GraphTable"
import Button from '../Button/Button'
import { useState,useEffect} from "react";
function localStore(){
  let local=JSON.parse(localStorage.getItem("tasks"))
  return local
}
const Home=()=>{
  const [inputData,setInputData] = useState([])
  const [titleName,setTitleName] = useState("")
  const [local,setLocal] = useState(localStore())
  
  useEffect(()=>{
    if(titleName.length>0){
      if (localStorage.getItem("tasks") === null) {
      var tasks = [];
      tasks.push(inputData);
      localStorage.setItem("tasks", JSON.stringify(tasks));
 } else {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.push(inputData);
      localStorage.setItem("tasks", JSON.stringify(tasks));
 }
  setLocal(localStore())
}
 },[titleName])
 useEffect(()=>{
   console.log(local)
 },[local])


  const submitHandler=(title,data)=>{
    console.log(title,data)
    if (title === "" || data === "") {
      return alert("please fill all the fields");
    }else{
      setInputData({taskId:title,data:data})
      setTitleName(title)
      //addHandler()
    }
  }
  const deleteHandler=(id)=>{
      for (let i = 0; i < local.length; i++) {
        if (local[i].taskId === id) {
          local.splice(i, 1);
        }
      } 
      localStorage.setItem("tasks", JSON.stringify(local));
      setLocal(localStore())
      console.log("hello ")
    
  }
  const clearAll=()=>{
    localStorage.setItem("tasks",JSON.stringify([]))
    setLocal(localStore())
  }
  return (
    
     <div className="main">
       <GraphInput submitHandler={submitHandler}/>
       <GraphTable localStorage={local} deleteHandler={deleteHandler}/>
       <div className="root-button">
         <button onClick={clearAll}>Clear data</button>
         <Button value="Show Graph" linkedTo="/graph"/>
       </div>
     </div>
    
  );
}
export default Home