export const initIndexedDb = (data:any) => {
  const { databaseName,version } = data
  return window.indexedDB.open( databaseName, version );
}