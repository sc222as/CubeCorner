using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json.Linq;
using System.Net;
using System.IO;


namespace WeatherApp.Models.WebServices
{
    public class WeatherWebService : IWeatherWebservice
    {


        public IEnumerable<Weather> GetCityTimeline(City city)
        {            
            string rawJson;
            //var rawJson = new List<Weather>();
            string uriString = String.Format("http://api.openweathermap.org/data/2.5/forecast?q={0}&APPID=d394cb8c142ad1d6fbe2fcc5e3dee59b&units=metric",
                                                                                city);
            List<Weather> weatherList = new List<Weather>();

            var request = (HttpWebRequest)WebRequest.Create(uriString);

            using (var response = request.GetResponse())
            using (var reader = new StreamReader(response.GetResponseStream()))
            {
                rawJson = reader.ReadToEnd();
            }
            return JToken.Parse(rawJson).Select(t => new Weather(t)).ToList();
        }
        public City LookupCity (string screenName)
        {

            string rawJson;
            string uriString = String.Format("http://api.openweathermap.org/data/2.5/forecast?q={0}&APPID=d394cb8c142ad1d6fbe2fcc5e3dee59b&units=metric",
                                                                                screenName);

            var request = (HttpWebRequest)WebRequest.Create(uriString);

            using (var response = request.GetResponse())
            using (var reader = new StreamReader(response.GetResponseStream()))
            {
                rawJson = reader.ReadToEnd();
            }
            return JToken.Parse(rawJson).Select(u => new City(u)).FirstOrDefault();

        }
    }
}