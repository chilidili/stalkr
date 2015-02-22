 window.onload = function() {

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
        
        var sites = [" facebook", " twitter", " tumblr", " instagram"];


        for(i = 0; i < 5; i++ )
    {
        var URL = "http://www.google.com/search?q=+"+url+sites[i]+"+&btnI";
        var URLimg = "https://www.google.ca/search?q="+url+sites[i]+"+wallpaper&source=lnms&tbm=isch&sa=X&ei"
        
        if(i == 0)
            var win = window.open(URLimg, "_blank", "toolbar=no, scrollbars=yes, resizable=yes, top=0, left=0, width=1320, height=735");

        else if(i ==1 )
            var win = window.open(URL, "_blank", "toolbar=no, scrollbars=yes, resizable=yes, top=0, left=0, width=640, height=365");
       
        else if(i ==2 )
            var win = window.open(URL, "_blank", "toolbar=no, scrollbars=yes, resizable=yes, top=450, left=0, width=640, height=365");
        
        else if(i ==3 )
            var win = window.open(URL, "_blank", "toolbar=no, scrollbars=yes, resizable=yes, top=450, left=640, width=640, height=365");
       
        else
            var win = window.open(URL, "_blank", "toolbar=no, scrollbars=yes, resizable=yes, top=0, left=640, width=640, height=365");

    }

    }

    document.getElementById('thing').onclick = myFunction;
}
