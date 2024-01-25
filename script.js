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
    const apiUrl = 'https://youtube-to-mp315.p.rapidapi.com/download';


const params = new URLSearchParams({
  url: youtubeUrl,
  format: 'mp3',
});

const requestOptions = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'ea7b08ec27msh0124dab8a370774p18a738jsn8ee0884a9e0d',
    'X-RapidAPI-Host': 'youtube-to-mp315.p.rapidapi.com'
  },
  body: {}
};

fetch(`${apiUrl}?${params}`, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Conversion successful',data.link);
    document.getElementById("result").innerHTML = `Download link !, ${data.link}`
    var container = document.getElementsByTagName("a");
    container.innerHTML += `<a href = ${data.link}></a>`;


  })

  .catch(error => {
    console.error('Conversion failed:', error.message);
  });
}
    /*const url = urlConverter('https://www.youtube.com/watch?v=nSqEU5wwCNQ&ab_channel=ScorpioMusicLibrary-RoyaltyFreeMusic')
    console.log(url)

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '213ebd2f02mshb97fefaf01eb5dfp1ffb11jsn305478252d47',
        'X-RapidAPI-Host': 'youtube-to-mp315.p.rapidapi.com'
      },
      body: {}
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    }*/
    
$(".search-button").on("click",function(){
  convertToMP3()
})


//'https://youtube-to-mp315.p.rapidapi.com/download?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnSqEU5wwCNQ&ab_channel%3DScorpioMusicLibrary-RoyaltyFreeMusic&format=mp3';
    