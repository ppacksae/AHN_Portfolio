import fitz  # PyMuPDF
import sys

doc = fitz.open(sys.argv[1])
for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=150)
    pix.save(f'pdf_page_{i}.png')
    print(page.get_text())
