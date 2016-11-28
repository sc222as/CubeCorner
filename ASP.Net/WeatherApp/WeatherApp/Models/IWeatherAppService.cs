using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeatherApp.Models
{
    public interface IWeatherAppService :IDisposable
    {
        City GetCity(string screenName);
        void RefreshWeather(City city);
    }
}
