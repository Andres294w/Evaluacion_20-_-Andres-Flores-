import mongosee from "mongoose"
import {config}  from "./config.js"
 
mongosee.connect("mongodb://localhost:27017/matricula2026")

const connection = mongosee.connection

connection.once ("open" , () => {
    console.log("DB is connected")
})

connection.on ("disconnected" , () => {
    console.log("DB is disconnected")
})

connection.on ("error" , (error) => {
    console.log("error found" + error)
})
