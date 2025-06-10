using System.ComponentModel.DataAnnotations;
<<<<<<< HEAD

namespace Tabloid.Models;

public class Subscription
{
    public int Id { get; set; }
    public int UserProfileId { get; set; }
    public int AuthorId { get; set; }
=======
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
>>>>>>> fe42ba5866a158a8e5a6c855fd38aa56eaf2fbd9
}