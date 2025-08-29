

const callDetails =[];
//function to get element by className
function getByClass(className){
  return (document.getElementsByClassName(className));
}

//function to get element by id name
function getById(id){
  return (document.getElementById(id));
}

// make the heart icon clickable and dynamic....
let sumOfHeart=0;
const countLove = getByClass('count-love');
for(const count of countLove){
  count.addEventListener('click',function(){
    sumOfHeart++;
    const putCountLove = parseInt(getById('put-count-love').innerText);
    getById('put-count-love').innerText = sumOfHeart;
   })
   
}


//make the call button clickable and dynamic.....
const btnCall = getByClass('btn-call');
for(const call of btnCall){
  call.addEventListener('click', function(){
    const parentDiv = this.parentElement.parentElement;
    const serviceName = parentDiv.querySelector('.service-name').innerText;
    const phoneNumber = parentDiv.querySelector('.phone-number').innerText;
    
    const coinCount = parseInt(getById('coin-count').innerText);
    if(coinCount<20){
      alert('❌ আপনার পর্যাপ্ত কয়েন  নেই কল করতে কমপক্ষে ২০ কয়েন  লাগবে।');
    }
    else{
      alert(` 📞 calling  ${serviceName} ${phoneNumber}`);
      getById('coin-count').innerText = coinCount - 20;
      const details={
        name: serviceName,
        number: phoneNumber,
        date: new Date().toLocaleTimeString()
      }
      // callDetails.push(details);
      // console.log(callDetails);
      const historyContainer = getById('history-container');
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
      <div class="flex justify-between items-center p-4 w-full h-[70px] rounded-[8px] mb-2 bg-[#fafafa]">
         <div>
          <h2 class="text-[18px] text-[#111111] font-normal">${details.name}</h2>
          <p class="text-[18px] text-[#5C5C5C] font-normal">${details.number}</p>
         </div>
         <div>
          <p class="text-[18px] text-[#111111] font-normal">${details.date}</p>
         </div>
       </div>`
       historyContainer.appendChild(newDiv);
       

       getById('clear-btn').addEventListener('click',function(){
         historyContainer.innerHTML = '';
       })
    }

  })
}


//make copy btn clickable and dynamic.....
let sumOfCopy = 0;

const copies = getByClass('btn-copy');
for(const copy of copies){
  copy.addEventListener('click', function(){
    const parent = this.parentElement.parentElement;
     const phoneNumber = parent.querySelector('.phone-number').innerText;
     navigator.clipboard.writeText(phoneNumber).then(()=>{
      alert("নম্বর কপি হয়েছেঃ "+ phoneNumber);
      sumOfCopy++;
    getById('copy-count').innerText = sumOfCopy;
     });
  });
}

