let pbc1 = document.querySelector("#parentBlock");
console.log(pbc1);


window.addEventListener("load", () => {
    console.log("i am call once the page loads");

    const pbc = document.querySelector("#parentBlock");
    console.log(pbc);

    for (let i = 0; i < 20; i++) {
        const newElement = pbc.children[0].cloneNode(true);
        newElement.style.display = "flex";
        newElement.children[0].innerHTML = "shubham" + i;

        pbc.insertBefore(newElement, pbc.firstChild);

    }


});