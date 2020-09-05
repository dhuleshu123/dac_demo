
var likecounter = 1;


function commentf() {
    let usercomment = document.querySelector("#inputid1").value;



    const newElement = document.querySelector("#shubham").cloneNode(true);
    newElement.children[0].innerHTML = usercomment;
    newElement.style.visibility = "visible";

    let commentbox = document.querySelector("#commentbox");
    commentbox.appendChild(newElement);

    //to clean the input box after adding comment
    document.querySelector("#inputId1").value = "";






}
function LikeHere() {


    likecounter++;


    document.querySelector("#akki").innerHTML = "LIKE" + likecounter;
}






/*
<div id="commentbox">
        <div id="shubham" style="display:flex;justify-content: space-between;">
            <div>sample comment</div>
            <button id="deleteid1" onclick="deletef()">DELETE</button>
        </div>
    </div>

*/