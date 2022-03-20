

async function getData(restRoute) {
  // get the response/data from a rest route
  let rawData = await fetch(restRoute);
  // deserialize the json into a "live" data structure
  let result = await rawData.json();



  return result



}

var play = "#play";
var video = "#video";


var embed = function (url) {
  var id = url.split("?v=")[1]; //sGbxmsDFVnE
  var embedlink = "https://www.youtube.com/embed/" + id; //https://www.youtube.com/embed/sGbxmsDFVnE
  document.getElementById("myIframe").src = embedlink;
}





function renderlist(cssSelector, list) {

  let html = ""

  // turn the list array into json object
  let item = 0
  var myJsonString = JSON.stringify(list);


  // turn this json string to json object
  var mymovieData = JSON.parse(myJsonString)

  for (item = 0; item < mymovieData.length; item++) {

    var items = mymovieData[item];

    var title = items.title;
    var genre = items.genre;
    var length = items['lenght'];
    var poster = items.posters;
    var trailer = items.trailers
    var releaseDate = items.releasedate;
    var id = items.id;


    
    let myobject_serailized;
    
    







   
 

    html +=

      `
    <div href= "#"  class=" movies-container">
 <!--the first movie-->
<div class="box">
<div   class="box-img"  >





<img  src="/image/${poster}" alt="" >


</div>
<div class="content ">
<p id="content-close"> X</p>



</div>




${
    myobject_serailized = JSON.stringify(id)

}

<a href="http://localhost:3500/api/movies/${id}">detailed page </a>






<h3> ${title} </h3>
<span> ${length} min | ${genre}</span>
<h4> Date: ${releaseDate} </h4>


<a href="#" class="btn">Book Now </a>



<a href="https://www.youtube.com/${trailer}"  target="_blank" class="bi-youtube"> play trailer </a>


       

</div>

</div>





    `

  
   

   
  }



  // use the ccselector to grab an element
  // and replace its inner html with mmy table


  document.querySelector(cssSelector).innerHTML = html

}




function myFunction() {
  console.log('hello')

  location.href = "movieinfo.html";
 
  if (items.id === 1) {


    localStorage.setItem("moviedata", myobject_serailized);
  }

 
}

async function start() {

  let tablesAndViews = await getData('/api/tablesAndViews');

  renderlist('.movies', await getData('/api/movies'));

  console.log(await getData('/api/movies'))

  //renderRegistrationForm(await getData('/api/movies'))
}





start();



