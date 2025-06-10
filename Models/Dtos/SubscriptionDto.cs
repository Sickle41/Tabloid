using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models.Dtos;

public class SubscriptionDto
{
    public int Id { get; set; }
    [Required]
    public int UserProfileId { get; set; }
    [Required]
    public int AuthorId { get; set; }
}