const express = require('express');
require('./db/mongoose');
const useRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use(useRouter)
app.use(taskRouter)

app.listen(3000, () => {
  console.log('server is up on port', + port)
})


const jwt = require('jsonwebtoken')
const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {expiresIn: '0 seconds'})
//   console.log(token)

//  const data =  jwt.verify(token, 'thisismynewcourse');
//  console.log(data)
}

myFunction()