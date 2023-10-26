
public class Pangram {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String sentence = "This is a sunny day";
		boolean isPangram = checkIfPangram(sentence);
		System.out.println(isPangram ? "It's a pangram!" : "It's not a pangram");
	}

	private static boolean checkIfPangram(String sentence) {
		// TODO Auto-generated method stub
		boolean[] isPresent = new boolean[26];
		for(char c : sentence.toCharArray())
		{
			if(c>= 'a' && c <= 'z')
			{
				isPresent[c- 'a']=true;
			}
		}
		for(boolean present : isPresent)
		{
			if(!present) {
				return false;
			}
		}
		return true;
	}

}
