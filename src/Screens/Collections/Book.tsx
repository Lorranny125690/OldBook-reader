import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFilePdf } from "react-icons/fa";

const TranscribePage = () => {
  const [index, setIndex] = useState(Number);

  const handlePrevious = () => {
    if(index > 0)
    setIndex((prevIndex) => prevIndex - 1);  // Decrementa o índice
  };

  const handleNext = () => {
    setIndex((prevIndex) => prevIndex + 1);  // Incrementa o índice
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      <main className="flex flex-row mt-10 p-8 gap-8">
        {/* Imagem do documento */}
        <div className="w-1/2 bg-gray-800 p-4 rounded-lg">
          <img
            src="https://i.pinimg.com/736x/ef/27/07/ef2707f278cac200943fcea2a290244d.jpg"
            alt="Document Manuscript"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Transcrição */}
        <div className="w-1/2 bg-gray-800 p-4 rounded-lg">
          <div className="overflow-auto h-full">
            <p className="text-sm text-gray-300">
            A relação entre **Sonic** e **Amy Rose** é uma das mais conhecidas no universo dos videogames, especialmente dentro da franquia **Sonic the Hedgehog**, criada pela **Sega**. Amy é uma personagem recorrente nos jogos da série e é apaixonada por Sonic, algo que a torna uma figura única na vida do ouriço azul.

Aqui está um texto que aborda a dinâmica entre Sonic e Amy:

---

**A Dinâmica Entre Sonic e Amy Rose: Uma Amizade com Toques de Romance**

A relação entre **Sonic the Hedgehog** e **Amy Rose** é uma das mais notáveis e, ao mesmo tempo, um tanto complicadas do universo dos jogos. Desde sua primeira aparição em *Sonic CD* (1993), Amy sempre demonstrou um grande afeto por Sonic, vendo-o como seu herói e, em muitos momentos, apaixonando-se por ele. Sua dedicação e devoção a Sonic são evidentes, mas a resposta do ouriço nem sempre é a que Amy espera.

Sonic, conhecido por seu espírito aventureiro e seu amor pela liberdade, muitas vezes age de forma indiferente às investidas românticas de Amy. Ele a vê como uma amiga e se preocupa com ela, mas sua prioridade continua sendo salvar o mundo e correr a toda velocidade. Isso cria uma tensão interessante, pois Amy não desiste facilmente de seus sentimentos. Ela é persistente e, ao longo dos anos, tem mostrado que seu carinho por Sonic é genuíno e forte, mesmo que o ouriço não tenha correspondido completamente.

Essa dinâmica, contudo, não é exclusivamente sobre amor não correspondido. Ao longo das aventuras, Sonic e Amy desenvolvem uma forte amizade. Sonic pode não se envolver romanticamente com Amy da maneira que ela gostaria, mas ele a respeita como uma aliada valiosa. Em vários jogos, Amy demonstra ser uma personagem corajosa, que luta ao lado de Sonic e seus amigos para enfrentar os desafios. Ela é muitas vezes retratada como uma guerreira determinada, que nunca deixa de lutar por aquilo em que acredita.

Ao mesmo tempo, Sonic, por sua parte, aprende a valorizar mais as pessoas ao seu redor, e embora não esteja tão interessado em um relacionamento romântico, sua interação com Amy revela uma camada mais profunda de sua personalidade. Ele pode ser um herói que corre o tempo todo, mas no fundo, ele também reconhece a importância de ter amigos que o apoiam.

A relação entre Sonic e Amy também é explorada em vários outros meios, como quadrinhos, séries de TV e outros jogos da franquia, e é claro que, apesar das diferenças de abordagem, há sempre uma amizade de base que os une.

---

Esse é um resumo da relação deles. Como você vê, ela é muito mais sobre amizade e respeito do que uma história de amor convencional, mas com muito carinho e momentos cativantes. Você curte a relação deles ou acha que poderia ser diferente?
            </p>
            {/* Add more transcribed text as needed */}
          </div>
        </div>
      </main>

      {/* Navegação inferior */}
      <footer className="flex justify-center flex-col items-center p-6 border-t border-gray-700">
        <div className="text-gray-300 text-sm">
          {index}
        </div>
        <div className="flex flex-row gap-4">
          <button onClick={() => handlePrevious()}className="text-blue-400 hover:text-blue-600 flex items-center gap-1">
            <FaChevronLeft size={20} />
            Anterior
          </button>
          <button onClick={() => handleNext()} className="text-blue-400 hover:text-blue-600 flex items-center gap-1">
            Próximo
            <FaChevronRight size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default TranscribePage;
