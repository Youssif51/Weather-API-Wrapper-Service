const express = require("express");
const dotenv = require("dotenv");
const weatherRoutes = require("./routes/weatherRoute");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Wither API app is runing...')
})

app.use("/weather", weatherRoutes);


app.use(errorHandler);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
