# QR Code Scanner Project

Este é um projeto simples para leitura de QR Codes utilizando JavaScript e a webcam do navegador. O sistema exibe o valor do QR Code detectado em tempo real na página.

## Funcionalidades
- Acesso à webcam para leitura de QR Codes.
- Decodificação de QR Codes em tempo real.
- Exibição do valor do QR Code detectado na tela.

## Tecnologias Utilizadas
- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização da interface.
- **JavaScript**: Lógica para acessar a webcam e decodificar QR Codes.
- **[jsQR](https://github.com/cozmo/jsQR)**: Biblioteca para leitura e decodificação de QR Codes.

## Pré-requisitos
Para executar este projeto, você precisará de:
- Um navegador moderno (como Chrome, Edge ou Firefox) com suporte a API `getUserMedia` para acesso à webcam.
- Conexão à internet para carregar a biblioteca `jsQR` via CDN ou acesso ao arquivo local.

## Estrutura do Projeto
QrCodeScanner/ │ ├── index.html # Página principal do projeto ├── style.css # Estilos para a interface ├── script.js # Código JavaScript para leitura de QR Codes ├── README.md # Documentação do projeto

## Dependências
1. **jsQR**: Biblioteca para leitura e decodificação de QR Codes.
   - Adicionada via CDN no arquivo `index.html`:
     ```html
     <script src="https://cdn.jsdelivr.net/npm/jsqr/dist/jsQR.min.js"></script>
     ```

## Como Usar
1. Clone ou faça o download deste repositório.
2. Abra o arquivo `index.html` em um navegador compatível.
3. Permita o acesso à webcam quando solicitado.
4. Aponte a câmera para um QR Code. O valor será exibido na página.

## Possíveis Erros e Soluções
### **Erro:** "A câmera não foi detectada."
- Certifique-se de que seu dispositivo tem uma câmera conectada e configurada.
- Verifique se o navegador tem permissão para acessar a webcam.

### **Erro:** "Nenhum QR Code foi detectado."
- Certifique-se de que o QR Code está dentro do campo de visão da câmera.
- Certifique-se de que o QR Code é legível e possui contraste suficiente.

## Licença
Este projeto é de uso livre e aberto para modificações. Utilize e adapte conforme necessário. 😊

