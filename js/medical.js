let btns = document.querySelectorAll(".botns button")
let q = document.querySelectorAll(".questions")
let curr = 0;
let next = document.querySelectorAll(".next")
let icon = document.querySelectorAll(".boxIcon .icon")
const progres = document.querySelector(".progres")
let lopdata = document.querySelectorAll(".lopdata")

btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        btns.forEach(ele=>{
            ele.classList.remove("active")
        })
        btn.classList.add("active")
        q.forEach(ele=>{
            if(btn.id === ele.id){
                ele.style.display = "block"
            }else{
                ele.style.display = "none"
            }
        })

    })
})
next.forEach(btn=>{
    btn.addEventListener("click",function(){
        curr++
        planDataAdd()
        lop()
    })
})
function planDataAdd(){
    icon.forEach(ele=>{
        icon[curr].classList.add("active")
        let planActive = document.querySelectorAll(".boxIcon .icon.active");
        progres.style.width = ((planActive.length -1) / (icon.length -1)) *  100 +"%";
    })
}
function lop(){
    lopdata.forEach(ele=>{
        lopdata.forEach(ele=>{
            ele.classList.remove("active")
        })
    })
    lopdata[curr].classList.add("active")

    
}

