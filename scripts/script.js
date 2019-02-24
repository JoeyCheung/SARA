$(document).ready(function(){
    const fileInput = document.getElementById('test');
    fileInput.addEventListener("change",function(e){
        let file = this.files[0];
        if(file.type === "text/csv" || file.type === "text/xml" || file.type === "application/json"){
        let fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onload = function(e){
            document.getElementById("result").innerHTML = fileReader.result;
        }
    }else{
        document.getElementById("result").innerHTML = "File type not supported!"
    }

    });
});