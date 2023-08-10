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
