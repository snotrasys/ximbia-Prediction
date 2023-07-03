import { useEffect } from 'react';

const Xinfo = () => {

  useEffect(() => {
    // Obtén el elemento del iframe por su ID
    const iframe = document.getElementById("idbook");

    // Verifica si se encontró el iframe
    if (iframe) {
      // Accede al contenido del iframe
      const iframeDocument = iframe?.contentDocument || iframe?.contentWindow.document;

      // Obtén el elemento con el enlace dentro del iframe
      const linkElement = iframeDocument.querySelector('a[href="/bsc/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"]');

      // Verifica si el elemento contiene el texto "Tracked by" dentro del iframe
      if (linkElement && linkElement.innerText.includes("Tracked by")) {
        // Elimina el nodo completo dentro del iframe
        console.log("Entro aqui");
        linkElement.remove();
      }
    }
  }, []);

  return (
    <>
    <a className='bg-[#540070] text-white rounded-lg px-3.5 py-2.5 mt-20 ' href="/">
Regresar
    </a>
      <div className='mt-8' id="dexscreener-embed">
        <iframe
          id="idbook"
          src="https://dexscreener.com/bsc/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c?embed=1&theme=dark&info=1"
        ></iframe>
      </div>
    </>
  );
};

export default Xinfo;
