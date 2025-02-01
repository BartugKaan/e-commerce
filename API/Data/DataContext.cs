using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

//Primary constructor
public class DataContext(DbContextOptions options) : DbContext(options)
{
  public DbSet<Product> Products => Set<Product>();

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);

    modelBuilder.Entity<Product>().HasData(
      new List<Product>
      {
        new Product {Id=1, Name="Iphone 15", Description="Telefon Açıklaması", ImageUrl="1.jpg", Price=70000, Stock=100, IsActive=true},
        new Product {Id=2, Name="Iphone 16", Description="Telefon Açıklaması", ImageUrl="2.jpg", Price=80000, Stock=100, IsActive=true},
        new Product {Id=3, Name="Iphone 15 Pro", Description="Telefon Açıklaması", ImageUrl="3.jpg", Price=90000, Stock=100, IsActive=false},
        new Product {Id=4, Name="Iphone 16 Pro Max", Description="Telefon Açıklaması", ImageUrl="4.jpg", Price=100000, Stock=100, IsActive=true},
      }
    );
  }
}