using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Weather.Domain.Repositories
{
    public abstract class WeatherAppRepositoryBase : IWeatherAppRepository, IDisposable
    {
                        //48.00

        protected abstract IQueryable<Weather> QueryWeather();

        public IEnumerable<Weather> GetWeather()
        {
            return QueryWeather().ToList();
        }
        public abstract void AddWeather(Weather weather);


        public abstract void DeleteWeather(int id);        

        public Weather GetWeather(int id)
        {
            return QueryWeather().FirstOrDefault(t => t.Pk_Weather_Id == id);            
        }

        public abstract void UpdateWeather(Weather weather);

        protected abstract IQueryable<City> QueryCity();

        public IEnumerable<City> GetCity()
        {
            return QueryCity().ToList();
        }
        public abstract void AddCity(City city);


        public abstract void Deletecity(int id);

        public City GetCity(int id)
        {
            return QueryCity().FirstOrDefault(u => u.Pk_City_Id == id);
            
        }
        public City GetCity(String screenName)
        {
            return QueryCity().FirstOrDefault(u => u.ScreenName == screenName);

        }

        public abstract void Save();
        public abstract void UpdateCity(City city);

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~WeatherAppRepositoryBase() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }

        public void DeleteCity(int id)
        {
            throw new NotImplementedException();
        }
        #endregion

    }
}