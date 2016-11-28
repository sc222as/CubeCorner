using AdventurousContacts.Models;
using AdventurousContacts.Models.Repositories;
using System;
using System.Data;
using System.Net;
using System.Web.Mvc;
using System.Web.Optimization;

namespace AdventurousContacts.Controllers
{
    public class AdventurousContactsController : Controller
    {
        //private Entities _context = new Entities();

        private IRepository _repository;    

        public AdventurousContactsController(IRepository repository)
        {
            _repository = repository;
        }

        // GET: AdventurousContacts
        public ActionResult Index()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var model = _repository.GetContacts();
                    return View(model);
                }
            }
            catch (Exception)
            {
                
            }
            return View("ServerError");
        }

        public ActionResult Create()
        {
            return View("Create");
        }

        //POST NY CONTACT
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Firstname, Lastname, EmailAddress")]Contact contact)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    _repository.InsertContact(contact);
                    _repository.Save();
                    TempData["success"] = "Kontakten Sparad";
                    return RedirectToAction("Index");
                }
            }
            catch (DataException)
            {
                TempData["error"] = "Misslyckades med att spara Kontakten";
            }

            return View("Index");
        }

        // GET Edit
        public ActionResult Edit(int? id)
        {
            if (!id.HasValue)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var contact = _repository.GetContactById(id.Value);
            if(contact == null)
            {
                return HttpNotFound();
            }

            return View(contact);
        }

        // POST Edit
        [HttpPost]
        [ActionName("Edit")]
        [ValidateAntiForgeryToken]
        public ActionResult EditPost(int id)
        {           
            var contact = _repository.GetContactById(id);
            if (contact == null)
            {
                return HttpNotFound();
            }

            if (TryUpdateModel(contact, new string[] { "FirstName", "LastName", "EmailAddress"}))
            {
                try
                {
                    _repository.UpdateContact(contact);
                    _repository.Save();
                    TempData["success"] = "Ändringen Sparad";

                    return RedirectToAction("Index");
                }
                catch(DataException)
                {
                    TempData["error"] = "Misslyckades med att ändra Kontakten";
                }
            }

            return View(contact);
        }


        // GET Delete
        public ActionResult Delete(int? id)
        {
            if (!id.HasValue)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var contact = _repository.GetContactById(id.Value);
            if (contact == null)
            {
                return HttpNotFound();
            }

            return View(contact);
        }

        // POST Delete
        [HttpPost]
        [ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            try
            {
                var contactToDelete = new Contact { ContactID = id };
                _repository.DeleteContact(contactToDelete);
                _repository.Save();
                TempData["success"] = "Kontakten togs bort";
                return RedirectToAction("Index");
            }
            catch (DataException)
            {
                TempData["error"] = "Misslyckades med att ta bort Kontakten";
            }
            return RedirectToAction("Delete", new { id = id });
            }

            
        


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _repository.Dispose();
            }
            base.Dispose(disposing);
        }



    }
}