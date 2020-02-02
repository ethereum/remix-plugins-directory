import * as fs from 'fs-extra';

const buildProfiles = () => {
  return new Promise((resolve, reject) => {
    try {
      const path = './plugins'
      fs.readdir(path, async (error, files) => {
        if (error) return reject(error)
        console.log('profiles', files)
        try {
          const profilesPromises = files.map(async (path) => {
            const jsonProfile: any = await readFile(`./plugins/${path}/profile.json`)
            return JSON.parse(jsonProfile)
          })
          const profiles = await Promise.all(profilesPromises)
          console.log('built', JSON.stringify(profiles, null, '\t'))
          resolve(profiles) 
        } catch (e) {
          reject(e)
        }             
      })
    } catch (e) {
      reject(e)
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
console.log('pull request', process.env.CIRCLE_PULL_REQUEST)

async function run () {
  const profiles = await buildProfiles()
  if (process.env.CIRCLE_BRANCH === 'master' && process.env.CIRCLE_PULL_REQUEST) {
    const target = `./build/metadata.json`
    fs.writeFile(target, JSON.stringify(profiles, null, '\t'), 'utf8', (error) => { 
      if (error) return console.error(error)
      console.log('done', target)
    })    
  }
}

run()