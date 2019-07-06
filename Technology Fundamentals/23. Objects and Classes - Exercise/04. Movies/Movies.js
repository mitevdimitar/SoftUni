function solve(arr) {
    let movies = [];

    for (let command of arr) {
        //let commandArr = command.split(' ');
        if (command.includes('add')) {
            //commandArr.shift();
            let movieName = command.split('add movie ')[1];
            addMovie(movieName)
        } else if (command.includes('directed')) {
            let movieName = command.split(' directed by ')[0];
            let directorName = command.split(' directed by ')[1];
            addDirector(movieName, directorName)
        } else if (command.includes('date')) {
            let movieName = command.split(' on date ')[0];
            let movieDate = command.split(' on date ')[1];
            addDate(movieName, movieDate);
        }
    }

    for (let movie of movies) {
        if (movie.name !== undefined && movie.date !== undefined && movie.director !== undefined) {
            let movieJson = JSON.stringify(movie);
            console.log(movieJson);
        }
        
    }

    function addMovie(movieName) {
        movies.push({
            name: movieName,
            director: undefined,
            date: undefined
        })
    }

    function addDirector(movieName, directorName) {
        let foundMovie = movies.find(m => m.name === movieName);
        if (foundMovie) {
            foundMovie.director = directorName;
        }
    }

    function addDate(movieName, movieDate) {
        let foundMovie = movies.find(m => m.name === movieName);
        if (foundMovie) {
            foundMovie.date = movieDate;
        }
    }
    
}
