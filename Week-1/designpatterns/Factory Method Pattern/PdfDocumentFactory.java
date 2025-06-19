public class PdfDocumentFactory implements DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}
