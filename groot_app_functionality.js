const inp_text_area = document.querySelector("#input-txt");
const translate_btn = document.querySelector("#translate-btn");
const output_div = document.querySelector("#output-txt");

function errorHandler(error)
{
    console.log("Error occured! "+error);
    alert("Something went wrong! Please try again after sometime..");
}

function constructURL(text)
{
    var serverURL = "https://api.funtranslations.com/translate/groot.json";
    return serverURL + "?text="+text;
}

function clickHandler(){
    var inpText = inp_text_area.value;
    fetch(constructURL(inpText))
    .then(response => response.json())
    .then(json=> output_div.innerText = json.contents.translated)
    .catch(errorHandler);

}

translate_btn.addEventListener("click",clickHandler);
