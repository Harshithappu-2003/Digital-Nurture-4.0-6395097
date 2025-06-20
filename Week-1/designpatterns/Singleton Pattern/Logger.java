
public class Logger {
    // Private static instance with volatile for thread safety
    private static volatile Logger instance;

    // Private constructor to prevent external instantiation
    private Logger() {
        System.out.println("Logger instance created");
    }

    // Public static method to return the singleton instance
    public static Logger getInstance() {
        if (instance == null) {

            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    // Method to simulate logging
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}
