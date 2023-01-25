import { useEffect, useState } from "react"
import React from "react"
import { API_BASE_URL } from "../api/endPoint";
import axios from "axios";

function getclient(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}client`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
    //   <p>UseEffect!</p>;
}
function getproject(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}projectFill`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getvendor(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}vendor`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getsolutions(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}solution`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getrepresentative(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}representative`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getaddress(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}address`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getcontact(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}contact`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}


function getemail(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}email`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}

export default {
    getclient,
    getproject,
    getvendor,
    getrepresentative,
    getsolutions,
    getaddress,
    getcontact,
    getsolutions,
    // getContactRole,
    getemail,

}
