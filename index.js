//you either use import or you use common JS
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {"message": "Hello User! Type an URL", "name": "URL"}
    ])
    .then((answers) =>{
        var qrImg = qr.image(answers.URL, {type: "png", size: 10});
        qrImg.pipe(fs.createWriteStream('my_qr.png'));
        fs.writeFile("userURL.txt", answers.URL, (err) => {
            if (err) throw err;
        })
    })
    .catch((error) =>{
        if (error.isTtyError){
            
        } else {
            
        }
    });