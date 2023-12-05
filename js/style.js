
    $(document).ready(function(){
      $('.your-class').slick({
          autoplay:true,
          vertical:true,
      });
    });
    $(document).ready(function(){
      $('.blog-slider').slick({
          autoplay:true,
          dots: true,
          speed: 1000,
          slidesToShow: 1,
          centerMode: true,
          // variableWidth: true
        });
    });


    let up = document.querySelector(".up");
    up.onclick = function(){
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      })
    }


   let botns = document.querySelectorAll(".botns button");
   let btn = document.querySelectorAll(".form-step button");
   let formstep = document.querySelectorAll(".form-step")
   let plan = document.querySelectorAll(".plan div")
   let curr =0;
   botns.forEach(btn => {
     btn.addEventListener("click", () => {
       btn.classList.add("active")
      })
      btn.classList.remove("active")
   })


   btn.forEach(btn => {
    btn.addEventListener("click", ()=>{
      curr++
      formstepall()
      planprog()
    })
   })
   function formstepall(){
     formstep.forEach(form =>{
      form.classList.remove("active")
    })
    formstep[curr].classList.add("active")
   }
   function planprog(){
    plan.forEach(prog =>{
      // prog.classList.remove("active")
    })
    plan[curr].classList.add("active")
   }


