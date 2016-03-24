(function (window,scroll_up) {
    window.onscroll = function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var go = document.getElementsByClassName("scroll_wrap");
        if (t >= 300) {
            go[0].style.display = "block";
        } else {
            //go[0].style.display = "none";
        }
    };
    window.scroll_up = (scroll_up()).up;
}(window,function(){
    var rn =  {
        up : function(){
            var rocket = document.getElementById('rocket');
            rocket.style.display = 'block';
            window.scrollBy(0, -10);
            var scrolldelay = setTimeout(rn.up, 10);

            var rStyle = window.getComputedStyle(rocket);
            var rBottom = rStyle.bottom;
            var srBottom = rBottom.substr(0,rBottom.length-2);

            if (document.body.scrollTop <= 0) {
                console.log(srBottom);
                rocket.style.bottom = [parseInt(srBottom)+20,'px'].join('');
                if(parseInt(srBottom) > window.innerHeight+100){
                    rn._initRocket(rocket,scrolldelay);
                }
            }
        },
        _up : function (){
            window.scrollBy(0, -10);
        },
        _initRocket : function(rocket,dely){
            rocket.parentNode.style.display = '';
            rocket.style.bottom = '20px';
            rocket.style.left = '30px';
            if(dely){
                clearTimeout(dely);
            }
            console.log('初始化rocket');
        }
    };
    return rn;
}));