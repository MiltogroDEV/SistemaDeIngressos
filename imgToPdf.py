import os
import img2pdf

pastaImg = 'qrCodes'
pastaSaida = 'pdfs'

os.makedirs(pastaSaida, exist_ok=True)

for arquivo in os.listdir(pastaImg):
    if arquivo.endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
        caminhoImagem = os.path.join(pastaImg, arquivo)
        
        nomePdf = os.path.splitext(arquivo)[0] + '.pdf'
        caminhoPdf = os.path.join(pastaSaida, nomePdf)

        with open(caminhoPdf, 'wb') as f:
            f.write(img2pdf.convert(caminhoImagem))
