const inquirer = require('inquirer')
const semver = require('semver')
const isUrl = require('is-url')
const isBase64 = require('is-base64')

module.exports = async () => {
  let answers = await inquirer.prompt(questions)
  answers.methods = answers.methods ? answers.methods.split(',') : []
  answers.events = answers.events ? answers.events.split(',') : []
  return answers
}

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "plugin name"
  },
  {
    type: 'input',
    name: 'displayName',
    message: "plugin display name"
  },
  {
    type: 'input',
    name: 'description',
    message: "(optional) Description of this plugin"
  },
  {
    type: 'input',
    name: 'version',
    message: "version number (semver)",
    validate: function(value, answers, flags) {
      if (!semver.valid(value)) return 'not semver: ' + value
      return true
    }
  },
  {
    type: 'input',
    name: 'events',
    message: "(optional) Comma separated list of all the events that this plugin is triggering",
  },
  {
    type: 'input',
    name: 'methods',
    message: "(optional) Comma separated list of all the functions that this plugin is triggering",
    transformer: function(methods, answers, flags) {
      return methods ? methods.split(',') : []
    }
  },
  {
    type: 'list',
    name: 'kind',
    choices: ['compiler', 'editor', 'network', 'filesystem', 'udapp', 'none'],
    message: "Type of plugin"
  },
  {
    type: 'input',
    name: 'icon',
    message: "icon (url or BASE64 img)",
    validate: function(value, answers, flags) {
      if (isUrl(value) || isBase64(value, {mimeRequired: true, allowEmpty: false})) {
        return true
      }
      return 'value has to be URL or BASE64 value'
    }
  },
  {
    type: 'list',
    name: 'location',
    message: "(optional) plugin location in the user interface. can be or none if the plugin does not have view",
    choices: ["sidepanel", "mainpanel", "none"]
  },
]