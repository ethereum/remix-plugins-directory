import * as fs from 'fs-extra';

const buildProfiles = async () => {
  const path = './plugins'
  fs.readdir(path, async (error, files) => {
    if (error) return console.error(error)
    console.log('profiles', files)
    const profilesPromises = files.map(async (path) => {
      const jsonProfile: any = await readFile(`./plugins/${path}/profile.json`)
      return JSON.parse(jsonProfile)
    })
    const profiles = await Promise.all(profilesPromises)
    console.log('built', JSON.stringify(profiles, null, '\t'))

    if (process.env.CIRCLE_BRANCH === 'master') {
      const target = `./build/metadata.json`
      fs.writeFile(target, JSON.stringify(profiles, null, '\t'), 'utf8', (error) => { 
        if (error) return console.error(error)
        console.log('done', target)
      })
    }
  })
}

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      error ? reject(error) : resolve(data)
    })  
  })
}

console.log('branch', process.env.CIRCLE_BRANCH)
buildProfiles()