using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WeatherApp.Models;
using WeatherApp.Models.WebServices;
using WeatherApp.ViewModels;

namespace WeatherApp.Controllers
{
    public class WeatherController : Controller
    {

        private readonly IWeatherAppService _service;



        public WeatherController(IWeatherAppService service)
        {
            _service = service;
        }
        // GET: Weather
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]

        public ActionResult Index([Bind(Include = "ScreenName")]WeatherIndexViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var city = _service.GetCity(model.ScreenName);
                    _service.RefreshWeather(city);
                    model.City = city;
                }
        }
            catch (Exception ex)
            {
                while (ex.InnerException != null)
                {
                    ex = ex.InnerException;
                }
                ModelState.AddModelError(String.Empty, ex.Message);
            }            
            return View(model);
        }

    }
}

//using System.Web.Mvc;

//namespace WeatherApp.Controllers
//{
//    public class HomeController : Controller
//    {
//        // GET: Home
//        public ActionResult WeatherJS()
//        {
//            return View();
//        }
//    }
//}