# nodejs-sqlite3

Using sqlite3 as a database in NodeJS

## DB Script

Run this script to create sample database

```sql
CREATE TABLE "cats" (
	"cat_id"	INTEGER,
  "name"	TEXT,
	"age"	INTEGER,
	PRIMARY KEY("cat_id" AUTOINCREMENT)
);

INSERT INTO cats
VALUES
	(1, 'jun', 4),
	(2, 'aug', 2);
```
