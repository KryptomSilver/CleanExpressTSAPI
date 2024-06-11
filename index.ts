import app from "./src/app";

const PORT = process.env.APP_PORT || 3000

app.listen(PORT, () => {
  console.log(`Server start in port ${PORT}`)
})
