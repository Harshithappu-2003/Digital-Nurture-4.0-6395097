
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
