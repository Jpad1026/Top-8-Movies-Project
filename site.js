/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/




/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/








const vue_app = Vue.createApp({
      
      created() {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
            return {


                  movies: [],
                  
                  title: "IMDB + Jesses + Top 8 Movies",
                  owner: 'Jesse',
                  github: "https://github.com/Jpad1026/Top-8-Movies-Project.git",








            }


      },
      methods: {
            getMonthText(dateArray) {
                  switch (dateArray[1]) {
                        case 1:
                              month = "January";
                              break;
                        case 2:
                              Month = "February";
                              break;
                        case 3:
                              Month = "March";
                              break;
                        case 4:
                              Month = "April";
                              break;
                        case 5: S
                              month = "May";
                              break;
                        case 6:
                              Month = "June";
                              break;
                        case 7:
                              Month = "July";
                              break;
                        case 8:
                              Month = "August";
                              break;
                        case 9:
                              Month = "September";
                              break;
                        case 10:
                              Month = "October";
                              break;
                        case 11:
                              Month = "November";
                              break;
                        case 12:
                              Month = "December";
                              break;
                  }












                  return Month + ' ' + dataArray[2] + ', ' + dataArray[1];


            },




            timeText(minutes) {
                  var h = Math.floor(minutes / 60)
                  var m = minutes % 60
                  return h + ' hours ' + m + ' minutes '
            },
            posterClick(movie){
                  movie.posterindex++
                  if(movie.posterindex>movie.posters.length-1){
                        movie.posterindex=0
                  }


            }






















      }






})




vue_app.mount("#vue_app")











