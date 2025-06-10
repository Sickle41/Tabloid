using System;
using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models.Dtos;

public class PostDto
{
    public int Id { get; set; }
    [Required]
    public int UserId { get; set; }
    [Required]
    public string Title { get; set; }
    public string SubTitle { get; set; }
    [Required]
    public int CategoryId { get; set; }
    public DateTime PublishingDate { get; set; }
    public string? HeaderImage { get; set; }
    [Required]
    public string Body { get; set; }
}