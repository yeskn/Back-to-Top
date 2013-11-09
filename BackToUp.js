
window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;  
    var top_div = document.getElementById( "go" ); 
    if( t >= 300 ) { 
        top_div.style.display = "block"; 
    } else { 
        top_div.style.display = "none"; 
    } 
} //监听窗口滚动事件
var ptt=0;
var btu = document.getElementById('flypig');
function pageScroll() {
btu.style.display='block';
window.scrollBy(0,-10); //每次上升10px
scrolldelay = setTimeout('pageScroll()',2); //2毫秒重复执行一次
if(document.body.scrollTop==0) {
  btu.style.marginBottom=ptt;
  ptt=ptt+10;
}//火箭向上飞的效果

if(ptt>=1000){
  ptt=0;
  btu.style.marginBottom=20;
  btu.style.display='none';
  clearTimeout(scrolldelay);
}//返回原始状态

//pageScroll ends
}
