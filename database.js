import mongosee from "mongoose"
import config  from "./config.js"
 
mongosee.connect(config.db.URI)

const connection = mongosee.connection

connection.onde ("open" , () => {
    console.log("DB is connected")
})

connection.on ("disconnected" , () => {
    console.log("DB is disconnected")
})

connection.on ("error" , (error) => {
    console.log("error found" + error)
})
