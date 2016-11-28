using AdventurousContacts.Models;
using AdventurousContacts.Models.DataModels;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace AdventurousContacts.Models.Repositories
{
    public class EFRepository : IRepository, IDisposable
    {

        private Entities1 _context = new Entities1();
        

        public Contact GetContactById(int id)
        {
            return _context.Contact.Find(id);
        }

        public IEnumerable<Contact> GetContacts()
        {
            return _context.Contact.ToList();
        }

        public void InsertContact(Contact contact)
        {
            _context.Contact.Add(contact);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void UpdateContact(Contact contact)
        {
            if (_context.Entry(contact).State == EntityState.Detached)
                {
                _context.Contact.Attach(contact);
                }
            _context.Entry(contact).State = EntityState.Modified;
        }
        public void DeleteContact(Contact contact)
        {
            if (_context.Entry(contact).State == EntityState.Detached)
            {
                _context.Contact.Attach(contact);
            }
            _context.Contact.Remove(contact);
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    _context.Dispose();
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~EFRepository() {
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


        #endregion
    }
}