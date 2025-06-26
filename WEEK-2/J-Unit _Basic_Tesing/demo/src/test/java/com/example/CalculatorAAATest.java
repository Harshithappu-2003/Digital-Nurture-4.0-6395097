package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CalculatorAAATest {

    private Calculator calculator;

    @BeforeEach
    public void setUp() {
        // Arrange: Setup before each test
        calculator = new Calculator();
        System.out.println("Setup: Calculator instance created.");
    }

    @AfterEach
    public void tearDown() {
        // Cleanup after each test
        calculator = null;
        System.out.println("Teardown: Calculator instance cleaned up.");
    }

    @Test
    public void testAddition() {
        // Arrange: Already done in setup()

        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        // Act
        int result = calculator.subtract(5, 2);

        // Assert
        assertEquals(3, result);
    }
}
