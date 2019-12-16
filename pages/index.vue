<template>
<div class="text-center">
  <h1>Your Weather Data</h1>
  <small>You have to allow location to get the weather.</small>
  <hr>
  <h1>
    <span v-if="this.weather === null">
      <i>Waiting for location...</i>
    </span>
    <span v-else>
    <strong>{{this.weather.name}} ({{ this.weather.sys.country }})</strong>
    <ul class="list-unstyled">
      <li>Temperature: <strong>{{ this.weather.main.temp }}&#8451;</strong></li>
      <li>Temp. Min: <strong>{{ this.weather.main.temp_min }}&#8451;</strong></li>
      <li>Temp. Max: <strong>{{ this.weather.main.temp_max }}&#8451;</strong></li>
      <li>Feels like: <strong>{{ this.weather.main.feels_like }}&#8451;</strong></li>
      <li>Humidity: <strong>{{ this.weather.main.humidity }}%</strong></li>
      <li>Pressure: <strong>{{ this.weather.main.pressure }}atm</strong></li>
      <li>Wind: <strong>{{ this.weather.wind.speed }}m/s</strong></li>
    </ul>
    </span>
  </h1>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.getWeather();
  },
  methods: {
    ...mapActions(['getWeather'])
  },
  computed: {
    ...mapGetters({
      'weather': 'getWeatherInfo'
      })
  }
}
</script>

<style scoped>
hr {
  background: white;
}
</style>