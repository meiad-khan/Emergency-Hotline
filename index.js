
let sum=0;
const countLove = document.getElementsByClassName('count-love');
for(const count of countLove){
  count.addEventListener('mouseover', function(){
    count.style.color = 'red';
  })
  count.addEventListener('click',function(){
    sum++;
    const putCountLove = parseInt(document.getElementById('put-count-love').innerText);
    
   document.getElementById('put-count-love').innerText = sum;
   })
   count.addEventListener('mouseout',function(){
    count.style.color = 'black';
   })
}
