
async function getData(restRoute) {
  // get the response/data from a rest route
  let rawData = await fetch(restRoute);
  // deserialize the json into a "live" data structure
  let result = await rawData.json();



  return result



}


Storage.prototype.getObject = function getobject(key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
}







function renderlist(cssSelector, list) {

  var html = "";


  // turn the list array into json object
  let item = 0
  var myJsonString = JSON.stringify(list);


  // turn this json string to json object
  var mymovieData = JSON.parse(myJsonString)


// using local storage could be an alternative than using rest routes
  let myobject_deseralize = localStorage.getItem("moviedata");
  console.log("id " + myobject_deseralize)



  // should get the id of the one fetched and so it can be compared to this pages object id. 
  console.log("id " + myobject_deseralize)



  



  for (item = 0; item < mymovieData.length; item++) {

    var items = mymovieData[item];

    var id = items.id;

    var title = items.title;
    var genre = items.genre;
    var length = items['lenght'];
    var poster = items.posters;
    var trailer = items.trailers
    var releaseDate = items.releasedate;

    
    var int = Number(myobject_deseralize);
    console.log('integer' + int)

    
      
    

      html +=

        `
    <div href= "#"  class=" movies-container">
 <!--the first movie-->
<div class="box">
<div id="${items.id}"   class="box-img"  >
<img onclick="myFunction()" src="/image/${poster}" alt="" >

</div>
<div class="content ">
<p id="content-close"> X</p>



</div>

<h3> ${title} </h3>
<span> ${length} min | ${genre}</span>
<h4> Date: ${releaseDate} </h4>


<a href="#" class="btn">Book Now </a>



<a href="https://www.youtube.com/${trailer}" class="bi-youtube"> play trailer </a>


       

</div>

</div>




    `
   

  }
  document.querySelector(cssSelector).innerHTML = html
  // use the ccselector to grab an element
  // and replace its inner html with mmy table




}








async function start() {

  let tablesAndViews = await getData('/api/tablesAndViews');

  renderlist('.movies', await getData('/api/movies'));

  //renderRegistrationForm(await getData('/api/movies'))
}





start();



