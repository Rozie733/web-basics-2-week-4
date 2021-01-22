//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here

const a = document.getElementById("a-1");
const divSq = document.createElement("div");
divSq.className = "square";
divSq.textContent = "X";
a.appendChild(divSq); 

divSq.addEventListener("click", () =>{
    const variable = document.querySelector(".square");
// if (variable.textContent == "o"){
//     variable.textContent = "x";
// }
// else if (variable.textContent == "x"){
//     variable.textContent = "o";
// }
variable.textContent == "O" ? variable.textContent = "X" : variable.textContent = "O";
//variable.textContent == "x" ? variable.textContent = "o" : variable.textContent = "x"
//variable == "o" ? variable = "x" : variable = "o"; ternary operator --> simple, one conditions

``});



//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];




//resolve // QUESTION 2 here
const a2 = document.getElementById("a-2");
const dropdownList = document.createElement("ul");
a2.appendChild(dropdownList);



for (let i = 0; i < colors.length; i++){
    const li = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.style.color = "darkcyan";
    removeBtn.style.marginLeft = "10px";
    li.textContent = colors[i];
    removeBtn.textContent = "Remove";
    
    removeBtn.addEventListener ("click", () =>{
        const liRemove = removeBtn.parentNode; //parent is the div. I want the li to be the parent
        console.log(liRemove);
        dropdownList.removeChild(liRemove);
        });

    
    li.appendChild(removeBtn);
    dropdownList.appendChild(li);
}

    










//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculateSphere = () =>{ //4pir2 and 4/3pir3
    const radius = document.getElementById("radius").value;
    // const volumeAnswer = document.getElementById("volume");///assign id values
    // const areaAnswer = document.getElementById("area");

    //do the calculations
    const volumeAnswer = ((4 * Math.PI * Math.pow(radius, 3))/3);
    const areaAnswer = 4 * Math.PI * Math.pow(radius, 2);
    const volume = document.getElementById("volume");
    volume.value = volumeAnswer.toFixed(3);
    const area = document.getElementById("area");
    area.value = areaAnswer.toFixed(3);
    


    


 }




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here
const a4 = document.getElementById("a-4");
const listDiv = document.createElement("div");
a4.appendChild(listDiv);

function hideBtns(a_SectionLabel, questionNum){
const btn = document.createElement("button");
btn.textContent = `Hide Question ${questionNum}`;
btn.style.color = "maroon";
const question = document.getElementById(a_SectionLabel).parentNode;
listDiv.appendChild(btn);

btn.addEventListener("click", () =>{
    if(btn.textContent == `Hide Question ${questionNum}` ){
        btn.style.color = "seagreen";
        question .style.display = "none";
        btn.textContent = `Show Question ${questionNum}`;

    }
    else if(btn.textContent == `Show Question ${questionNum}`){
        btn.style.color = "maroon";
        question .style.display = "";
        btn.textContent = `Hide Question ${questionNum}`;
    }
})
}

hideBtns("a-1", 1);
hideBtns("a-2", 2);
hideBtns("a-3", 3);




const img = document.createElement("img");
img.src = "tongueStickingOut.gif";

const msg = document.createElement("span")
const btn4 = document.createElement("button");
btn4.style.color = "maroon";
const question4 = document.getElementById("a-4")
btn4.textContent = "Hide Question 4";
btn4.addEventListener("click", () => {
    const text = document.createElement("span");
    text.textContent = ` Sike!`; 
    msg.appendChild(img);
    msg.appendChild(text);
    listDiv.appendChild(msg);
})
listDiv.appendChild(btn4);




