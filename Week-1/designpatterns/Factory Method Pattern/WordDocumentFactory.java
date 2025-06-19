public class WordDocumentFactory implements DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}
