import dotenv from "dotenv"

dotenv.config()

export const config = {
    do:{
        URI:process.env.DB_URI
    },
    JWT:{
        secret:process.env.JWT_Secret_key
    },
    email:{
        user_email:process.env.USER_MAIL,
        user_password:process.env.USER_PASSWORD,
    }
}