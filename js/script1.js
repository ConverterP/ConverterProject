function convertToPDF() {
    var docxLink = document.getElementById('docxLink').value
  
    if (!docxLink) {
      alert('Please enter the link to the DOCX file');
      return;
    }
  
    var settings = {
      "url": "https://api.pdf.co/v1/pdf/convert/from/doc",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "x-api-key": "r.7xell@gmail.com_7V1Gr65s3JrqA7U25v11DJ0K4LsbTRT541M8F0x2K9icEdC8WNkgR896fz8nsEsnX4DbSPIpRm8oYn8yIBixcBRyY5SQ145l4e0BDubx39nt7bTq1BWnRnUTyNHejD3Rs0AblLUZn5oq22X2lS4bMd83l2",
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "url": docxLink,
        "pages": "0-",
        "name": "result.pdf"
      }),
    };
  
    $.ajax(settings).done(function (response) {
      console.log(response.url);
  
      const resultLink = document.getElementById("resul");
    resultLink.href = response.url;
    resultLink.style.display = "inline";
  
  
      alert('Conversion completed. Check the console for details.');
  
    });
  }
  
  
  $(".button").on("click",function(){
    convertToPDF()
  
  })