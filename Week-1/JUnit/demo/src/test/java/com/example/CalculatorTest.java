package com.example;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.Calculator;

/**
 * Unit test for simple App.
 */
public class CalculatorTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void testAdd()
    {
       Calculator calculator = new Calculator();

    int result = calculator.add(2, 3);

    System.out.println("Result = " + result);

    assertEquals(5, result);
    }
}
