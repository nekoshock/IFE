package process;
import java.io.*;
import java.util.*;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;

public class item {
	public static void main(String[] arg) throws Exception{
//		���ļ�,ͨ������ƥ��λ�õõ���Ϣ
		Workbook excel = new HSSFWorkbook();
		FileOutputStream fileOut = new FileOutputStream("D:\\TASK\\JAVA\\Demo1.xls");
//		�½�����,����ȡ���������������.
		excel.createSheet("��һҳ");
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
//		ItemAttr(); ��ô�����ʼ��,��Ҫ��?
	}
}
