//当页面往下拉距离顶部有或大于300px时，显示按钮，否则隐藏
window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var go = document.getElementById( "go" ); 
    if( t >= 300 ) { 
		//alert(t);
        go.style.display = "block"; 
    } else { 
        go.style.display = "none"; 
    } 
}
//yes ,j just wangt to get a green block
//go按钮的点击函数，执行效果。
var ptt=0;
var rocket = document.getElementById('flypig');

function pageScroll() {
rocket.style.display='block';
window.scrollBy(0,-10); //每次上升10px
scrolldelay = setTimeout('pageScroll()',2); //2毫秒重复执行一次
if(document.body.scrollTop==0) {
//	alert('baktoup');
  rocket.style.marginBottom=ptt+'px';
  ptt=ptt+10;
}//火箭向上飞的效果

if(ptt>=1000){
  ptt=0;
  rocket.style.marginBottom=20;
  rocket.style.display='none';
  clearTimeout(scrolldelay);
}//返回原始状态

//pageScroll ends
}
