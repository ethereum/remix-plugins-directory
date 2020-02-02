import * as fs from 'fs-extra'
import * as util from 'util'
import * as child_process from 'child_process'
const promisifyExec = util.promisify(child_process.exec)

const buildProfiles = () => {
  return new Promise((resolve, reject) => {
    try {
      const path = './plugins'
      fs.readdir(path, async (error, files) => {
        if (error) return reject(error)
        console.log('profiles', files)
        try {
          const profilesPromises = files.map(async (path) => {
            try {
              const jsonProfile: any = await readFile(`./plugins/${path}/profile.json`)
              return JSON.parse(jsonProfile)
            } catch (e) {
              reject(e)
            }
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
  try {
    const profiles = await buildProfiles()
    if (process.env.CIRCLE_BRANCH === 'master') {
      const target = `./build/metadata.json`
      const profileAsString = JSON.stringify(profiles, null, '\t')
      const currentMetadata = await readFile(`./build/metadata.json`)
      // check if we need to update it
      if (!currentMetadata || currentMetadata !== profileAsString) {
        console.log('building and pushing metadata.json')
        fs.writeFile(target, profileAsString, 'utf8', async (error) => { 
          if (error) return console.error(error)
          console.log('done', target)
          await promisifyExec('git add ./build/metadata.json')
          await promisifyExec('git commit -m "Built profiles from {$SHA}." --allow-empty')
          await promisifyExec('git push origin master')
        })    
      } else console.log('no need to rebuild metadata.json')
    }
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

run()