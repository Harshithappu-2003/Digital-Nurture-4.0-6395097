import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return productId + " - " + productName + " (" + category + ")";
    }
}

public class SearchDemo {

    // Linear search by product name
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    // Binary search by product name (array must be sorted)
    public static Product binarySearch(Product[] products, String name) {
        int low = 0, high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);
            if (cmp == 0)
                return products[mid];
            else if (cmp < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Book", "Stationery")
        };

        // Linear Search
        System.out.println(" Linear Search:");
        Product result1 = linearSearch(products, "Watch");
        System.out.println(result1 != null ? "Found: " + result1 : "Product not found");

        // Sort for binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        // Binary Search
        System.out.println("\n Binary Search:");
        Product result2 = binarySearch(products, "Watch");
        System.out.println(result2 != null ? "Found: " + result2 : "Product not found");
    }
}
