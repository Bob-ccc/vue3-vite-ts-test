export const db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
export const add = (table, data) =>{
  db.transaction(function (tx) {
    tx.executeSql(`CREATE TABLE IF NOT EXISTS ${table} (contont, creatTime)`);
    tx.executeSql(`INSERT INTO ${table} (contont, creatTime) VALUES (?, ?)`, [data.contont, data.creatTime]);
  })
}
