// Dependencies

const util = require('util')
const exec = util.promisify(require('child_process').exec)
const spawn = util.promisify(require('child_process').spawn)
const fs = require('fs')

// WolframScript Command
const wscode = "wolframscript -code"

class Wolfram {
    constructor() {
        this.exec
    }
    /**
     * Regular execution of Wolfram Language
     * @param {WolframLanguage} expression    - The expression of formula
     * @return                                - The result of Wolfram Compute
     */
    async formula(expression) {
        return await Execute.formula(expression)
    }
    /**
     * Graphic execution of Wolfram Language
     * @param {WolframLanguage} expression    - The expression of command
     * @param {string} format                 - The format needed to be output
     * @param {string} location               - The location of the outputing file
     * @return                                - The standard output of image
     */
    async graphic(expression, format, location) {
        return await Execute.graphic(expression, format, location)
    }
}

let Execute = {
    formula: async function (formula) {
        let result
        exec(`${wscode} ${formula}`, function callback(error, stdout, stderr) {
            result = stdout
        })
        return result
    },
    graphic: async function (expression, format = "PNG", location = __dirname.toString().replace("lib", "") + "cache/") {
        let result
        // Set the location with prefix of directory
        location = location + new Date().toISOString().replace("T", "").replace(/-{0,}/gi, "").replace(/:{0,}/gi, "").slice(0, 14) + "." + format.toLowerCase()
        // Get the image from Wolfram Script
        exec(`wolframscript -code '${expression}' -format ${format} > ${location}`).then(async (res) => {
            console.log(`Graphic image of`,`${expression}`, `saved to ${location}`, 'successfully!')
            
        })
        return result
    }
}

module.exports = Wolfram
module.exports.default = Wolfram