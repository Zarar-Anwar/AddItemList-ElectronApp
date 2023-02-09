window.addEventListener("DOMContentLoaded",()=>{

    const {ipcRenderer}=require("electron")
    document.querySelector("form").addEventListener("submit",()=>{
        const text=document.querySelector("input").value
        ipcRenderer.send("send:text",text)
    })

})