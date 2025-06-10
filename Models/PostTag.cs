using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class PostTag
    {
        public int Id { get; set; }
        [Required]
        public int TagId { get; set; }
        [Required]
        public int PostId { get; set; }
        public Tag? Tag { get; set; }
        public Post? Post { get; set; }
    }
}