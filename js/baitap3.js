function timSoNguyenDuong() {
  sum = 0;
  count = 0;
 for(i=1;sum<10000;i++){
    sum = sum+i;
   count++;
 }
  
    document.getElementById("txtSoNguyenDuong").innerHTML=" Số nguyên dương nhỏ nhất là:"+count;
}