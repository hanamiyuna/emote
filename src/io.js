const fs = require('fs')

const _CacheDir = __dirname.replace("src", "") + "cache"

let io = {
    folderCheck: function () {
        if (!fs.existsSync(_CacheDir)){
            fs.mkdirSync(_CacheDir);
        }
    }
}

io.folderCheck()

module.exports = io