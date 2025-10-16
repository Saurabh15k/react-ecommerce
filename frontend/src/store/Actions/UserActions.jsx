import axios from "../../api/AxiosConfig";
import { loaduser } from "../reducers/UserSlice";

export const asyncregisteruser=(user)=>async(dispatch,getState)=>{
    try{
        const res=await axios.post('/users',user)
        console.log(res)
    }catch(err){
        console.log(err)
    }
};

export const asyncloginuser=(user)=>async(dispatch,getState)=>{
    try {
        const {data}=await axios.get(`/users?email=${user.email}&password=${user.password}`)
        localStorage.setItem("user",JSON.stringify(data[0]))
    } catch (error) {
        console.log(error)
    }
};

export const asynclogoutuser=()=>async(dispatch,getState)=>{
    try{
        localStorage.removeItem("user")
    }
    catch(err){
        console.log(err)
    }
}

export const asynccurrentuser=(user)=>async(dispatch,getState)=>{
    try {
        const user=JSON.parse(localStorage.getItem("user"))
        if(user) dispatch(loaduser(user))
        else console.log("no user found")
    } catch (error) {
        console.log(error)
    }
};
