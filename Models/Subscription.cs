using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class Subscription
    {
        public int Id { get; set; }
        [Required]
        public int UserProfileId { get; set; }
        [Required]
        public int AuthorId { get; set; }
        public UserProfile? UserProfile { get; set; }
        public UserProfile? AuthorProfile { get; set; }
    }
}