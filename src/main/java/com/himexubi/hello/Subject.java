package com.himexubi.hello;

/**
 * Created by root on 12/01/16.
 */
public class Subject {

    public int Foo(){
        return 3;
    }


    public int addup(int... args){

        int total = 0;
        for(int i = 0; i < args.length;i++){
            total+=args[i];
        }
        return total;
    }

}
