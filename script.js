// totop_btn 
window.onscroll = function() {totop_btn()};
function totop_btn() {
    if (document.documentElement.scrollTop > 1000) {
      document.getElementById("totop_btn").className = "totop_btn_act";
    } else {
      document.getElementById("totop_btn").className = "totop_btn_non_act";
    }
  }


let btn = 1
function funcBtn(btnWchPress){
    // console.log(btnWchPress)
    let btn1 = document.getElementById ("btnSl1") 
    let btn2 = document.getElementById ("btnSl2")
    let btn3 = document.getElementById ("btnSl3")
    let com1 = document.getElementById ("coment1")
    let com2 = document.getElementById ("coment2")
    let com3 = document.getElementById ("coment3")
    if (btnWchPress==1 ){
        // console.log(1)
        //com1.style.opacity = 0
        com1.setAttribute("class","active")
        com2.setAttribute("class","off")
        com3.setAttribute("class","off")
        btn1.innerHTML= '<img src="img\\home 1.png" alt="home btn" >'
        btn2.innerHTML= '<div class="crclBtn"></div>'
        btn3.innerHTML= '<div class="crclBtn"></div>'
        btn = 1
    }
    if (btnWchPress==2 ){
        // console.log(2)
        //com2.style.opacity = 0
        com1.setAttribute("class","off")
        com2.setAttribute("class","active")
        com3.setAttribute("class","off")
        btn1.innerHTML= '<div class="crclBtn"></div>'
        btn2.innerHTML= '<img src="img\\home 1.png" alt="home btn" >'
        btn3.innerHTML= '<div class="crclBtn"></div>'
        btn = 2
    }
    if (btnWchPress==3 ){
        // console.log(3)
        //com3.style.opacity = 0
        com1.setAttribute("class","off")
        com2.setAttribute("class","off")
        com3.setAttribute("class","active")
        btn1.innerHTML= '<div class="crclBtn"></div>'
        btn2.innerHTML= '<div class="crclBtn"></div>'
        btn3.innerHTML= '<img src="img\\home 1.png" alt="home btn" >'
        btn = 3
    }
    
}

setInterval(()=>{funcBtn(btn); btn++; btn==4? btn=1: null}, 5000
)