using Finance.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Finance.WebApi.Controllers
{
    public class FinanceController : ApiController
    {
        private static List<FinanceDetails> messages =
            new List<FinanceDetails>()
            {
                new FinanceDetails()
                {
                    Id = 1,
                    Money = 105,
                    Description = "Продукты"
                },
                new FinanceDetails()
                {
                    Id = 2,
                    Money = 1033,
                    Description = "Лекарства"
                },
                new FinanceDetails()
                {
                    Id = 3,
                    Money = 2750,
                    Description = "Оплата кредита"
                },
                new FinanceDetails()
                {
                    Id = 4,
                    Money = 7200,
                    Description = "Оплата коммунальных услуг"
                },

            };

        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(
                HttpStatusCode.OK,
                messages);
        }

        public HttpResponseMessage Post(FinanceDetails message)
        {
            if (message == null || !ModelState.IsValid)
            {
                return Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest,
                    "Invalid input");
            }
            messages.Add(message);
            return Request.CreateResponse(HttpStatusCode.Created);
        }
    }
}
