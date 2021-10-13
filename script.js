window.onload = function(){
    let checkbox = document.getElementById("total-check");
    let total = false;

    let tr = document.querySelectorAll("tbody tr");

    checkbox.addEventListener("click",function(){
        if(total){
            document.querySelectorAll("td input").forEach(box=>{
                box.checked = false
            });
            total = false;
        }else{
            document.querySelectorAll("td input").forEach(box=>{
                box.checked = true
            });
            total = true;
        }
    })

    tr.forEach(tr=>tr.addEventListener("click",function(){
        let tempCheck = this.childNodes[1].childNodes[0];
        if(tempCheck.checked){
            tempCheck.checked = false
        }
        else{
            tempCheck.checked = true
        }

    }))


}