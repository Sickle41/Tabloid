using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace Tabloid.Controllers;

[ApiController]
[Route("api/[controller]")]

public class CategoryController : ControllerBase
{
    private TabloidDbContext _dbContext;

    public CategoryController(TabloidDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    [Authorize]

    public IActionResult Get()
    {
        return Ok(_dbContext.Categories.ToList());
    }

    [HttpDelete("{id}")]
    [Authorize]

    public IActionResult DeleteCategory(int id)
    {
        {
            var category = _dbContext.Categories.SingleOrDefault(p => p.Id == id);
            if (category == null)
            {
                return NotFound();
            }
            _dbContext.Remove(category);
            _dbContext.SaveChanges();

            return NoContent();
        }
    }

    [HttpPut("{id}")]
    [Authorize]

    public IActionResult UpdateCategory(int id, Category category)
    {
        Category categoryToUpdate = _dbContext.Categories.SingleOrDefault(wo => wo.Id == id);
    if (categoryToUpdate == null)
    {
        return NotFound();
    }
    else if (id != category.Id)
    {
        return BadRequest();
    }

    //These are the only properties that we want to make editable
    categoryToUpdate.Name = category.Name;
   

    _dbContext.SaveChanges();

    return NoContent();
    }

    [HttpPost]
    [Authorize]
    public IActionResult AddCategory(Category category)
    {
        _dbContext.Categories.Add(category);
        _dbContext.SaveChanges();

        return Created($"/api/category/{category.Id}", category);
    }
}