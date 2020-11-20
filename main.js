let pageCounter=1;
let animalContainer = document.getElementById("animal-info");

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
	let ourRequest = new XMLHttpRequest();
   // if(ourRequest.status>=200  && ourRequest.status<400){}
	ourRequest.open(
		"GET",
		"https://learnwebcode.github.io/json-example/animals-" + pageCounter+ ".json"
	);

	ourRequest.onload = function () {
		let ourData = JSON.parse(ourRequest.responseText);
		//console.log(ourData[0]);
		renderHtml(ourData);
    };
    ourRequest.onerror=function(){
        console.log("connection error");
    }
    ourRequest.send();
    pageCounter++;
    if(pageCounter>3){
        btn.classList.add("hide-me");
    }
});

function renderHtml(data) {
    let htmlString = " ";
    for(i=0; i< data.length; i++){
        htmlString += "<p>" + data[i].name +  " is a " + data[i].species + "."  +"that likes to eat ";
        for(ii=0; ii<data[i].foods.likes.length; ii++){
           if(ii == 0 ){
            htmlString += data[i].foods.likes[ii];
           }else{
            htmlString += " and " +  data[i].foods.likes[ii];
           }
        }
        htmlString+= "and dislikes ";
        for(ii=0; ii<data[i].foods.dislikes.length; ii++){
            if(ii == 0 ){
             htmlString += data[i].foods.dislikes[ii];
            }else{
             htmlString += " and " +  data[i].foods.dislikes[ii];
            }
         }
    
        htmlString += "</p>";
    }
	animalContainer.insertAdjacentHTML("beforeend", htmlString);
}

//json not xml
