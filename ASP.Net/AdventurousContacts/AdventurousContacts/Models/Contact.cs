using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AdventurousContacts.Models
{   [MetadataType(typeof(Contact_Metadata))]
    public partial class Contact
    {
    }

    public class Contact_Metadata
    {   // Krav 4
        [Required(ErrorMessage = "Detta fältet får inte vara tomt")]
        [MaxLength(50, ErrorMessage = "Detta fältet får inte innehålla mer än 50 tecken")]
        [DisplayName("Firstname")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Detta fältet får inte vara tomt")]
        [MaxLength(50, ErrorMessage = "Detta fältet får inte innehålla mer än 50 tecken")]
        [DisplayName("Lastname")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Detta fältet får inte vara tomt")]
        [MaxLength(50, ErrorMessage = "Detta fältet får inte innehålla mer än 50 tecken")]
        [DisplayName("Email")]
        [EmailAddress(ErrorMessage = "Kontrollera att du har angett en giltig E-Mail")]
        public string EmailAddress { get; set; }

    }
}