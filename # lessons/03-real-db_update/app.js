const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/foobar.db') // connect to db from hard drive

db.serialize(() => {
  // UPDATE
  const updateStmt = db.prepare(`
    UPDATE lorem
    SET info = "ABC"
    WHERE lorem_id = 1
  `)
  updateStmt.run()
  updateStmt.finalize()

  // SELECT
  db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
    console.log(row.id + ': ' + row.info)
  })
})

db.close() // close connection
