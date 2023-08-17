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


const Task = require('./models/task')
const User = require('./models/user');

const main = async () => {
  const user = await User.findById('64dc6e70678012ec42d4172f') //id of owner
  await user.populate('tasks')
  console.log(user.tasks)
}
main()