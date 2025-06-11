using Microsoft.AspNetCore.Identity;

namespace Tabloid.Models.Dtos;

public class UserProfileDto
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string IdentityUserId { get; set; }
    public IdentityUser IdentityUser { get; set; }
}