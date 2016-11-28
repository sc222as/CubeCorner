using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Weather.Domain
{
    public interface IWeatherAppService :IDisposable
    {
        City GetCity(string screenName);
        void RefreshWeathers(City city);
    }
}
