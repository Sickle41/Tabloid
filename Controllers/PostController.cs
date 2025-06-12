using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Text;
using Tabloid.Models;
using Tabloid.Data;
using Tabloid.Models.Dtos;
using Microsoft.EntityFrameworkCore;

namespace Tabloid.Controllers
{
    [ApiController]
    [Route("api/[controller]s")]
    public class PostController : ControllerBase
    {
        private TabloidDbContext _dbContext;
        public PostController(TabloidDbContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var posts = _dbContext.Posts
                .Include(p => p.Category)
                .Include(p => p.UserProfile)
                .Select(post => new PostDto
                {
                    Id = post.Id,
                    UserId = post.UserId,
                    Title = post.Title,
                    SubTitle = post.SubTitle,
                    CategoryId = post.CategoryId,
                    Category = post.Category != null ? new CategoryDto
                    {
                        Id = post.Category.Id,
                        Name = post.Category.Name
                    } : null,
                    PublishingDate = post.PublishingDate,
                    HeaderImage = post.HeaderImage,
                    Body = post.Body,
                    UserProfile = post.UserProfile != null ? new UserProfileDto
                    {
                        Id = post.UserProfile.Id,
                        FirstName = post.UserProfile.FirstName,
                        LastName = post.UserProfile.LastName,
                    } : null
                })
                .ToList();

            return Ok(posts);
        }
        [HttpPost]
        [Authorize]

        public IActionResult CreatePost(Post post)
        {
            post.PublishingDate = DateTime.Now;
            _dbContext.Posts.Add(post);
            _dbContext.SaveChanges();
            return Created($"/api/post/{post.Id}", post);
        }

        [HttpDelete("{id}")]
        [Authorize]

        public IActionResult DeletePost(int id)
        {
            var post = _dbContext.Posts.SingleOrDefault(p => p.Id == id);
            if (post == null)
            {
                return NotFound();
            }
            _dbContext.Remove(post);
            _dbContext.SaveChanges();

            return NoContent();
        }

        [HttpGet("{id}")]
        public IActionResult GetPostById(int id)
        {
            var post = _dbContext.Posts
                .Include(p => p.Category)
                .Include(p => p.UserProfile)
                .FirstOrDefault(p => p.Id == id);

            if (post == null)
            {
                return NotFound();
            }

            var postDto = new PostDto
            {
                Id = post.Id,
                UserId = post.UserId,
                Title = post.Title,
                SubTitle = post.SubTitle,
                CategoryId = post.CategoryId,
                Category = post.Category == null ? null : new CategoryDto
                {
                    Id = post.Category.Id,
                    Name = post.Category.Name
                },
                PublishingDate = post.PublishingDate,
                HeaderImage = post.HeaderImage,
                Body = post.Body,
                UserProfile = post.UserProfile == null ? null : new UserProfileDto
                {
                    Id = post.UserProfile.Id,
                    FirstName = post.UserProfile.FirstName,
                    LastName = post.UserProfile.LastName
                }
            };

            return Ok(postDto);
        }

    }

}