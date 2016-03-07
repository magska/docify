'use strict';
var fs = require('fs');

class Finder {
    constructor(ignoredFiles) {
        this.ignoredFiles = ignoredFiles;
        this.fileEndings = '.md';
        this.basePath = './';
        this.mdFiles = [];
    }
    findFiles() {
        let fileList = this.findFilesInFolder(this.basePath);
        this.fileItterator()
    }
    findFilesInFolder(folder) {
        let fileList = fs.readdirSync(this.basePath);
    }
    fileItterator(fileList, pointer) {

    }
    matchFiles(fileName) {

    }
}