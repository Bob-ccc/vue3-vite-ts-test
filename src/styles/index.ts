
const themes:any = []
const themesFiles = import.meta.globEager("./themes/*.ts")


for (const key in themesFiles) {
  if (Object.prototype.hasOwnProperty.call(themesFiles, key)) {
    themes.push(themesFiles[key].default)
    // themes.push(key.replace(/(\.\/themes\/|\.ts)/g, ''))
    // themes[key.replace(/(\.\/themes\/|\.ts)/g, '')] = themesFiles[key].default;
  }
}

themes.sort((a:any,b:any) => {
  return a.index - b.index
})


export default themes
