class Forecast {
    constructor() {
        this.key = 'FPcQVe1eO8QskUbuwEmIDWflD2XGJvYD';
        this.ckey = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.wkey = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }

    async updateCity(city) {
        const cdata = await this.getCity(city);
        const wdata = await this.getWeatherCondition(cdata.Key);
        return { cityDets : cdata, weather: wdata };
    }

    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.ckey.concat(query));
        const data = await response.json();
        return data[0];
    }

    async getWeatherCondition(id) {
        const query = `${id}?apikey=${this.key}`;
    
        const response = await fetch(this.wkey.concat(query));
        const data = await response.json();
        return data[0];
    }

}