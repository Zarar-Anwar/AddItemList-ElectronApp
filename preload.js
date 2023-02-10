window.addEventListener("DOMContentLoaded",()=>{
   const {ipcRenderer}=require("electron")

   ipcRenderer.on("send:text",(event,text)=>{
    const li=document.createElement("li")
    const nodetext=document.createTextNode(text)
    li.appendChild(nodetext)
    document.querySelector("ul").appendChild(li)
    ipcRenderer.on("clear:text",()=>{
        document.querySelector("ul").innerHTML=""
    })
   })
})