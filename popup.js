 window.onload = function() {    
    function myFunction()
    {
        a=document.getElementById("person").value;

        

        var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
        var URL = "http://www.google.com/search?q=+"+a+"+&btnI";
        var win = window.open(URL, "_blank", strWindowFeatures);
    }
    document.getElementById('thing').onclick = myFunction;
}
        document.getElementById('demo').textContent=a;
