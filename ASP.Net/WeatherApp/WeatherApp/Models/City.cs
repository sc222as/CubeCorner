using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WeatherApp.Models
{
    public partial class City
    {
        public City(JToken cityToken)
            : this()
        {
            if (cityToken.Path == "city")
            {
                ID = cityToken.First["id"].ToString();
                Name = cityToken.First["name"].ToString();
                ScreenName = cityToken.First["name"].ToString();
                NextUpdate = DateTime.Now.AddMinutes(1);
            }            
            //ID = cityToken.Value<String>("id_str");
           
            
            //Name = cityToken.Value<String>("name");
           
            //ScreenName = cityToken.Value<String>("screen_name");            
        }
    }
}