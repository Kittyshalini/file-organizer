import fs from "fs";
import path, { extname } from "path"

const base_path = "" // put your path where you have all the files

const files = fs.readdirSync(base_path)

for(let i=0; i<files.length;i++){
    let ext = extname(files[i])
    if(fs.existsSync(ext)){
        fs.renameSync(path.join(base_path,files[i]),path.join(ext,files[i]))
    } else {
        fs.mkdirSync(ext)
        fs.renameSync(path.join(base_path,files[i]),path.join(ext,files[i]))
    }

}
