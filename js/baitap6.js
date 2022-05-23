function taoThe() {
var content ="";
for(i=1;i<=10;i++){
   if(i%2==0){
    content +='<div style="background-color:blue" >thẻ div lẻ<div>' +i;
   }else{
    content +='<div style="background-color:red"> thẻ div chẵn <div>'+i ;
   }
}
document.getElementById("txtTaoThe").innerHTML=content;
}