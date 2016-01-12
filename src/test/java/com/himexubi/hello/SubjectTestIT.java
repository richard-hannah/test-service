package com.himexubi.hello;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;
import static org.junit.Assert.*;

/**
 * Created by root on 12/01/16.
 */
public class SubjectTestIT {
    private Subject subject;
    @Before
    public void setUp() throws Exception {
        System.out.println("in before");
        subject = new Subject();
    }

    @After
    public void tearDown() throws Exception {
        System.out.println("in after");
    }

    @Test
    public void testFoo() throws Exception {
        int bar = subject.Foo();
        assertEquals(3,bar);
    }

    @Test
    public void testAddup() throws Exception {
        int total = subject.addup(1,2,3);
        assertEquals(6,total);

    }
}