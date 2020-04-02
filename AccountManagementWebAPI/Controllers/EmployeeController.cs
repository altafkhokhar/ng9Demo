using AccountManagementWebAPI.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace AccountManagementWebAPI.Controllers
{

  [ApiController]
    public class EmployeeController : ControllerBase
    {



    [HttpGet]
    [Route("[controller]/employees")]

    public IEnumerable<Employee> Get()
    {
        IEnumerable<Employee> obj;

        Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:4200");

      try
        {
          var folderDetails = Path.Combine(Directory.GetCurrentDirectory(), $"Data.json");
          var JSON = System.IO.File.ReadAllText(folderDetails);

          obj = Newtonsoft.Json.JsonConvert.DeserializeObject<IEnumerable<Employee>>(JSON);
        
        }
        catch (Exception ex)
        {
          return null;

        }

        return obj;
    }


    [HttpGet]
    [Route("[controller]/detail/{id}")]
    public Employee GetEmployee(string id)
    {
      Employee employee = null;

      Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:4200");

      try
      {
        var folderDetails = Path.Combine(Directory.GetCurrentDirectory(), $"Data.json");
        var JSON = System.IO.File.ReadAllText(folderDetails);

        IEnumerable<Employee> employees = Newtonsoft.Json.JsonConvert.DeserializeObject<IEnumerable<Employee>>(JSON);
        employee = employees.Where(wh => wh.id == id).FirstOrDefault();
      }
      catch (Exception ex)
      {
        return employee;
      }

      return employee;
      }

    }
}
