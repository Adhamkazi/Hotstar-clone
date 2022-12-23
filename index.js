
let images =
    ["https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Sonic2TheHedgehog/a66a359b-2c20-4851-9037-7c8253682a31._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FantasticBeastsSODRevised/babc7901-3ed1-49db-b2da-88ea10d9f9be._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_VenomLetThereBeCarnage/53ac5367-24d7-4ee5-b799-a9cfca515ee9._UR3000,600_SX1500_FMwebp_.jpeg",
        "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Uncharted/90097e63-ec24-4589-a7d6-922e413ca5c9._UR3000,600_SX1500_FMwebp_.jpeg"];



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


let movies = [
    {
        "title": "The Sea Beast",
        "year": "2022",
        "genres": [
            "Family Features,",
            "Children & Family Movies",
            ",US Movies"
        ],
        "duration": "1h 59m",
        "releaseDate": "2022-12-23",
        "actors": [
            "Karl Urban",
            "Dan Stevens",
            "Jared Harris"
        ],
        "imdbRating": 8.9,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQfb5qiiy84zJOCJB7CYG0nPp59uJqnH3S7beRiPxah4X4A4Dr-UGVnWoxqVJ7BXChYnk85P-6erkEFR6S-yVceYeO3hP9ruCX7ZrqRHnFnbV66lBsU2XBSyj0XZwmESHgRd.jpg?r=81e"
    },
    {
        "title": "Back to the Outback",
        "year": "2021",
        "genres": [
            "Family Features",
            "Comedies"
        ],
        "duration": "1h 35m",
        "releaseDate": "2021-12-19",
        "actors": [
            " Isla Fisher,Tim Minchin,Eric Bana"
        ],
        "imdbRating": 8.2,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcrVgjSyJPv1bQMJTHC7QMbthptwOqSoR61kMWPyc6LDEUoE-NEfvtQx47gdbSqHfDf8vjA4jfmur_vIbyGSDykO3OM8HY87b56trGzu-wZ_48y0CQI4bfnmKUvMCZpjVxI5Ew.jpg?r=0dd"
    },

    {
        "title": "Next Gen",
        "year": "2018",
        "genres": [
            "Family Features,US Movies,Children & Family Movies,Comedies"
        ],
        "duration": "1h 46min",
        "releaseDate": "2018-04-20",
        "actors": [
            "John Krasinski,Charlyne Yi,Jason Sudeikiss"
        ],
        "imdbRating": 8.3,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVfNyvOUeOSYEFR0E-19B74KcBoczYasCMu6JTXoCVBi07fbcIZEfXyz3_K6pisi62ODSu051_7i66qF1o0rea2w4OE3oUtcGEAXZJ9X4f7HeC5RnMiqmdfTDeFVAM2IkhaU_g.jpg?r=46b"
    },
    {
        "title": "Sherlock Holmes",
        "year": "2009",
        "genres": [
            "Crime",
            "Drama",
            "TAction & Adventure"
        ],
        "duration": "2h 8m",
        "releaseDate": "2009-02-09",
        "actors": [
            "Robert Downey Jr.,Jude Law,Rachel McAdams"
        ],
        "imdbRating": 9.6,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUtgCCM9BTKOxNcqBMT-OGDqbpg9FDc0Te3HP1Jiu91jtBctOl3Fy9y2q2oARYfMrGl9vKlBL_dTNyIg6LrR_tdV5VCNQjKC0BFx.jpg?r=1de"
    },
    {
        "title": "Sherlock Holmes: A Game of Shadows",
        "year": "2011",
        "genres": [
            "Drama",
            "Mysteries",
            "Action & Adventure"
        ],
        "duration": "2h 8m",
        "releaseDate": "2011-12-26",
        "actors": [
            "Robert Downey Jr.,Jude Law,Noomi Rapace"
        ],
        "imdbRating": 9.5,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbgiYD65le0Kqw471kvtV7kMTy3fe933Uoaw2rUhOo3Vp6w8oqfgTWkepQJe3qfPNsc7fs7xAOZJo0KnTvOk3F1QJNRZ3DaVrKSr.jpg?r=eac"
    },
    {
        "title": "The Gray Man",
        "year": "2022",
        "genres": [
            "US Movies,Movies Based on Books,Action & Adventure"
        ],
        "duration": "2h 9m",
        "releaseDate": "2022-12-25",
        "actors": [
            "Ryan Gosling,Chris Evans,Ana de Armas"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaH3VeUfxH4u10mxgmzJMrHNzJxmKw_s7J5j0k3Ox7vZNgJW16iPthEm1dAB-gFdjA8dI_-1FKqZLhqb-ZRGnWFjlIP6Gn1M-bqxtkkn2h_Svo55ZS--tp37KqeNsfMDGoZFXQ.jpg?r=fb8"
    },
    {
        "title": "Don 2",
        "year": "2011",
        "genres": [
            "Crime Movies,Action & Adventure"
        ],
        "duration": "2h 27m",
        "releaseDate": "2011-08-12",
        "actors": [
            "Shah Rukh Khan,Priyanka Chopra Jonas,Boman Irani"
        ],
        "imdbRating": 8.9,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQFel5HyFqdQ67_Rp-5GaVutmArcRMr2NBJz9cphUw__x_J87rQlSIRFoUNM2qMr7dIGUxMUxGl6a7BVRRXMywyXhCzenheWJ5E.jpg?r=d10"
    },

    {
        "title": "Don",
        "year": "2006",
        "genres": [
            "Crime Movies,Action & Adventure"
        ],
        "duration": "2h 48m",
        "releaseDate": "2006-04-11",
        "actors": [
            "Shah Rukh Khan,Priyanka Chopra Jonas,Arjun Rampal"
        ],
        "imdbRating": 8.5,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUbAd9vknBWos9aWjkcBjNYC4NuvH1aOmdIUvV1DzcjT62GuaRRbMK1itdbSsj0Q25PCcSa7PvhzzqHdcGYNT0jrNtx-Lw0aOS8.jpg?r=509"
    },
    {
        "title": "Kaminey",
        "year": "2009",
        "genres": [
            "Crime Movies,Dramas,Thriller Movies"
        ],
        "duration": "2h 5m",
        "releaseDate": "1955-08-26",
        "actors": [
            "Shahid Kapoor,Priyanka Chopra Jonas,Deb Mukherjee"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW76T5CnQOmA7RTJd7EDvkqvR36-voIJcnKhpDjW6eHTgdJlwaY7dAA2fcFI2-CTQ8EMpbQjKZSuQiEfQPlRKlkQKOiIk6pCedFO.jpg?r=8e4"
    },
    {
        "title": "Project Power",
        "year": "2021",
        "genres": [
            "Sci-Fi Movies,US Movies,Crime Movies,Action & Adventure"
        ],
        "duration": "1h 53m",
        "releaseDate": "2021-09-05",
        "actors": [
            "Jamie Foxx,Joseph Gordon-Levitt,Dominique Fishback"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXAQuwK7tgL-BXBqtQGPZWKUFpZglxQi87PmwV4mghHQIVphXEYnW87utToxpcwuHYjhO5-hEnXFBNzPeYqJx1vaN-dm7TX5dyzUgsacdYt7nymNkKSyrsPOVU96gnzPP-d5FA.jpg?r=b9d"
    },
    {
        "title": "Geostorm",
        "year": "2017",
        "genres": [
            "Sci-Fi Movies,US Movies,Action & Adventure"
        ],
        "duration": "1h 49m",
        "releaseDate": "2017-11-04",
        "actors": [
            "Gerard Butler,Jim Sturgess,Abbie Cornish"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRRlZnxmAXazSoVyUbtOpdo6sGPWkCy9ppogV9nPd0RTnNmsi8iHButFBj2qir3yH8BYKuOWui57EiPHqKMlCgVeh9hqMxcZEGZ_.jpg?r=f79"
    },
    {
        "title": "The Dark Knight",
        "year": "2008",
        "genres": [
            "US Movies,Action & Adventure"
        ],
        "duration": "2h 32m",
        "releaseDate": "2008-03-31",
        "actors": [
            "Christian Bale,Heath Ledger,Aaron Eckhart"
        ],
        "imdbRating": 8.4,
        "posterurl": "https://occ-0-4344-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRgDUGyK1dOLu-1oQTL2nICMeLuMQC1mAoLTWpcWtyixOdM2fhew7hbzk9ahd6IfCuw7flvEHIH8FvH8zzA2ACTvD3tHargj7OYB.jpg?r=157"
    },
];

// localStorage.setItem('movies',JSON.stringify(movies));

let data = JSON.parse(localStorage.getItem('movies'));


let append = (data) => {
    let container = document.getElementById('movies');

    container.innerHTML = null;
    // container.id="movies_grid"

    data.forEach(function (el) {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.posterurl;

        let title = document.createElement('p');
        title.innerText = `Title-${el.title}`;

        let year = document.createElement('p');
        year.innerText = `Year-${el.year}`;

        let genres = document.createElement('p');
        genres.innerText = `Genres-${el.genres}`;

        let releaseDate = document.createElement('p');
        releaseDate.innerText = `ReleaseDate-${el.releaseDate}`;

        let actors = document.createElement('p');
        actors.innerText = `Actors-${el.actors}`;

        let imdbRating = document.createElement('p');
        imdbRating.innerText = `Rating-${el.imdbRating}`

        div.append(img, title, year, genres, releaseDate, actors, imdbRating);
        container.append(div)
    });
}

// append(data)



let getMeData_Promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log(movies)
        // let moviesData = movies ;
        // console.log(movies)

        if (movies != null) {
            resolve(movies);
        } else {
            reject(`ERR:Server could not get you data/:`);
        }
    }, 2000);
})

getMeData_Promise
    .then(function (res) {
        append(res);
    })
    .catch(function (err) {
        console.log(err)
    })



let sort = document.getElementById('sort_btns')

let SortLH = () => {
    data = movies.sort(function (a, b) {
        return a.imdbRating - b.imdbRating;
    });
    append(data)
}






let SortHL = () => {
    data = movies.sort(function (a, b) {
        return b.imdbRating - a.imdbRating;
    });
    append(data)
}








