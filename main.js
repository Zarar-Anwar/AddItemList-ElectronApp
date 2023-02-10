const {app,BrowserWindow,Menu,ipcMain}=require("electron")
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
        height:300,
        width:300,
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
                accelerator:process.platform==="darwin"?"Command+N":"Ctrl+N",
                click:()=>{
                    createWin2()
                }
            },
            {
              label:"Clearing List",
              accelerator:process.platform==="darwin"?"Command+D":"Ctrl+D",
              click:()=>{
                win1.webContents.send("clear:text")
              }
            },
            {
                label:"Quit",
                accelerator:process.platform==="darwin"?"Command+Q":"Ctrl+Q",
                role:"close"
            }
        ]
    }
]

if(process.env.NODE_ENV!=="production")
{
    win1Menu.push({
        label:"Debugging !!!",
        submenu:[
            {
                label:"Toggle Dev Tools",
                accelerator:process.platform==="darwin"?"Command+Shift+I":"Ctrl+Shift+I",
                click:(item,windowSelected)=>{
                   windowSelected.toggleDevTools()
                }
            }
        ]
    })
}

const menu=Menu.buildFromTemplate(win1Menu)
Menu.setApplicationMenu(menu)

// main Event Handle

ipcMain.on("send:text",(event,text)=>{
win1.webContents.send("send:text",text)
})
// App Events Handler

app.whenReady().then(()=>{
    createWin1()
})