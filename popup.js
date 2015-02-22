 window.onload = function() {
    var a = "quasimoonlightlover";


    
    function myFunction()
    {
        a=document.getElementById("person").value;
        a.split();
        var url = "";
        var i;
        for (i = 0; i < a.length; i++)
        {
            url+=a[i];
        }

       // var strWindowFeatures = "location=yes,height=400,width=640,scrollbars=yes,status=yes";
        
        var sites = [" facebook", " twitter", " tumblr", " instagram"];

        for(i = 0; i < 4; i++ )
    {
        var URL = "http://www.google.com/search?q=+"+url+sites[i]+"+&btnI";
        if(i ==0 )
        var win = window.open(URL, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=0, width=640, height=375");
            if(i ==1 )
        var win = window.open(URL, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=450, left=0, width=640, height=375");
     if(i ==2 )
        var win = window.open(URL, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=450, left=640, width=640, height=375");
     if(i ==3 )
        var win = window.open(URL, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=0, left=640, width=640, height=375");
    }


    }
    document.getElementById('thing').onclick = myFunction;
}
