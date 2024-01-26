/*console.log($.ajax);
   var inputUrl =document.getElementById("videoLink")
  var url = inputUrl.value
   
   function urlConverter(url){
    const params = new URLSearchParams({
      url: url,
      format: 'mp3',
    });
    return params
  }*/

  async function convertToMP3 () {
    console.log("done")
   
    const youtubeUrl = document.getElementById("videoLink").value
    console.log(youtubeUrl)
    if (!youtubeUrl) {
      alert('Please enter the link to the youtube video');
      return;
    }
    const apiUrl = 'https://youtube-to-mp315.p.rapidapi.com/download';


const params = new URLSearchParams({
  url: youtubeUrl,
  format: 'mp3',
});

const requestOptions = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
		'X-RapidAPI-Key': 'a3427d0d77mshbb2b040534b9005p14a232jsn2f643988f741',
		'X-RapidAPI-Host': 'youtube-to-mp315.p.rapidapi.com'
  },
  body: {}
};

/*fetch(`${apiUrl}?${params}`, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Conversion successful',data.link);
    document.getElementById("result").innerHTML = `Download link !, ${data.link}`
    resultLink.href = data.link;
    resultLink.style.display = "inline"; 


  })*/
  try {
    const response = await fetch(`${apiUrl}?${params}`, requestOptions);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Conversion successful', data.link);

    const resultLink = document.getElementById("result");
    resultLink.href = data.link;
    resultLink.style.display = "inline";  // Show the link
}
 catch (error) {
    console.error('Conversion failed:', error.message);
}
}

 

    
$(".search-button").on("click",function(){
  convertToMP3()
})


