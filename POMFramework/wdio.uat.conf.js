// merge parent conf.js and add new cj=hanges in uat(like baseUrl, timeout)

const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')


exports.config = merge(wdioConf.config,{
    baseUrl:"",
    waitForTimeOut:5000
})