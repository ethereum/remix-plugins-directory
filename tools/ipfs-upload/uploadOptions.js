const inquirer = require('inquirer')
const semver = require('semver')
const isUrl = require('is-url')
const isBase64 = require('is-base64')


let questions = [
  {
    type: 'input',
    name: 'pluginPath',
    message: "plugin path",
  },
  {
    type: 'input',
    name: 'profilePath',
    message: "path to profile.json"
  },
  {
    type: 'input',
    name: 'host',
    message: "ipfs host",
  },
  {
    type: 'input',
    name: 'port',
    message: "ipfs host port"
  },
  {
    type: 'input',
    name: 'protocol',
    message: "ipfs host protocol"
  }
]


module.exports = {
  run: async (defaults) => {
    questions.map((val)=>{
      val.default = String(defaults[val.name])
    })
    let result = await inquirer.prompt(questions)
    return result
  }
}
