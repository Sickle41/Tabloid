using System;
using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models.Dtos;

public class CommentDto
{
    public int Id { get; set; }
    [Required]
    public int UserProfileId { get; set; }
    [Required]
    public int PostId { get; set; }
    public DateTime CreatedOnDate { get; set; }
    [Required]
    public string Body { get; set; }
}