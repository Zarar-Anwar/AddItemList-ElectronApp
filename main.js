const {app,BrowserWindow}=require("electron")
const path =require("path")


// declaring varaible for windows

let win1
let win2

// creating Windows

const createWin1=()=>{

    win1=new BrowserWindow({
        height:600,
        width:600,
        webPreferences:{
            preload:path.join(__dirname,"preload.js")
        }
    })
    
}

const createWin2=()=>{
    win2=new BrowserWindow({
        height:600,
        width:600,
        webPreferences:{
            preload:path.join(__dirname,"addPreload.js")
        }
    })

}