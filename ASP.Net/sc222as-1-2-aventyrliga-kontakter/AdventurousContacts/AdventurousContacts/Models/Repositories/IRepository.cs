using AdventurousContacts.Models;
using System;
using System.Collections.Generic;

namespace AdventurousContacts.Models.Repositories
{
    public interface IRepository : IDisposable
    {
        IEnumerable<Contact> GetContacts();
        Contact GetContactById(int id);
        void InsertContact(Contact contact);
        void UpdateContact(Contact contact);
        void DeleteContact(Contact contact);
        void Save();
    }
}