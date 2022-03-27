async function loadJsonAndDisplayMovies() {

let rawData = await fetch('/api/movies');
// deserialize the json (wait for it)

  
  let list = await rawData.json();

  console.log(list)

// loop through the products and build some html
let html = '';
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

  console.log(title);

  // the backticks indicate of a special type
  // of string - called a template literal
  // template literal can span over several lines
  // and contain javascript epressions: ${...}
  html += `
    
    
    <div href="#" class=" movies-container">
      <!--the first movie-->
      <div class="box">
        <div class="box-img"  >





          <img src="/image/${poster}" alt="" >


        </div>
        <div class="content ">
          <p id="content-close"> X</p>



        </div>


    




        <h3> ${title} </h3>
        <span> ${length} min | ${genre}</span>
        <h4> Date: ${releaseDate} </h4>


        <a href="#" class="btn">Book Now </a>



        <a href="https://www.youtube.com/${trailer}" target="_blank" class="bi-youtube"> play trailer </a>




      </div>

    </div>





    `;
}

  
  


// grab the DOM element that has the class products
// and replace its contents with our newly created html
document.querySelector('.movies').innerHTML = html;
}



async function loadJsonAndDisplayRMovies() {

  let rawData = await fetch('/api/rRated');
  // deserialize the json (wait for it)


  let list = await rawData.json();

  console.log(list)

  // loop through the products and build some html
  let html = '';
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

    console.log(title);

    // the backticks indicate of a special type
    // of string - called a template literal
    // template literal can span over several lines
    // and contain javascript epressions: ${...}
    html += `
    
    
    <div href="#" class=" movies-container">
      <!--the first movie-->
      <div class="box">
        <div class="box-img"  >





          <img src="/image/${poster}" alt="" >


        </div>
        <div class="content ">
          <p id="content-close"> X</p>



        </div>






        <h3> ${title} </h3>
        <span> ${length} min | ${genre}</span>
        <h4> Date: ${releaseDate} </h4>


        <a href="#" class="btn">Book Now </a>



        <a href="https://www.youtube.com/${trailer}" target="_blank" class="bi-youtube"> play trailer </a>




      </div>

    </div>





    `;
  }





  // grab the DOM element that has the class products
  // and replace its contents with our newly created html
  document.querySelector('.movies').innerHTML = html;
}

async function loadJsonAndDisplayPg13Movies() {

  let rawData = await fetch('/api/pg13');
  // deserialize the json (wait for it)


  let list = await rawData.json();

  console.log(list)

  // loop through the products and build some html
  let html = '';
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

    console.log(title);

  
    html += `
    
    
    <div href="#" class=" movies-container">
      <!--the first movie-->
      <div class="box">
        <div class="box-img"  >





          <img src="/image/${poster}" alt="" >


        </div>
        <div class="content ">
          <p id="content-close"> X</p>



        </div>






        <h3> ${title} </h3>
        <span> ${length} min | ${genre}</span>
        <h4> Date: ${releaseDate} </h4>


        <a href="#" class="btn">Book Now </a>



        <a href="https://www.youtube.com/${trailer}" target="_blank" class="bi-youtube"> play trailer </a>




      </div>

    </div>





    `;
  }





  // grab the DOM element that has the class products
  // and replace its contents with our newly created html
  document.querySelector('.movies').innerHTML = html;
}
async function loadJsonAndDisplayPgMovies() {

  let rawData = await fetch('/api/rateG');
  // deserialize the json (wait for it)


  let list = await rawData.json();

  console.log(list)

  // loop through the products and build some html
  let html = '';
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

    console.log(title);


    html += `
    
    
    <div href="#" class=" movies-container">
      <!--the first movie-->
      <div class="box">
        <div class="box-img"  >





          <img src="/image/${poster}" alt="" >


        </div>
        <div class="content ">
          <p id="content-close"> X</p>



        </div>






        <h3> ${title} </h3>
        <span> ${length} min | ${genre}</span>
        <h4> Date: ${releaseDate} </h4>


        <a href="#" class="btn">Book Now </a>



        <a href="https://www.youtube.com/${trailer}" target="_blank" class="bi-youtube"> play trailer </a>




      </div>

    </div>





    `;
  }





  // grab the DOM element that has the class products
  // and replace its contents with our newly created html
  document.querySelector('.movies').innerHTML = html;
}
