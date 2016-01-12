package com.himexubi.hello;

import org.junit.Before;
import org.junit.Test;
import static junit.framework.Assert.assertEquals;


/**
 * Created by root on 12/01/16.
 */


public class SubjectTest{

    private Subject subject;

    @Before
    public void setUp(){
        System.out.println("in before");
        subject = new Subject();
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