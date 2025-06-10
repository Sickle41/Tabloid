using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tabloid.Models
{
    public class Subscription
    {
        public int Id { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        [Required]
        public int AuthorId { get; set; }

        [ForeignKey("UserProfileId")]
        public UserProfile? UserProfile { get; set; }

        [ForeignKey("AuthorId")]
        public UserProfile? AuthorProfile { get; set; }
    }
}