/*
  For memory database:
  - everytime, we need to create new db, table, and insert data 
*/

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:') // create memory database > open connection

// serialize data
db.serialize(() => {
  // 1. create table
  db.run('CREATE TABLE lorem (info TEXT)')

  // 2. insert data into table
  const stmt = db.prepare('INSERT INTO lorem VALUES (?)')
  for (let i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i)
  }
  stmt.finalize()

  // 3. select data
  db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
    console.log(row.id + ': ' + row.info)
  })
})

db.close() // close connection
