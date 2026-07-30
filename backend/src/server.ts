import app from "./app.js"
import { env } from "./config/env.js";

const PORT = Number(env.PORT)

app.listen(PORT, ()=>{
    console.log(`Backend Running on PORT ${PORT}`)
})