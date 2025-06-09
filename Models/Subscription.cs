using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models;

public class Subscription
{
    public int Id { get; set; }
    public int UserProfileId { get; set; }
    public int AuthorId { get; set; }
}