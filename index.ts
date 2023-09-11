import e from "express";

const app = e()

app.get('/', (req, res) => {
    console.time('helloWorld')
    res.status(200).send('Hello world from Bun !')
    console.timeEnd('helloWorld')
})

console.time('serverStart')
app.listen(3000, () => {
    console.log('Server started !')
    console.timeEnd('serverStart')
})