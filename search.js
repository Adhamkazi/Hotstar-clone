let images =
    ["https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Sonic2TheHedgehog/a66a359b-2c20-4851-9037-7c8253682a31._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FantasticBeastsSODRevised/babc7901-3ed1-49db-b2da-88ea10d9f9be._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_VenomLetThereBeCarnage/53ac5367-24d7-4ee5-b799-a9cfca515ee9._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Uncharted/90097e63-ec24-4589-a7d6-922e413ca5c9._UR3000,600_SX1500_FMwebp_.jpeg"];


function SlideShow() {

    let slideshow = document.getElementById('slideshow');
    let i = 0;
    //we are getting 2 second dely when we open app so now we have make i++;
    let img = document.createElement('img');
    img.src = images[i];
    slideshow.append(img);
    i++;
    setInterval(function () {
        if (i === images.length) {
            i = 0;
        }
        // then we have to append image so first create img tag ;
        let img = document.createElement('img');
        img.src = images[i];
        slideshow.innerHTML = null;
        slideshow.append(img);
        i++;
    }, 2000);
};

SlideShow();
// let apikey = 'ad510e43'
// let url = (`http://www.omdbapi.com/?apikey=${ad510e43}`);
















let container = document.getElementById('movies');

//    async function getMovies(){
let getMovies = async () => {
    // we need collection of movies
    // where is the collection 
    // do we have some server(url) which stores movies data?
    //url?

    // let img = document.createElement('img');
    // img.src = "https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"
    // img.id ="Loader"
    // container.append(img);


    let query = document.getElementById('query').value;
    try {

        let res = await fetch(`http://www.omdbapi.com/?apikey=ad510e43&s=${query}`);
        let data = await res.json();
        console.log(data)
        append(data.Search)
        // let actual_data = data.Search;
        // append(actual_data)

    }
    catch (err) {
        console.log(err)
    }
}


// function append (actual_data){
let append = (actual_data) => {
    // let loader = document.getElementById('loader');

    // document.removeChild(loader);

    container.innerHTML = null;

    if (actual_data == undefined) {
        return false
    }

    actual_data.forEach(function (el) {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.Poster;

        let title = document.createElement('p');
        title.innerText = `Title-${el.Title}`;

        let year = document.createElement('p');
        year.innerText = `Year-${el.Year}`;

        let type = document.createElement('p');
        type.innerText = `Type-${el.Type}`;

        let imdbRating = document.createElement('p');
        imdbRating.innerText = `Rating-${el.imdbID}`

        div.append(img, title, year, type, imdbRating);
        container.append(div)
    });
}


//func -> getMovies
let id;
function debounce(func, delay) {

    //a - debounce() -> getMovies('a)  -> append();
    //av - debounce() -> getMovies('av') -> append();
    if (id) {
        clearTimeout(id)
    }


    id = setTimeout(function () {
        func()
    }, delay);

}