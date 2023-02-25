const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/foobar.db') // connect to db from hard drive

db.serialize(() => {
  // 1. CREATE TABLE
  db.run(`
    CREATE TABLE IF NOT EXISTS lorem (
      lorem_id INTEGER PRIMARY KEY,
      info TEXT  
    )
  `)

  // 2. INSERT DATA
  const stmt = db.prepare('INSERT INTO lorem VALUES (?, ?)')
  for (let i = 0; i < 10; i++) {
    stmt.run(i + 1, 'Ipsum ' + i)
  }
  stmt.finalize()

  // 3. SELECT DATA
  db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
    console.log(row.id + ': ' + row.info)
  })
})

db.close() // close connection
