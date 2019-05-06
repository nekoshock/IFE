package process;

public class lab {
	public static void main(String[] arg) {
		Pri2 p = new Pri2();
		p.g();
	}
}
class Pri1 {
	int d=3;
	private void f() {
		System.out.println("pri1.f() "+d);
	}
	public void g() {
		f();
	}
}

class Pri2 extends Pri1 {
	private void f() {
		System.out.println("pri2.f()"+d);
	}
	public void g() {
		f();
	}
}