function soChiaHet() {
    var count ="";
    for(i=0 ; i<1000 ; i++){
      if(i%3==0){
         count++;
      }
    }
    document.getElementById("txtSoChiaHet").innerHTML="Số chia hết cho 3 nhỏ hớn 1000: "+ count +" Số";
}