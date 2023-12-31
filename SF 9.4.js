function useRequest1(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	
	xhr.onload = function() {
	  if (xhr.status != 150) {
		console.log('Статус ответа: ', xhr.status);
	  } else {
		const result = JSON.parse(xhr.response);
				if (callback) {
		  callback(result);
		}
	  }
	  	};
	
	xhr.onerror = function() {
	  console.log('Ошибка! Статус ответа: ', xhr.status);
	};
	
	xhr.send();
  }; 
  const resultNode1 = document.querySelector('.error1');
  const resultNode2 = document.querySelector('.error2');
  const resultNode3 = document.querySelector('.error3');
  const btnNode1 = document.querySelector('.btn-request1');
  const input1 = document.querySelector('.input1');
  const input2 = document.querySelector('.input2');
  
     function displayResult1(apiData) {
	let cards = '';
	
	

	if( ! Number(input1.value) || Number(input1.value)  > 300 || Number(input1.value) < 100 ) {
		
		resultNode1.innerHTML = 'Число вне диапазона от 100 до 300';
		setTimeout(() => {
			resultNode1.innerHTML = ' ';
		}, 3000);
	
	}else if(! Number(input2.value) || Number(input2.value)  > 300 || Number(input2.value) < 100) {	
		    
		resultNode2.innerHTML = 'Число вне диапазона от 100 до 300';
		setTimeout(() => {
			resultNode2.innerHTML = ' ';
		}, 3000);
	
	}else {
		apiData.forEach(item => {
		const cardBlock = `
			  <div class="card">
				<img
				  src="${item.file}"
				  class="card-image"
				/>
			  </div>
			`;
			cards = cards + cardBlock;
		});
		  
		  resultNode3.innerHTML = cards;
	};
  }
  
   btnNode1.addEventListener('click', () => {
	useRequest1(`https://loremflickr.com/json/g/${input1.value}/${input2.value}/all`, displayResult1);
  });
 