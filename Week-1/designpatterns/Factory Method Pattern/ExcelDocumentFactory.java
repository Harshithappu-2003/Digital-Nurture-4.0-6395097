public class ExcelDocumentFactory implements DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}
