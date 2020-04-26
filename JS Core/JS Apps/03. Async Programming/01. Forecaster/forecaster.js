function attachEvents() {
    $('#submit').on('click', loadWeather);

    async function loadWeather() {
        let baseUrl = 'https://judgetests.firebaseio.com/';
        let cityName = $('#location').val();
        try {
            let cities = await $.ajax({
                url: baseUrl + 'locations.json',
                method: 'GET'
            });
            let cityId = cities.filter(obj => obj.name === cityName)[0].code;
            let todaysWeather = await $.ajax({
                url: `${baseUrl}forecast/today/${cityId}.json`,
                method: 'GET'
            });
            let todaysCondition = todaysWeather.forecast.condition.split(' ').join('');
            let upcomingWeather = await $.ajax({
                url: `${baseUrl}forecast/upcoming/${cityId}.json`,
                method: 'GET'
            });
            $('#forecast').css("display", "block");
            let conditionSymbols = {
                Sunny: "&#x2600",
                Partlysunny: "&#x26C5",
                Overcast: "&#x2601",
                Rain: "&#x2614",
                Degrees: "&#176"
            }
            let todaysWeatherDiv = $(`
            <span class="condition symbol">${conditionSymbols[todaysCondition]}</span>
            <span class="condition">
                <span class="forecast-data">${todaysWeather.name}</span>
                <span class="forecast-data">${todaysWeather.forecast.low}&#176/${todaysWeather.forecast.high}&#176</span>
                <span class="forecast-data">${todaysCondition}</span>
            </span>
            `);
            $('#current').append(todaysWeatherDiv);
            for (let currentDay of upcomingWeather.forecast) {
                let currentDaysCondition = currentDay.condition.split(' ').join('');
                let upcomingWeatherDiv = $(`
            <span class="upcoming">
                <span class="symbol">${conditionSymbols[currentDaysCondition]}</span>
                <span class="forecast-data">${currentDay.low}&#176/${currentDay.high}&#176</span>
                <span class="forecast-data">${currentDaysCondition}</span>
            </span>
            `);
            $('#upcoming').append(upcomingWeatherDiv);

            }
            
        } catch(error) {
            let errorDiv = $('<div class="label">Error</div>');
            $('#forecast').css("display", "block").empty().append(errorDiv);
        }
        
    }
}