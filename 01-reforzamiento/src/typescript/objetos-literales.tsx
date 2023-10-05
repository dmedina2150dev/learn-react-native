
interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: {
    pais: string;
    casNo: number;
  }
}


export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'Fernando',
    edad: 35,
    direccion: {
      pais: 'Canada',
      casNo: 562
    }
  }

  // TODO: Esto se permite solo en Javascript pero no se deberia hacer en TypeScript
  // persona.nombreCompleto = '1234';

  return (
    <>
      <h3>Objetos Literales</h3>

      <pre>
        {JSON.stringify(persona, null, 2)}
      </pre>
    </>
  )
}
