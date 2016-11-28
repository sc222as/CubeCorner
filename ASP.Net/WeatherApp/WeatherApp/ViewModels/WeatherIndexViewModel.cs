using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using WeatherApp.Models;

namespace WeatherApp.ViewModels
{
    public class WeatherIndexViewModel
    {
        
        [DisplayName("Name")]
        [Required]
        [StringLength(50)]
        public string ScreenName { get; set; }

        public bool HasWeather => Weathers?.Any() ?? false;
        public string Name
        {
            get { return City != null ? City.Name : "[Unknown]"; }
        }

        //public string Name => City?.Name ?? "[unknown]";
        public IEnumerable<Weather> Weathers => City?.Weathers;
        public City City { private get; set; }

    }
}
