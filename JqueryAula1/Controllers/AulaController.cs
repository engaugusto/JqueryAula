using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JqueryAula1.Controllers
{
    public class AulaController : Controller
    {

        public ActionResult Um()
        {
            ViewBag.Resolvido = false;
            return View();
        }

        public ActionResult UmResolvido()
        {
            ViewBag.Resolvido = true;
            return View("Um");
        }

        public ActionResult Dois()
        {
            ViewBag.Resolvido = false;
            return View();
        }

        public ActionResult DoisResolvido()
        {
            ViewBag.Resolvido = true;
            return View("Dois");
        }

        public ActionResult Tres()
        {
            ViewBag.Resolvido = false;
            return View();
        }

        public ActionResult TresResolvido()
        {
            ViewBag.Resolvido = true;
            return View("Tres");
        }

        public ActionResult Quatro()
        {
            return View();
        }

        public void SalvarJson(ObjToSave[] arrayObj)
        {

        }
    }
    public class ObjToSave {
        public string id { get; set; }
        public string campo1 { get; set; }
        public string campo2 { get; set; }
    }
}
