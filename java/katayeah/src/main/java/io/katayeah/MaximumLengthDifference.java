package io.katayeah;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MaximumLengthDifference {
	public static void main(String[] args) {
		int result = mxdiflg(new String[] { "hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt",
				"znnnnfqknaz", "qqquuhii", "dvvvwz" },
				new String[] { "cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww" });
		System.out.println(result);
	}

	private static int mxdiflg(String[] strings, String[] strings2) {
		if (strings.length == 0 || strings2.length == 0)
			return -1;
		List<String> list1 = Arrays.asList(strings);
		List<String> list2 = Arrays.asList(strings2);
		List<Integer> int1 = list1.stream().map(e -> e.length()).collect(Collectors.toList());
		System.out.println(int1);
		List<Integer> int2 = list2.stream().map(e -> e.length()).collect(Collectors.toList());
		if ((int1.stream().max(Integer::max).get()
				- int2.stream().min(Integer::max).get()) > (int2.stream().max(Integer::max).get()
						- int1.stream().min(Integer::max).get()))
			return (int1.stream().max(Integer::max).get() - int2.stream().min(Integer::max).get());
		else
			return (int2.stream().max(Integer::max).get() - int1.stream().min(Integer::max).get());

	}
}
