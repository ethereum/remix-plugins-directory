# Remix Plugins Directory

This repository hosts a plugins directory.
The directory is used by [Remix IDE](https://remix.ethereum.org) for loading the list of available plugins.

# how to reference a plugin

Simply propose a PR which add a new entry in the `plugins` folder.
This folder should contain at least a `profile.json`:

```
{
  "name": "<name of the plugin>",
  "displayName": "<display name of the plugin>",
  "methods": [], // list of methods that the plugin is making available to other plugins
  "version": "1.0.0-alpha", // semver version
  "url": "<URL>", // can be an https or ipfs URL - ipfs://<ipfs_hash>
  "description": "<description>",
  "icon": "<link to image>", // https link to image or BASE64 value
  "location": "<panel where the plugin should be rendered>" // can be sidePanel, mainPanel or hidden
}
```

The `tools` folder contains utilities that can be used for
 - uploading a single file to IPFS - `upload-single-file`
 - uploading a plugin and generating `profile.json` - `upload-remix-plugin`
 
 For uploading a plugin to IPFS and generating a `profile.json`, execute `./upload-remix-plugin <path to index.html>`
 
 # community
 
 Feel free to join our gitter chat if you have any question
 
  - [Remix Dev](https://gitter.im/ethereum/remix-dev) - Remix IDE development
  - [Remix Plugin Dev](https://gitter.im/ethereum/remix-dev-plugin) - Plugins development
