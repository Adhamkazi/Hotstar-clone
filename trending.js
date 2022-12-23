let images =
    ["https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Sonic2TheHedgehog/a66a359b-2c20-4851-9037-7c8253682a31._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FantasticBeastsSODRevised/babc7901-3ed1-49db-b2da-88ea10d9f9be._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_VenomLetThereBeCarnage/53ac5367-24d7-4ee5-b799-a9cfca515ee9._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Uncharted/90097e63-ec24-4589-a7d6-922e413ca5c9._UR3000,600_SX1500_FMwebp_.jpeg"];


//    function SlideShow(){
let SlideShow = () => {
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







//    async function getMovies(){
let getMovies = async () => {
    try {
        let res = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=8d161379f654c57bcc85080c93e2ac4f");
        let data = await res.json();
        appendMovies(data.results);
        console.log(data.results)
    } catch (err) {
        console.log(err)
    }
}

getMovies()
let container = document.getElementById('movies');
// function appendMovies(actual_data) {
let appendMovies = (actual_data) => {
    actual_data.forEach(el => {
        let div = document.createElement('div');

        let image = document.createElement('img');
        image.src = `https://image.tmdb.org/t/p/original${el.poster_path}`;

        let title = document.createElement('p')
        title.innerText = `Name : ${el.title}`

        let type = document.createElement('p')
        type.innerText = `Type : ${el.media_type}`


        let lang = document.createElement('p')
        lang.innerText = `Lang : ${el.original_language}`


        let release_date = document.createElement('p')
        release_date.innerText = `Release-Date : ${el.release_date}`

        let overview = document.createElement('p')
        overview.innerText = `Overview : ${el.overview}`


        div.append(image, title, type, lang, release_date, overview);
        container.append(div);
    });




}