function list() {
  //-------------------------------------
  const mainDiv = document.createElement("div");
  mainDiv.id = "div";
  mainDiv.className = "div";
  document.getElementById("main").appendChild(mainDiv);

  const label = document.createElement("label");
  label.innerHTML = "Input Breed";
  label.className = "label";
  document.getElementById("div").appendChild(label);

  const inBtn = document.createElement("INPUT");
  inBtn.id = "input";
  inBtn.className = "input";
  document.getElementById("div").appendChild(inBtn);

  const labelNo = document.createElement("label");
  labelNo.innerHTML = "Input No of Breeds";
  labelNo.className = "label";
  document.getElementById("div").appendChild(labelNo);

  const noBtn = document.createElement("INPUT");
  noBtn.id = "noBtn";
  noBtn.className = "input";
  document.getElementById("div").appendChild(noBtn);

  const apiBtn = document.createElement("button");
  apiBtn.id = "apiBtn";
  apiBtn.className = "btn";
  apiBtn.textContent = "Call API";
  apiBtn.addEventListener("click", picDisplay);
  document.getElementById("div").appendChild(apiBtn);
  //--------------------------------------------------
  const displayDiv = document.createElement("div");
  displayDiv.id = "displayDiv";
  displayDiv.className = "displayDiv";
  document.getElementById("main").appendChild(displayDiv);

  const listFrame = document.createElement("div");
  listFrame.id = "listFrame";
  listFrame.className = "listFrame";
  document.getElementById("displayDiv").appendChild(listFrame);
  listArr();
  //--------------------------------------------------------
 
const picMain=document.createElement("div");
picMain.id="picMain";
picMain.className="picMain";
document.getElementById("main").appendChild(picMain);


  const labelTwo = document.createElement("label");
  labelTwo.innerHTML = "Display Pictures";
  labelTwo.className = "label";
  document.getElementById("picMain").appendChild(labelTwo);

  const picBtn = document.createElement("button");
  picBtn.id = "picBtn";
  picBtn.className = "btn";
  picBtn.textContent = "Clear";
  picBtn.addEventListener("click",picClear);
  document.getElementById("picMain").appendChild(picBtn);

  const picDiv = document.createElement("div");
  picDiv.id = "picDiv";
  picDiv.className = "picDiv";
  document.getElementById("picMain").appendChild(picDiv);


  //----------------------------------------------

  const favMain=document.createElement("div");
favMain.id="favMain";
favMain.className="favMain";
document.getElementById("main").appendChild(favMain);

  const labelThr = document.createElement("label");
  labelThr.innerHTML = "Display Favorite Pictures";
  labelThr.className = "label";
  document.getElementById("favMain").appendChild(labelThr);

  const favBtn = document.createElement("button");
  favBtn.id = "favBtn";
  favBtn.className = "btn";
  favBtn.textContent = "Clear";
  favBtn.addEventListener("click",favClr );
  document.getElementById("favMain").appendChild(favBtn);

  const favDiv=document.createElement("div");
  favDiv.id="favDiv";
  favDiv.className="favDiv";
  document.getElementById("favMain").appendChild(favDiv);
  
}

function picFun(newImg){
  
 document.getElementById("favDiv").appendChild(newImg);


}
async function listArr() {
  try {
    const dog_list = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const data = await dog_list.json();

    const list = document.getElementById("listFrame");
    for (dog in data.message) {
      const li = document.createElement("li");
      const node = document.createTextNode(dog);
      li.appendChild(node);
      list.appendChild(li);
    }
  } catch (error) {
    console.log(error);
  }
}
async function picDisplay(){
 {
    try {
      const input = document.getElementById("input").value;
      const number = document.getElementById("noBtn").value;
     
      const response = await fetch(
        `https://dog.ceo/api/breed/${input}/images/random/${number}`
      );
      const data = await response.json();

      data.message.map((message) => {
        const newImage = document.createElement("img");
        newImage.src = message;
        newImage.addEventListener("click", function(){

          picFun(newImage);
      });
    
        document.getElementById("picDiv").appendChild(newImage);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

function picClear() {
  document.getElementById("picDiv").innerHTML = "";
  
}
function favClr(){
  document.getElementById("favDiv").innerHTML = "";
}



