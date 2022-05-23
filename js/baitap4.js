function tinhTong() {
    var x = document.getElementById("number").value;
    var n = document.getElementById("number1").value;
   var T=1;
   var  S=0;
    for(i=1;i<=n;i++){
        T=T*x;
        S=S+T;
    }
    document.getElementById("txtTinhTong").innerHTML="Tổng:"+S;
}