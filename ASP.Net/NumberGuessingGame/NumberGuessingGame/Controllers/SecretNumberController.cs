using NumberGuessingGame.Models;
using NumberGuessingGame.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NumberGuessingGame.Controllers
{
    public class SecretNumberController : Controller
    {

        public SecretNumber SecretNumber
        {
            get
            {                
                return Session["SecretNumber"] as SecretNumber ?? (SecretNumber)(Session["SecretNumber"] = new SecretNumber());     //Returnerar Sessionen som innehåller SecretNumber.    
            }                                                                                                                       //Om det inte finns en Session som innehåller SecretNumber så skapar den en
        }
        
        
        // GET: SecretNumber
        public ActionResult Index()
        {
            var viewModel = new ViewModel { SecretNumber = SecretNumber };
            return View("Index", viewModel);
        }
        // POST: SecretNumber

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index([Bind(Include = "Guess")]ViewModel viewModel)
        {
            if (Session["SecretNumber"]== null)         //Krav 15 
            {
                return View("SessionExpired");
            }

            viewModel.SecretNumber = SecretNumber;            
            if (ModelState.IsValid)
            {
                SecretNumber.MakeGuess(viewModel.Guess.Value);
            }

            return View("Index", viewModel);
        }


        public ActionResult Restart() 
        {
            SecretNumber.Initialize();

            return RedirectToAction("Index");
        }

    }
}