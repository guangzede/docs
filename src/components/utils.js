var fs = require('fs')
var path = require('path');
var filePath  = '../../static'
fileDisplay(filePath);
var dirpath = [];
function fileDisplay(filePath){
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            files.forEach(function(filename){
                var filedir = path.join(filePath, filename);
                fs.stat(filedir,function(eror, stats){
                    if(eror){
                        console.warn('咋整的');
                    }else{
                        var isFile = stats.isFile();
                        var isDir = stats.isDirectory();
                        if(isFile&&filename.indexOf('.md')>0){
                            let mdName = '';
                            try {
                                mdName  = filedir.split('.md')[0]
                                console.log( mdName)
                                dirpath.push(mdName)
                            } catch (error) {
                                
                            }
                        }
                        if(isDir){
                            fileDisplay(filedir)
                        }
                    }
                })
            });
        }
    });
}

export const dirpath;