var plus = document.getElementsByClassName("plus")
var plus1 = document.querySelector(".plus")
var X = document.querySelector(".X")
function callDis() {
    document.querySelector(".dialogBox").style.display = "none";
}
  
    
    
    // function minimize(e) {
        
    //     var box = e.target.closest(".dialogBox")
    //      document.querySelector(".dialogBox").style.display = "none";
    // }
     
  

  function addDelete(){
    var delBtn = document.querySelectorAll(".item-3.but")
    var mini = document.querySelectorAll(".item-2.but")
      function minimize(e){
          var box = e.target.closest(".box")
          if (box.querySelector("main").style.display !== "none") {
            // box.querySelector("main").style.display = "none"
            box.querySelector("main").style.width = 0;
          }else{
            box.querySelector("main").style.display = "block"
          }
      }
      function deleteItem(e){
        var box = e.target.closest(".box")
          box.style.display = "none" 
    }
      for (let index = 0; index < delBtn.length; index++) {
        delBtn[index].addEventListener("click", deleteItem)
     
    }
    for (let index = 0; index < mini.length; index++) {
        mini[index].addEventListener("click", minimize)
     
    } 

  }
  
function callPlus() {
    document.querySelector(".dialogBox").style.display = "flex";
    console.log("clicked")
}

plus1.addEventListener("click", callPlus)
X.addEventListener("click", callDis)

function addItem() {
    callDis()
    var boxes = document.querySelector(".wapper main")
    var puranaHTML = boxes.innerHTML;
    var boxContent = document.getElementById("form-content")
    var title = document.getElementById("title")
    boxes.innerHTML = puranaHTML + `
    <div class="box">
    <div class="boxHead">
        <div class="item-1 txt">${title.value}</div>
        <button class="item-2 but">+</button>
        <button class="item-3 but">-</button>
        <button class="item-4 but">$</button>
    </div>
    <main>
        <textarea name="" id="" >${boxContent.value}</textarea>
    </main>
</div>
    `
  addDelete()  
}   