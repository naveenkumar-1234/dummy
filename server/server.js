import express from 'express'
import mysql from 'mysql2'


//Initializing
const app=express()
app.use(express.json())

//DataBase connection creation
const dataBase = mysql.createConnection({
  host:'db4free.net',
  user:'naveen1234',
  password:'mr.stark',
  database:'naveen1234'
})

//DataBase connection
dataBase.connect((err,res)=>{
  if(err)
   console.log("Error occured in DB connection")
  else
  console.log("\n🔗--------DataBase connected--------🔗")
})

//METHOD : GET

app.get('/api/data',(req,res)=>{
  const sqlStatement='SELECT * FROM books;'
  dataBase.query(sqlStatement,(error,result)=>{
    if(error)
     console.log("Cant fetch data from database")
    else
     res.json(result)
  })
})

//METHOD : POST

app.post('/api/insert',(req,res)=>{
   const sqlStatement='insert into books (bookName,bookAuthor) values (?);'
  //  const value=[
  //   req.body.bookName,
  //   req.body.bookAuthor
  //  ]
   dataBase.query(sqlStatement
    // ,[value]
    
    ,(error,result)=>{
    if(error)
     console.log("Data insertion failed")
    else
     res.send("Inserted successfully")
   })
})


//Port listening
app.listen('8080',(err)=>{
  if(err)
    console.log("Can't listen port")
  else
    console.log("\n------Port listening at 8080-----")
})