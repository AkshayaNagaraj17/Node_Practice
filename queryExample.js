//creating http server with query params


const express=require ("express")
const app=express()

app.get("/add/:a/:b",function(req,res)
{
    //if we didnt give parse int then it concates
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    res.json(
        {
            Answer : a + b
        }
    )
})
app.get("/subtract",function(req,res)
{
    const a=req.query.a
    const b=req.query.b
    res.json(
        {
            Answer : a - b
        }
    )
})
app.get("/multiply",function(req,res)
{
    const a=req.query.a
    const b=req.query.b
    res.json(
        {
            Answer : a * b
        }
    )
})
app.get("/divide",function(req,res)
{
    const a=req.query.a
    const b=req.query.b
    res.json(
        {
            Answer : a / b
        }
    )
})

app.listen(3005)