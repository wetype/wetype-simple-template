const through = require('through2')
const fs = require('fs')
const Path = require('path')

module.exports = function rewrite(options) {

    return through.obj((file, enc, cb) => {
        let { path, contents } = file
        let content = String(contents)
        let compiled = rewriteReq(content, path)
        file.contents = new Buffer(compiled)
        cb(null, file)
    })

}


function rewriteReq(content, path) {
    return content.replace(/([var|const])\s(.+?)\s=\srequire\("(.+?)"\);/g, (match, dec, varName, moduleName) => {
        if (/\.\//.test(moduleName)) {
            return match
        }
        let modulePath = `${process.cwd()}/dist/modules/${moduleName}`
        let relativePath = Path.relative(path, modulePath).replace('../', '')
        return `${dec} ${varName} = require('${relativePath}');`
    })
}