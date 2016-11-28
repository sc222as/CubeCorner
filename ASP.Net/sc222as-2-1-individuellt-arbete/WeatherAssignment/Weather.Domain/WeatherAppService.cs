using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Weather.Domain.Repositories;
using Weather.Domain.WebServices;

namespace Weather.Domain
{
    public class WeatherAppService : WeatherAppServiceBase
    {
        private readonly IWeatherAppRepository _repository;
        private readonly IWeatherWebservice _webservice;

        public WeatherAppService()
        {
        }

        public WeatherAppService(IWeatherAppRepository repository, IWeatherWebservice webservice)
        {
            _repository = repository;
            _webservice = webservice;
        }

        public override City GetCity(string screenName)
        {
            var city = _repository.GetCity(screenName);

            if (city == null)
            {
                city = _webservice.LookupCity(screenName);
                _repository.AddCity(city);
                _repository.Save();
            }

            return city;
        }

        public override void RefreshWeathers(City city)
        {
            if (city.Weathers == null || !city.Weathers.Any() ||city.NextUpdate < DateTime.Now)
            {
                foreach (var weather in city.Weathers.ToList())
                {
                    _repository.DeleteWeather(weather.Pk_Weather_Id);
                }
                foreach (var weather in _webservice.GetCityTimeline(city))
                {
                    _repository.AddWeather(weather);
                }

                city.NextUpdate = DateTime.Now.AddMinutes(1); //Ändra till 60
                _repository.Save();
            }
        }
    }
}