using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatingApp.Api.Models
{
    public class User : EntityAbstruct
    {
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public Gender Gender { get; set; }
        public int GenderId { get; set; }
        public string KnownAs { get; set; }
        public DateTime DateOfBirth{ get; set;}
        public DateTime LastActivity
        {
            get
            {
                return this.dateCreated.HasValue
                   ? this.dateCreated.Value
                   : DateTime.Now;
            }

            set { this.dateCreated = value; }
        }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interestes { get; set; }
        public City City { get; set; }
        public int CityId { get; set; }
        public ICollection<Photo> Photos { get; set; }

    }
}