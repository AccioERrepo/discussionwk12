document.querySelector("#subscribe").addEventListener("click",function(){
    document.querySelector("emailDiv").computedStyleMap.display = "block";

    if(this.checked){
    document.querySelector("emailDiv").computedStyleMap.display = "block";
    }

    else {
        document.querySelector("emailDiv").computedStyleMap.display = "none";
    }

})