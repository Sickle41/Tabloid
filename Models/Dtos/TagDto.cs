using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models.Dtos;

public class TagDto
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
}