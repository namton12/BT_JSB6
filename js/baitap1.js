function inSoChanLe() {
    var soChan = "";
    var soLe = "";
 for(i=1 ; i<100 ; i++){
      if(i%2 == 0){
       soChan += i + ",";
      }
      else{
        soLe += i + ",";
      }
 }
 document.getElementById("txtChanLe").innerHTML= "Sô Chẵn"+ soChan +"<br> Số lẻ "+ soLe;
}
