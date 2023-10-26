
public class RomanToInt {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String n = "IX";
		int ans = romanToInt(n);
		System.out.println(ans);
		

	}

	private static int romanToInt(String a) {
		// TODO Auto-generated method stub
		int ans=0;
		int prev=0;
		for(int i=a.length()-1;i>=0;i--)
		{
			char c=a.charAt(i);
			int val = romanDigitValue(c);
			if(val < prev)
			{
				ans -= val;
			}
			else
			{
				ans+=val;
			}
			prev=val;
			
		}
		return ans;
	}

	private static int romanDigitValue(char c) {
		// TODO Auto-generated method stub
		switch(c) {
		case 'I':
			return 1;
		case 'V':
			return 5;
		case 'X':
			return 10;
		case 'L':
			return 50;
		case 'C':
			return 100;
		case 'D':
			return 500;
		case 'M':
			return 1000;
		default:
			return 0;
		}
	}

}
