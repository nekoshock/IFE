package process;
import java.io.*;
import java.util.*;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;

public class item {
	public static void main(String[] arg) throws Exception{
//		打开文件,通过正则匹配位置得到信息
		Workbook excel = new HSSFWorkbook();
		FileOutputStream fileOut = new FileOutputStream("D:\\TASK\\JAVA\\Demo1.xls");
//		新建对象,将读取的内容输入对象中.
		excel.createSheet("第一页");
		excel.write(fileOut);
		fileOut.close();
	}
	class ItemAttr{
		int sequenceNumber;
		String code;
		String name;
		String positionCode;
		int positionNumber;
		String material;
		String specifications;
		int quantity;
		ArrayList<String> route;
		String notes;
		String processName;
		String processNumber;
		String processPage;
//		ItemAttr(); 怎么定义初始化,需要吗?
	}
}
