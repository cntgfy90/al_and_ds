package al.com.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class MergeSort {
    public static void main(String args[]) throws IOException {
        ArrayList<Integer> intArray = new ArrayList<Integer>();
        
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        
        String shouldPrintMore = "";

        while(true) {
            System.out.println("Do you want to put more values? (yes / no)");
            shouldPrintMore = reader.readLine();
            System.out.println("Print an integer to push the a list:");
            intArray.add(reader.read());
        }

        System.out.println(intArray);
    }

    public Integer[] mergeSort(Integer array[]) {
        if (array.length == 0) {
            return array;
        }

        int middle = array.length / 2;
    }
}