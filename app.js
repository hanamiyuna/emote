// App
// Dependencies

// Local Packages

const Wolfram = require('./lib/wolfram')
const io = require('./src/io')

// Following by the Wolfram Language using WolframScript
// Dont ask me why I am using WolframScript instead of Wolfram Alpha API
// API cost much on experiment if you are trying lots of computation
// which the price would be free for 2000 montly calls

let compute = new Wolfram()
async function printf() {
    // await compute.formula(`2+2`)
    await compute.graphic("Graphics3D[Sphere[]]")
}

// Initialization
io.folderCheck()
// Run
printf()