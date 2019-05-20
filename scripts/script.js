$(document).ready(function () {
    
    function upload()
				 {		
				    var f = document.getElementById("fileType").value;
					
					if(f == "xml")
					{
					   xmlUpload();
					}else if(f == "json")
					 {
						jsonUpload();
					 }else
					  {
					     csvUpload();
					  }
				 }

function xmlUpload()
				 {
				    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() 
					{
                       if(this.readyState == 4 && this.status == 200) 
					   {
                          myFunction(this);
                       }
                    };
				 
                    xhttp.open("GET", "Results_X.xml", true);
                    xhttp.send();

                    function myFunction(xml) 
					{
                       var i;
                       var xmlDoc = xml.responseXML;
                       var tr = "<tr><th>Title</th><th>URL</th><th>Description</tr>";
                       var x = xmlDoc.getElementsByTagName("result");
					   
                       for(i = 0; i < x.length; i++) 
					   { 
                          tr += "<tr class='r3'><td class='sCell2'>" +
                          x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td><td class='sCell2'>" +
                          x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue + "</td><td class='sCell2'>" +
						  x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue + "</td></tr>";
                       }
					   
                       document.getElementById("sTable2").innerHTML = tr;
					   document.getElementById("demo").innerHTML = "Uploaded XML Results";
                    }
				 }
				 
				 function jsonUpload()
		         {
                    $.getJSON('Results_J.json', function(data) 
					{
					   var tr = "<tr><th>Title</th><th>URL</th><th>Description</th></tr>";
					   
                       $.each(data.Result, function(i, r) 
					   {
                          tr += "<tr class='r3'><td class='sCell2'>" + 
						  r.title + "</td><td class='sCell2'>" + 
						  r.url + "</td><td class='sCell2'>" + 
						  r.description + "</td></tr>";
                       });
					   
					   $('#sTable2').html(tr);
					   $('#demo').text("Uploaded JSON Results");
                    });
                 }
				 
				 function csvUpload()
				 {
			        $(document).ready(function()
				    {
                       $.ajax(
					   {
                          url:"Results_C.csv",
                          dataType:"text",
                          success:function(data)
                          {
                             var Result = data.split(/\r?\n|\r/);
                             var tr = "<tr><th>Title</th><th>URL</th><th>Description</th></tr>";
						  
                             for(var i = 0; i < Result.length; i++)
                             {
                                var td = Result[i].split(",");
							 
                                tr += "<tr class='r3'><td class='sCell2'>" + 
						        td[0] + "</td><td class='sCell2'>" + 
						        td[1] + "</td><td class='sCell2'>" + 
						        td[2] + "</td></tr>";
                             }
						  
                             $('#sTable2').html(tr);
							 $('#demo').text("Uploaded CSV Results");
                          }
                       });
                    });
				 }
});

				 function upload()
				 {		
				    var f = document.getElementById("fileType").value;
					
					if(f == "xml")
					{
					   xmlUpload();
					}else if(f == "json")
					 {
						jsonUpload();
					 }else
					  {
					     csvUpload();
					  }
				 }

function xmlUpload()
				 {
				    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() 
					{
                       if(this.readyState == 4 && this.status == 200) 
					   {
                          myFunction(this);
                       }
                    };
				 
                    xhttp.open("GET", "Results_X.xml", true);
                    xhttp.send();

                    function myFunction(xml) 
					{
                       var i;
                       var xmlDoc = xml.responseXML;
                       var tr = "<tr><th>Title</th><th>URL</th><th>Description</tr>";
                       var x = xmlDoc.getElementsByTagName("result");
					   
                       for(i = 0; i < x.length; i++) 
					   { 
                          tr += "<tr class='r3'><td class='sCell2'>" +
                          x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td><td class='sCell2'>" +
                          x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue + "</td><td class='sCell2'>" +
						  x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue + "</td></tr>";
                       }
					   
                       document.getElementById("sTable2").innerHTML = tr;
					   document.getElementById("demo").innerHTML = "Uploaded XML Results";
                    }
				 }
				 
				 function jsonUpload()
		         {
                    $.getJSON('Results_J.json', function(data) 
					{
					   var tr = "<tr><th>Title</th><th>URL</th><th>Description</th></tr>";
					   
                       $.each(data.Result, function(i, r) 
					   {
                          tr += "<tr class='r3'><td class='sCell2'>" + 
						  r.title + "</td><td class='sCell2'>" + 
						  r.url + "</td><td class='sCell2'>" + 
						  r.description + "</td></tr>";
                       });
					   
					   $('#sTable2').html(tr);
					   $('#demo').text("Uploaded JSON Results");
                    });
                 }
				 
				 function csvUpload()
				 {
			        $(document).ready(function()
				    {
                       $.ajax(
					   {
                          url:"Results_C.csv",
                          dataType:"text",
                          success:function(data)
                          {
                             var Result = data.split(/\r?\n|\r/);
                             var tr = "<tr><th>Title</th><th>URL</th><th>Description</th></tr>";
						  
                             for(var i = 0; i < Result.length; i++)
                             {
                                var td = Result[i].split(",");
							 
                                tr += "<tr class='r3'><td class='sCell2'>" + 
						        td[0] + "</td><td class='sCell2'>" + 
						        td[1] + "</td><td class='sCell2'>" + 
						        td[2] + "</td></tr>";
                             }
						  
                             $('#sTable2').html(tr);
							 $('#demo').text("Uploaded CSV Results");
                          }
                       });
                    });
				 }

const MAX_AVAILABLE_ITEMS_VIEWED = 5;
const test = {
    document: window.document,
    location: window.location,
    screen: window.screen,
    navigator: window.navigator
};
let hi = Object.entries(test);
window.onload = function(){
    console.log(hi);
   let screen = document.getElementById('screen-info');
   let location = document.getElementById('location-info');
   let navigator = document.getElementById('navigator-info');
   let geolocation = document.getElementById('geolocation-info');
   let el = document.createElement('p');
   el.innerHTML = "Height X Width: " + window.screen.height + "px X " + window.screen.width + "px <br>"
                + "Available height X width: " + window.screen.availHeight + "px X " + window.screen.availWidth + "px <br>"
                + "Color Depth: " + window.screen.colorDepth + "<br>"
                + "Pixel Depth: " + window.screen.pixelDepth + "<br"
                + "Window Height X Width: " + window.innerHeight + "px X " + window.innerWidth + "px";
   screen.appendChild(el);
   el = document.createElement('p');
   el.innerHTML = "href: " + window.location.href + "<br>"
                + "Hostname: " + window.location.hostname + "<br>"
                + "Pathname: " + window.location.pathname + "<br>"
                + "Protocol: " + window.location.protocol + "<br>"
   location.appendChild(el);
   el = document.createElement('p');
   el.innerHTML = "App Name: " + window.navigator.appName + "<br>"
                + "App Version: " + window.navigator.appVersion + "<br> "
                + "Product: " + window.navigator.product + "<br> "
                + "userAgent: " + window.navigator.userAgent + "<br> "
                + "Platform: " + window.navigator.platform + "<br> "
                + "Language: " + window.navigator.languages;
   navigator.appendChild(el);
   el = document.createElement('p');
   window.navigator.geolocation.getCurrentPosition(function(coords){
    el.innerHTML = "Latitude: " + coords.coords.latitude + "<br>"
    + "Longitude: " + coords.coords.longitude;
   }, function(err){
       el.innerHTML = "Geolocation not supported!";
   });
   geolocation.appendChild(el);
   
}
/*
let test = Object.entries(window.location);

let select = [];
window.onload = function () {
    let select = document.getElementById('pres');
    let select2 = document.getElementById('pres1');
    for (let i = 0; i < test.length; i++) {
        if (typeof test[i][1] === "function" || test[i][1] === null) {

        } else {
            if (test[i][0] === "location" ||
                test[i][0] === "document" ||
                test[i][0] === "screen" ||
                test[i][0] === "navigator"
            ) {
                select.options[select.options.length] = new Option(test[i][0], i);

                //document.getElementById('pres').innerHTML += JSON.stringify(test[i][1]);

                //document.body.innerHTML = JSON.stringify(test[i][1])
            }
        }
    }
    select.addEventListener("change", (e) => {
        let dropdown = Object.keys(test[select.value][1]);
        let temp = Object.assign({}, test[select.value][1]);
        for (let i = 0; i < select2.options.length; i++) {
            select2.options[i] = null;
        }
        select2.options[select2.options.length] = new Option("Select one of the following", "");
        select2.classList.remove("hide");
        document.getElementById("browserSelectOptions").classList.remove("hide");
        document.getElementById("browserSelectOptions").innerHTML = test[select.value][0] + " available options:";
        for (let prop in test[select.value][1]) {
            if (typeof test[select.value][1][prop] === "object" || typeof test[select.value][1][prop] === "function" || test[select.value][1][prop] === null || test[select.value][1][prop] === undefined || test[select.value][1][prop] === "") {

            } else {
                select2.options[select2.options.length] = new Option(prop, prop);
            }
        }

    });
    let ulList = document.getElementById("list");
    select2.addEventListener("change", (e) => {
        let tempLi = document.createElement("li");
        tempLi.innerHTML = select2.value + ": " + test[select.value][1][select2.value];
        
        if(ulList.childElementCount === MAX_AVAILABLE_ITEMS_VIEWED){
            var elements = ulList.getElementsByTagName('li');
            ulList.removeChild(elements[0]);
        }
        ulList.appendChild(tempLi);
    });
} */
