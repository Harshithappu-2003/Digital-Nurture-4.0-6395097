public class Forecast {

    // Recursive method to calculate future value
    public static double calculateFutureValueRecursive(double principal, double rate, int years) {
        if (years == 0)
            return principal;
        return calculateFutureValueRecursive(principal, rate, years - 1) * (1 + rate);
    }

    // Memoized version to optimize recursive calls
    public static double calculateFutureValueMemo(double principal, double rate, int years, double[] memo) {
        if (years == 0)
            return principal;
        if (memo[years] != 0)
            return memo[years];
        memo[years] = calculateFutureValueMemo(principal, rate, years - 1, memo) * (1 + rate);
        return memo[years];
    }

    public static void main(String[] args) {
        double initialInvestment = 1000.0;
        double annualGrowthRate = 0.05; // 5%
        int years = 10;

        // Recursive calculation
        double futureValueRecursive = calculateFutureValueRecursive(initialInvestment, annualGrowthRate, years);

        // Memoized calculation
        double[] memo = new double[years + 1];
        double futureValueMemo = calculateFutureValueMemo(initialInvestment, annualGrowthRate, years, memo);

        // Output (using INR instead of ₹ for compatibility)
        System.out.printf("Recursive Future Value after %d years: INR %.2f%n", years, futureValueRecursive);
        System.out.printf("Memoized Future Value after %d years: INR %.2f%n", years, futureValueMemo);
    }
}
