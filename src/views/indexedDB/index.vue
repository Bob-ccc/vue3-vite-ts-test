<template>
  <div class="indexed-db">
    indexedDb数据库
    <div class="db-table">
      <div class="table-item" v-for="(item,index) in list" :key="index">
        {{ item.title }} ==> {{ item.content }}
      </div>
    </div>
    <div >
      <div class="rounded-10px w-300px m-5px p-10px bg-blue-500">
        <span class="inline-block w-80px">title: </span>
        <input class="rounded-5px p-5px bg-blue-300 border-2 border-blue-300 hover:border-light-500" type="text" v-model="title">
      </div>
      <div class="rounded-10px w-300px m-5px p-10px bg-blue-500">
        <span class="inline-block w-80px">content: </span>
        <input class="rounded-5px p-5px bg-blue-300 border-2 border-blue-300 hover:border-light-500"  type="text" v-model="content">
      </div >
      <button class="rounded-10px w-200px m-5px p-10px bg-blue-500 hover:(bg-red-500 text-light-500)" @click="addTitle">增加</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { initIndexedDb } from "@/utils/indexeddb"
import { ref,reactive,onMounted,onBeforeMount } from 'vue'

const dbRequest = reactive({db:null}) // db:数据库
const title = ref(null)
const content = ref(null)
const list = reactive([])

const addTitle = async() =>{
  if(!title.value) {
    alert("请输入title") 
    return
  }
  const data = { title: title.value, content: content.value }
  await add('test',data)
  readAll('test')
}



/**
 * @description 库表数据插入
 * @param {string} name 库表名称
 * @param {Object} data 插入内容
 * @return Promise
 */
const add = (name:string,data:Object) => {
  return new Promise((resolve,resject)=>{
    
  const request = dbRequest.db.transaction([name], 'readwrite')
    .objectStore(name)
    .add(data);

  request.onsuccess = (event:any) => {
    console.log('数据写入成功');
    resolve(event)
  };

  request.onerror = (event:any) => {
    console.log('数据写入失败');
    resject(event)
  }
  })
}

/**
 * @description 库表数据读取全部
 * @param {string} name 库表名称
 */
const readAll = (name:string) => {
  list.length = 0
  const objectStore = dbRequest.db.transaction(name).objectStore(name);
  objectStore.openCursor().onsuccess = (event:any) => {
     const cursor = event.target.result;
     if (cursor) {
       list.push(cursor.value)
       cursor.continue();
       console.log(cursor);
       console.log(list);
       
    } else {
      console.log('没有更多数据了！');
    }
  };
}




/**
 * @description 数据库初始化
 * @param {string} databaseName 库名
 * @param {number} version 版本号：默认为1
 * @return Promise
 */
const initDb = (databaseName:string = 'myDb',version:number = 1) => {
  return new Promise((resolve,reject)=>{

    // 保存数据库对象
    const request = initIndexedDb({databaseName,version})

    // 数据库连接成功
    request.onsuccess = (event:any) => {
      const result = event.target.result
      dbRequest.db = result // 保存数据库 
      console.log(dbRequest.db);
      
      console.log(`数据库${result.name}连接成功,版本号为${result.version}`);
    }

    // 数据库创建/更新成功
    request.onupgradeneeded = (event:any) => {
      const result = event.target ? event.target.result : event.result
      resolve(result)
      console.log(`数据库${result.name}${result.version === 1?'创建':'更新'}成功,版本号为${result.version}`);
    }

    // 数据库连接错误
    request.onerror = (event:any) => {
      reject(event)
      console.log('数据库连接失败');
    }

  })
}

/**
 * @description 创建库表
 * @param {Any} db 数据库实体
 * @param {String} name 表名
 * @param {Object} option 配置项: { keyPath: 主键名 }  / 默认自动生成主键 
 * @return void
 */
const creatTable = (db:any,name:string,option = { autoIncrement: true } ) => {
  let objectStore;
  if (!db.objectStoreNames.contains(name)) {
    objectStore = db.createObjectStore(name, option);
  }
  objectStore.createIndex('title', 'title', { unique: false });
}

/**
 * @description 数据库连接与建表
 */
onBeforeMount(()=>{
  initDb('myDb').then(db=>{
    creatTable(db,'test')
  })
})


/**
 * @description 数据初始化
 */
onMounted(()=>{
  setTimeout(() => {
    readAll('test')
  }, 2000);
})


</script>

<style lang="scss" scoped>
.indexed-db{
  .db-table{
    margin: 20px;
    .table-item{
      padding: 10px;
      border: 1px solid #ddd;
    }
  }
}
</style>