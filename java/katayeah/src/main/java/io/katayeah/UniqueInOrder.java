package io.katayeah;

import java.util.ArrayList;
import java.util.List;

public class UniqueInOrder {
	public static void main(String[] args) {
		List<Character> result = getresult("AAAABBBCCDAABBB");
		for (Character character : result) {
			System.out.println(character);
		}
	}

	private static List<Character> getresult(String input) {
		if (input == null || input.length() == 0) {
			return null;
		}
		List<Character> result = new ArrayList<Character>();
		char[] charArr = input.toCharArray();
		result.add(charArr[0]);
		for (int i = 0; i < charArr.length - 1; i++) {
			if (charArr[i] != charArr[i + 1]) {
				result.add(charArr[i + 1]);
			}
		}
		return result;
	}
}
