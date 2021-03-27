//question1

var cat = "complain";

function complain () {
    
    console.log("Meow!");
}

complain(); 


//question2

const heading = document.querySelector("h3");

const newText = "Updating heading";

heading.innerHTML = newText;


//Question 3

document.querySelector("h3").style.fontSize = "2em";


//Question 4  

const heading2 = document.querySelector("h1");
heading2.className = "subheading";


//Question 5

const paragraphs = document.querySelectorAll("p");

for(let i=0; i<paragraphs.length; i++) {
 
    paragraphs[i].style.color = "red";
}


//Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

const paragraphColor = document.querySelector ("p");
paragraphColor.style.backgroundColor = "yellow";


//Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function catsList (list) {
    for (let i=0; i < cats.length; i++ )
    console.log (cats[i].name);
}
catsList(cats)



//Question 8

function createCats (cats) {

    let catsItem = "";

    for (let i=0; i < cats.length; i++) {

    catsItem = catsItem + "<div>" + cats[i] + "</div>";

    catName = "<div>" + "<h5>" + cats[i].name + "</h5>" + "</div>";

    catAge = "<div>" + "<p>" + cats[i].age + "</p>" + "</div>";
   
    //console.log(catName, catsItem , catAge);
}

const finalHtml = (catsItem + catName + catAge) ; 
;
return finalHtml

}
const newHtml = createCats(cats);

//console.log(newHtml);
//console.log (createCats(cats));

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;


/*Hi. I see I did some mix up in here. I dont have this imeginery yet.
Please send me the solution for those are wrong here. Bart */