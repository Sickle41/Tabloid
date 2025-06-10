using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models.Dtos;

public class PostTagDto
{
    public int Id { get; set; }
    [Required]
    public int TagId { get; set; }
    [Required]
    public int PostId { get; set; }
}