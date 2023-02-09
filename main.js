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
    win1.loadFile("index.html")
}

const createWin2=()=>{
    win2=new BrowserWindow({
        height:600,
        width:600,
        webPreferences:{
            preload:path.join(__dirname,"addPreload.js")
        }
    })
    win2.loadFile("add.html")

}

// Creating Menu

const win1Menu=[
    {
        label:"File",
        submenu:[
            {
                label:"Add Item",
                click:()=>{
                    createWin2()
                }
            },
            {
              label:"Clearing List"
            },
            {
                label:"Quit",
                role:"close"
            }
        ]
    }
]



// App Events Handler

app.once("ready",()=>{
    createWin1()
})