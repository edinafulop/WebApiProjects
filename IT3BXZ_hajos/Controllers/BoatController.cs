using IT3BXZ_hajos.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IT3BXZ_hajos.Controllers
{
    [HttpGet]
    [Route("questions/all")]
    public IActionResult MindegyHogyHivjak()
    {
        HajosContext context = new HajosContext();
        var kérdések = from x in context.Questions select x.Question1;

        return Ok(kérdések);
    }
}
