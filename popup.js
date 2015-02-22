 window.onload = function() {
    var a =0;
    
    function myFunction()
    {
    	 document.getElementById('person').textContent=a;
        var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
		var URL = "https://www.linkedin.com/cws/share?mini=true&amp;url=" + location.href;
		var win = window.open(URL, "_blank", strWindowFeatures);
    }
    document.getElementById('thing').onclick = myFunction;
}
        document.getElementById('demo').textContent=a;
