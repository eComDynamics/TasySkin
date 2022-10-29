document.getElementById("hair_care").onclick = function() {divClick("hair_care")};
document.getElementById("skin_care").onclick = function() {divClick("skin_care")};
document.getElementById("lip_care").onclick = function() {divClick("lip_care")};

SKIN_CARE = "https://amzn.to/3sFPamz";
HAIR_CARE = "https://amzn.to/3zs5b3e";
LIP_CARE = "https://amzn.to/3DGglE5";

function divClick(divId) {
    switch(divId) {
        case "hair_care":
            openPage(HAIR_CARE);
            break;
        case "skin_care":
            openPage(SKIN_CARE);
            break;
        case "lip_care":
            openPage(LIP_CARE);
            break;
        default:
            alert("Default");
    }
}

function openPage(url){
    window.open(url, '_blank');
}