<template>
    <Layout />
</template>

<script setup>
import Layout from '@/layout/index.vue';
name: 'App'

// db.transaction(function (tx) {
//   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS1 (id unique, log)');
//   tx.executeSql('INSERT INTO LOGS1 (id, log) VALUES (1, "菜鸟教程1")');
// })
// db.transaction(function (tx) {
//   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS2 (id unique, log)');
//   tx.executeSql('INSERT INTO LOGS2 (id, log) VALUES (2, "菜鸟教程3")');
// })
// db.transaction(function (tx) {
//   console.log('tx',tx);
//   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
//   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
  // tx.executeSql('INSERT INTO LOGS (id,log) VALUES (?, ?)', [e_id, e_log]); //使用外部变量，执行时会将变量数组中的值依次替换前边的问号位置
  //   tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) { 
  //       var len = results.rows.length, i; msg = "<p>查询记录条数: " + len + "</p>"; document.querySelector('#status').innerHTML += msg; for (i = 0; i < len; i++){ msg = "<p><b>" + results.rows.item(i).log + "</b></p>"; document.querySelector('#status').innerHTML += msg; } 
  //   }, null); //查询和回调
  // tx.executeSql('DELETE FROM LOGS  WHERE id=1'); //删除
  // tx.executeSql('DELETE FROM LOGS WHERE id=?', [id]);
  // tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cc\' WHERE id=2'); //更新
  // tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cc\' WHERE id=?', [id]);
// });

</script>

<style lang="scss">
#app{
  font-size: 12px;
}
</style>
