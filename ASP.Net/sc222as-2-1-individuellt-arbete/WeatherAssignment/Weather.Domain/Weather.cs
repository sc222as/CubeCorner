using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json.Linq;
using System.Globalization;
using System.Diagnostics;
using Newtonsoft.Json;

namespace Weather.Domain
{
    public partial class Weather
    {
        private JToken t;

        public Weather()
        {
            //EMPTY
        }        

        public Weather(JToken t, City city)
        {
            //if (t.Path == "city")
            //{
            //    City = t.First["name"].ToString();
            //}
            //Fk_City_Id = city.Pk_City_Id;
            //City = city;
            if (t.Path == "list")
            {
                //Temp1 = t.First.ToString();
                Temp1 = t.First[0]["main"]["temp"].ToString();
                Temp2 = t.First[8]["main"]["temp"].ToString();
                Temp3 = t.First[16]["main"]["temp"].ToString();
                Temp4 = t.First[24]["main"]["temp"].ToString();
                Temp5 = t.First[32]["main"]["temp"].ToString();

                Icon1 = "http://openweathermap.org/img/w/" + t.First[0]["weather"][0]["icon"].ToString() + ".png";
                Icon2 = "http://openweathermap.org/img/w/" + t.First[8]["weather"][0]["icon"].ToString() + ".png";
                Icon3 = "http://openweathermap.org/img/w/" + t.First[16]["weather"][0]["icon"].ToString() + ".png";
                Icon4 = "http://openweathermap.org/img/w/" + t.First[24]["weather"][0]["icon"].ToString() + ".png";
                Icon5 = "http://openweathermap.org/img/w/" + t.First[32]["weather"][0]["icon"].ToString() + ".png";


                Created1 = DateTime.ParseExact(t.First[0]["dt_txt"].ToString(),
                    "yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture);
                Created2 = DateTime.ParseExact(t.First[8]["dt_txt"].ToString(),
                    "yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture);
                Created3 = DateTime.ParseExact(t.First[16]["dt_txt"].ToString(),
                    "yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture);
                Created4 = DateTime.ParseExact(t.First[24]["dt_txt"].ToString(),
                    "yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture);
                Created5 = DateTime.ParseExact(t.First[32]["dt_txt"].ToString(),
                    "yyyy-MM-dd HH:mm:ss", CultureInfo.InvariantCulture);
                Fk_City_Id = city.Pk_City_Id;
                City = city;
                //Temp2 = Temp["main"]["temp"].toInt();
                //Temp = Temp[213213]["main"]["temp"].toString();
                //t.First.Count();

                //    for (var i = 0; i < t.First.Count(); i++)
                //    {
                //        abou = t.First[i]["main"]["temp"].ToArray();                    
                //    }
                //    Temp = abou.ToString();
            }


        }

    }
}