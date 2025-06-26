package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

/**
 * Test class for the Calculator class.
 */
public class CalculatorTest {
    private static final int THREE = 3;
    private static final int FIVE = 5;
    private final Calculator calculator = new Calculator();

    /**
     * Tests the addition functionality of the Calculator class.
     */
    @Test
    void testAddition() {
        assertEquals(THREE + FIVE, calculator.add(THREE, FIVE));
    }
}