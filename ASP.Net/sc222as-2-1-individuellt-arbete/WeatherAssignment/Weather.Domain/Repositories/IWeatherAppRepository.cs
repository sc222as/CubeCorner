using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Weather.Domain.Repositories
{
    public interface IWeatherAppRepository : IDisposable
    {
        IEnumerable<Weather> GetWeather();
        Weather GetWeather(int id);
        void AddWeather(Weather weather);
        void UpdateWeather(Weather weather);
        void DeleteWeather(int id);


        IEnumerable<City> GetCity();
        City GetCity(int id);
        City GetCity(string ScreenName);
        void AddCity(City city);
        void UpdateCity(City city);
        void DeleteCity(int id);
        void Save();
    }
}
