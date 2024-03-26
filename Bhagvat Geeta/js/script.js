let shloka=document.getElementById('shlok');
let csnum=document.getElementById('chshlok')
let currentPage = 1;
const myHeaders = new Headers();

function toggleClass(e, toggleClassName) {
  if(e.className.includes(toggleClassName)) {
    e.className = e.className.replace(' ' + toggleClassName, '');
  } else {
    e.className += ' ' + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage+=2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
    
  }
  else if (page = currentPage - 1) {
    currentPage-=2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
  
}
const chapter=(chapterName,shlokName)=>{

   fetch(`https://bhagavadgitaapi.in/slok/${chapterName}/${shlokName}`)
   .then((response)=> response.json()
  ).then((data)=>{

      console.log('hey',data);
      
     csnum.innerHTML =`<div>${data.slok}</div>
     <div>${data.name}</div>
        <div>${data.tej.author}</div>
        <div>${data.tej.ht}</div>
        <div>${data.tej.ht}</div>
        <div>${data.siva.author}</div>
        <div>${data.siva.et}</div>
        <div>${data.siva.ec}</div>`;
    

  }).catch((error) => { console.log('error', error) });

}

const bhagvat= async ()=>{
  await fetch(`https://bhagavadgitaapi.in/chapters`,{
  method:'GET', 
  mode: 'cors',
  headers: myHeaders
  }).then((response)=>{
      return response.json();
  }).then((data)=>{

    data.forEach(key => {

      
      console.log('name',key);
      
      shloka.innerHTML +=`<div class="p-3">
      <h4>अध्याय : ${key.chapter_number}</h4>
      <div>नाम : ${key.name}</div>
      <div>अध्यर्थ : ${key.meaning.hi}</div>
      <div>श्लोक : ${key.verses_count}</div>
      <input class="shlokbtn" oninput="chapter(${key.chapter_number},this.value)" placeholder="Shloka num: "></input>
      </div>`;
    });
    // <div>Transliteration : ${key.transliteration}</div>
    
  
  console.log(data,'hello');

  }).catch((error) => { console.log('error', error) });

}

 bhagvat();


















// fetch('https://bhagavadgitaapi.in/chapters', {
//   mode: 'no-cors'
// })
//   .then(response => {
//     if (response.ok || response.status === 0) {
//       // Checking if the response is okay or if status is 0 (for 'no-cors' mode)
//       return response.text(); // Read the response as text
//     } else {
//       throw new Error('Request failed with status ' + response.status);
//     }
//   })
//   .then((data) => {
//     // Here you can work with the response text, even though you can't access JSON directly
//     for (const key in data.chapter_number) {
//       console.log('hey',data.chapter_number[key]);
//     }
//     // console.log('hey',data.chapter_number);
//     shloka.innerHTML=data;
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//   function handleResponse(data) {
//     // Handle the data here
//     console.log(data);
//   }
  
//   const script = document.createElement('script');
//   script.src = 'https://bhagavadgitaapi.in/chapters?callback=handleResponse';
//   document.body.appendChild(script);