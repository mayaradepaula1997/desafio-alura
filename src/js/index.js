// Selecionar elementos do DOM
const textarea = document.querySelector(".input-texto");
const criptografarBtn = document.querySelector(".botao-criptografar");
const descriptografarBtn = document.querySelector(".botao-descriptografar");
const copiarBtn = document.querySelector(".botao-copiar");
const resultText = document.querySelector(".text-result");
const semResultado = document.querySelector(".sem-resultado");

function criptografarTexto(texto) {
  let textoCriptografado = texto.replace(/e/g, "enter");
  textoCriptografado = textoCriptografado.replace(/i/g, "imes");
  textoCriptografado = textoCriptografado.replace(/a/g, "ai");
  textoCriptografado = textoCriptografado.replace(/o/g, "ober");
  textoCriptografado = textoCriptografado.replace(/u/g, "ufat");

  return textoCriptografado;
}

// Função para descriptografar texto
function descriptografarTexto(textoCriptografado) {
  let texto = textoCriptografado.replace(/ufat/g, "u");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/enter/g, "e");

  return texto;
}

// Evento de clique no botão Criptografar
criptografarBtn.addEventListener("click", () => {
  const texto = textarea.value.trim();
  if (texto) {
    const textoCriptografado = criptografarTexto(texto);
    exibirResultado(textoCriptografado);
  } else {
    exibirResultado('');
  }
});

// Evento de clique no botão Descriptografar
descriptografarBtn.addEventListener("click", () => {
  const textoCriptografado = textarea.value.trim();
  if (textoCriptografado) {
    const textoDescriptografado = descriptografarTexto(textoCriptografado);
    exibirResultado(textoDescriptografado);
  }
});

// Evento de clique no botão Copiar
copiarBtn.addEventListener("click", () => {
  const textoResultado = resultText.textContent;
  copiarTextoParaClipboard(textoResultado);
});

// Função para exibir o resultado na interface
function exibirResultado(texto) {
  resultText.textContent = texto;
  
  if (texto) {
    // Se houver texto, esconda a div sem-resultado
    semResultado.style.display = "none";
    copiarBtn.style.display = "block";
  } else {
    // Caso contrário, mostre a div sem-resultado
    semResultado.style.display = "flex";
    copiarBtn.style.display = "none";
  }
}

// Função para copiar texto para a área de transferência
function copiarTextoParaClipboard(texto) {
  const textareaTemp = document.createElement("textarea");
  textareaTemp.value = texto;
  document.body.appendChild(textareaTemp);
  textareaTemp.select();
  document.execCommand("copy");
  document.body.removeChild(textareaTemp);
}
