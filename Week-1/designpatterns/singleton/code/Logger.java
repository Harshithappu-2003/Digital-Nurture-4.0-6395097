/**
 * Logger.java
 * 
 * This class implements the Singleton Design Pattern.
 * Ensures only one instance of Logger is used throughout the application
 * lifecycle.
 */
public class Logger {
    // Step 1: Private static instance with volatile for thread safety
    private static volatile Logger instance;

    // Step 2: Private constructor to prevent external instantiation
    private Logger() {
        System.out.println("Logger instance created");
    }

    // Step 3: Public static method to return the singleton instance
    public static Logger getInstance() {
        if (instance == null) {
            // Synchronized block to ensure only one thread creates the instance
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    // Step 4: Method to simulate logging
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}
