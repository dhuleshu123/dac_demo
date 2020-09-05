

var counter = 1;
var likecounter = 1;

function commentHere() {


    // user kadun comment gheto tyasathi hi line mahne screen var jo input box disto to
    let usercomment = document.querySelector("#inputId1").value;

    /*for every comment a new div is creted and it is allocated in newElement variable
    let newElement = document.createElement("div")

    //   newElement.textContent = usercomment + counter;
    newElement.textContent = usercomment;
    newElement.style.background = "tomato";
    newElement.style.margin = "4px";*/


    //clone object
    const newElement = document.querySelector("#shubham").cloneNode(true);
    newElement.children[0].innerHTML = usercomment;
    newElement.removeAttribute("id");
    newElement.style.visibility = "visible";






    // ata jya div tag madhe apan sagalya comment thevnar ahe tyala acess kela ani commentbox variable madhe takle---ani tya commentbox 
    //madhe append keli child
    let commentbox = document.querySelector("#commentbox");
    commentbox.appendChild(newElement);

    //to clean the input box after adding comment
    document.querySelector("#inputId1").value = "";

    //now we want to add the element at the top
    commentbox.insertBefore(newElement, commentbox.firstChild);
    //  counter++;

}


//for like logic
function LikeHere() {
    likecounter++;
    document.querySelector("#likeid").innerHTML = "Like" + likecounter;


}
//for delete logic
function deletecomment(buttonelement) {
    buttonelement.parentElement.remove();

}
