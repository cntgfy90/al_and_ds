package al.com.sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.stream.IntStream;

public class MergeSort {
    public static void main(String args[]) throws IOException {
        ArrayList<Integer> intArray = new ArrayList<Integer>();
        
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        do {
            System.out.println("Print an integer to push the a list:");
            int value = Integer.parseInt(reader.readLine());
            intArray.add(value);
            System.out.println("Do you want to put more values? (yes / no)");            
            String shouldPutMore = reader.readLine();
            if (shouldPutMore.equals("no")) break;
        } while (true);

        System.out.println(intArray);
    }

    public Integer[] mergeSort(Integer array[]) {
        if (array.length == 0) {
            return array;
        }

        int middle = array.length / 2;

        int[] ls = IntStream
            .range(0, middle)
            .map(i -> array[i])
            .toArray();

        ArrayList<Integer> leftSlice = new ArrayList<Integer>();
        IntStream
            .range(0, middle)
            .forEach(i -> leftSlice.add(i));
        
        int[] rightSlice = IntStream
            .range(middle, array.length - 1)
            .map(i -> array[i])
            .toArray();
        
        merge(leftSlice, rightSlice);
    }

    public int[] merge(int leftSlice[], int rightSlice[]) {
        ArrayList<Integer> result = new ArrayList<Integer>();

        while(leftSlice.length && rightSlice.length) {
            if (leftSlice[0] > rightSlice[0]) {
                result.add(rightSlice.);
            }
        }
    }
}

// Check if array is 1 item
    // If yes --> return

    // Otherwise find middle, left, right
    // Call mergeSort for every piece (left,right)
    // Call merge

// MERGE
// Create new list
// Push items to list in sorted order