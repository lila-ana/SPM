import { useEffect, useState } from "react"
import React from "react"
import { API_BASE_URL } from "../api/endPoint";
import axios from "axios";

function getclient(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}client/all-clients`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getproject(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}project/all-projects`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getvendor(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}vendor/all-vendors`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getsolutions(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}solution/all-solutions`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getrepresentative(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}representative/all-representatives`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getaddress(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}address/all-address`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getcontact(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}contact/all-contacts`)
        .then(res => setData(res.data?.data))
        .catch(err => console.log(err))
      })
      return data;
}
function getposition(){
    const [data,setData]=useState();
    useEffect(() => {
        axios.get(`${API_BASE_URL}position/all-positions`)
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
    getposition,
    getcontact,
}