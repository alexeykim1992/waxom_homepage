const fileSystem = require('fs'),
    path = './gulp/tasks',
    arrayPathFills = fileSystem.readdirSync(path).map(cell => cell = path + '/' + cell)
    module.exports = arrayPathFills