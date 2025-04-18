  var fetchurl2;
  var getstatus;

    var getdata2 =  async ()=> {
        console.log("Func Load")
        var fetchurl2 = "";
        const url = 'https://api.jsonsilo.com/public/846442d1-057f-46dd-ae56-30366a13e402';

        await  fetch(url)
        .then(response => response.json())  // Parse JSON data
        .then(data => {
            getstatus = data.portfolio[0].status;

            console.log(getstatus);

            if(getstatus === true) {

              fetchurl2 = data.portfolio[0].one;
              window.location.replace(fetchurl2);

            }
            else {
              
              setTimeout(() => {
                document.getElementById('preloaderr').style.top = "-100%";
              }, 2000);
              

            }



            

        })
        .catch(error => console.error('Error:', error));

    

    };

    getdata2();
