import { Elysia } from "elysia";

const app = new Elysia()

app.get('/', () => {
    console.time('helloWorld')
    return 'Hello world from Elysia !'
}, {
    afterHandle: () => console.timeEnd('helloWorld')
})

console.time('server')
app.listen(3000, () => {
    console.log('Server started !')
    console.timeEnd('server')
})