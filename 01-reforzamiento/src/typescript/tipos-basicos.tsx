

export const TiposBasicos = () => {

  const nombre: string  = 'Fernando';  
  const edad: number = 35;

  const estaActivo: boolean = false;

  const poderes = ['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
    <>
        <h3>Tipos basicos</h3>
        { nombre.toLocaleUpperCase() }, { edad }, { (estaActivo) ? 'Activo' : 'NO está activo' }
        <br />
        { poderes.join(', ') }
    </>
  )
}
