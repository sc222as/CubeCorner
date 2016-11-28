using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Weather.Domain.DataModels;

namespace Weather.Domain.Repositories
{
    public class WeatherAppRepository : WeatherAppRepositoryBase
    {   
        private readonly sc222as_WeatherAppEntities1 _context = new sc222as_WeatherAppEntities1();
        public override void AddCity(City city)
        {
            _context.Cities.Add(city);
        }

        public override void AddWeather(Weather weather)
        {

            _context.Weathers.Add(weather);
        }

        public override void Deletecity(int id)
        {
            var city = _context.Cities.Find(id);
            _context.Cities.Remove(city);
        }

        public override void DeleteWeather(int id)
        {
            var weather = _context.Weathers.Find(id);
            _context.Weathers.Remove(weather);
        }

        public override void Save()
        {
            _context.SaveChanges();
        }

        public override void UpdateCity(City city)
        {
            _context.Entry(city).State = System.Data.Entity.EntityState.Modified;
        }

        public override void UpdateWeather(Weather weather)
        {
            _context.Entry(weather).State = System.Data.Entity.EntityState.Modified;
        }

        protected override IQueryable<City> QueryCity()
        {
            return _context.Cities;
        }


        protected override IQueryable<Weather> QueryWeather()
        {
            return _context.Weathers;
        }
    }
}