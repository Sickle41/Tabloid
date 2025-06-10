using System;
using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class Comment
    {
        public int Id { get; set; }
        [Required]
        public int UserProfileId { get; set; }
        [Required]
        public int PostId { get; set; }
        public DateTime CreatedOnDate { get; set; }
        [Required]
        public string Body { get; set; }
        public UserProfile? UserProfile { get; set; }
        public Post? Post { get; set; }
    }
}