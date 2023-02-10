window.addEventListener("DOMContentsLoaded",()=>{
   const {ipcRenderer}=require("electron")

   ipcRenderer.on("send:text",(event,text)=>{
    const li=document.createElement("li")
    const nodetext=document.createTextNode(text)
    li.appendChild(nodetext)
    const ul=document.querySelector("ul")
    ul.appendChild(li)
    
   })
})