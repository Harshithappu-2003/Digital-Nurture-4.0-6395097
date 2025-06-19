
public class TestLogger {
    public static void main(String[] args) {
        // Get logger instances
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Verify singleton behavior
        System.out.println("Are both instances the same? " + (logger1 == logger2));

        // Test logging
        logger1.log("First log message");
        logger2.log("Second log message");
    }
}
