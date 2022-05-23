function tinhGiaiThua() {
    var num = document.getElementById("number2").value;
    var giaithua=1;
     for(i=1; i<=num ;i++){
         giaithua *= i;
     }
    document.getElementById("txtTinhGiaiThua").innerHTML="Giai thừa :"+giaithua;
}