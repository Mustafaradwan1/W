const plan = document.querySelectorAll(".plan  .icon")
const botns = document.querySelectorAll(".botns  button")
const progres = document.querySelector(".plan  .progres")
const forms = document.querySelectorAll(".form-step  .form")
const formStep = document.querySelectorAll(".form-step")
const nexts = document.querySelectorAll(".form-step  .next")
const previous = document.querySelectorAll(".form-step.active  .previous")
let curr = 0;
console.log(nexts)
botns.forEach(ele=>{
    ele.addEventListener("click",()=>{
        botns.forEach(e=>{
            e.classList.remove("active")
    })
        ele.classList.add("active")
        if(ele.getAttribute("value") === "firstForm"){
            formStep[0].classList.add("active")
            formStep[1].classList.remove("active")
            
        }else{
            formStep[1].classList.add("active")
            formStep[0].classList.remove("active")

        }
    })

})

nexts.forEach(btn=>{
    btn.addEventListener("click",()=>{
        curr++
        formsData()
        planDataAdd()
    })
})
previous.forEach(btn=>{
    btn.addEventListener("click",()=>{
        curr--
        formsData()
        planDataRemove()
    })
})

function formsData(){
    forms.forEach(ele=>{
        forms.forEach(ind=>{
            ind.classList.remove("active")
        })
        forms[curr].classList.add("active")
    })
}
function planDataAdd(){
    plan.forEach(ele=>{
        plan[curr].classList.add("step-active")

        let planActive = document.querySelectorAll(".step-active");
        progres.style.width = ((planActive.length -1) / (plan.length -1)) *  100 +"%";
    })
}
function planDataRemove(){
    plan.forEach(ele=>{
        plan[curr + 1].classList.remove("step-active")
        let planActive = document.querySelectorAll(".step-active");
        progres.style.width = ((planActive.length -1) / (plan.length -1)) *  100 +"%";
    })
}