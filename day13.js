let getwhether = () => {

    //city name  is hard coded

    let cityname = document.querySelector("#inputid").value || "dhule";

    let url =
        'https://api.openweathermap.org/data/2.5/weather?appid=9b82ab5bf689df6daff880ef340d81b9&units=metric&q=' + cityname;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {
        const refjson = JSON.parse(xhr.responseText);
        //  console.log(refjson);
        domoperationhere(refjson);

    };
    xhr.send();

};

let domoperationhere = (refjson) => {

    const name = refjson.name;
    const maxTemp = refjson.main.temp_max;

    const parent = document.querySelector("#parent");

    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";
    newElement.innerHTML = name + " " + maxTemp;

    parent.insertBefore(newElement, parent.firstChild);


}