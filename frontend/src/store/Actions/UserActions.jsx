import axios from "../../api/AxiosConfig";
import { loaduser, removeuser } from "../reducers/UserSlice";

export const asyncregisteruser=(user)=>async(dispatch,getState)=>{
    try{
        await axios.post('/users',user)
        dispatch(asynccurrentuser())
    }catch(err){
        console.log(err)
    }
};

export const asyncloginuser=(user)=>async(dispatch,getState)=>{
    try {
        const {data}=await axios.get(`/users?email=${user.email}&password=${user.password}`)
        localStorage.setItem("user",JSON.stringify(data[0]))
        dispatch(asynccurrentuser())
    } catch (error) {
        console.log(error)
    }
};

export const asynclogoutuser=()=>async(dispatch,getState)=>{
    try{
        localStorage.removeItem("user")
        dispatch(removeuser())
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

export const asyncupdateuser=(id,user)=>async(dispatch,getState)=>{
    try {
        const {data}=await axios.put("/users/"+id,user)
        localStorage.setItem("user",JSON.stringify(data))
        dispatch(loaduser())
    } catch (error) {
        console.log(error)
    }
}

export const asyncdeleteuser=(id)=>async(dispatch,getState)=>{
    try {
        await axios.delete("/users/"+id)
        dispatch(asynclogoutuser())
    } catch (error) {
        console.log(error)
    }
}