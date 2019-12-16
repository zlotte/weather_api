import VueGeolocation from 'vue-browser-geolocation';

export const state = () => ({
    weather: null,
    apikey: process.env.apikey
})

export const getters = {
    getWeatherInfo: state => {
        return state.weather;
    }
}

export const mutations = {
    SET_WEATHER (state, payload) {
        state.weather = payload;
    }
}

export const actions = {
        async getWeather ({commit, state}) {
        try {
            const locationResponse = await VueGeolocation.getLocation({ enableHighAccuracy: true });
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${locationResponse.lat}&lon=${locationResponse.lng}&units=metric&appid=${process.env.apikey}`;
           
            const response = await fetch(url);
            const data = await response.json();
            commit('SET_WEATHER', data);

        } catch (error) {
            return console.log('Something went wrong.');
        }
    }
}