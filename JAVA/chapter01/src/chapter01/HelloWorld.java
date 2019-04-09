package chapter01;

public class HelloWorld {
	public static void main(String[] args) {
		System.out.println("hello world!");
		Sub1 ob = new Super();
		System.out.println(ob.a);
		System.out.println(ob.b);
	}
}

class Sub1 {
	String a = "sub";
	String b = "top";
}
class Super extends Sub1 {
	String a = "super";
	String b = "super2";
}