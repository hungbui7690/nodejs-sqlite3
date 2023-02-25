const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/foobar.db') // connect to db from hard drive

db.serialize(() => {
  // DELETE
  const deleteStmt = db.prepare(`
  DELETE FROM lorem
  WHERE lorem_id = 2
`)
  deleteStmt.run()
  deleteStmt.finalize()

  // SELECT
  db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
    console.log(row.id + ': ' + row.info)
  })
})

db.close() // close connection
