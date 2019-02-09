using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Finance.WebApi.Models
{
    public class FinanceDetails
    {
        [Required]
        public long Id { get; set; }

        [Required]
        public decimal Money { get; set; }

        [Required]
        public string Description { get; set; }
    }
}