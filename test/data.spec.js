import datosRyM from '../src/data';


describe('filterByName', () => {
  it('is a function', () => {    
    expect(typeof datosRyM.filterByName).toBe('function');
  });

  it.skip('returns the correct character(s)', () => {    
    // Arrange
      // Preparar los datos de entrada y lo que esperamos de vuelta de la función
     

    // Act
      // Ejecutar la función, atrapando el valor de retorno

    // Assert
      // Comparar el valor de retorno de la función con el valor esperado inicializado en la etapa de Arrange
  });
});


describe('ordenAZ', () => {
  it('is a function', () => {
    expect(typeof datosRyM.ordenAZ).toBe('function');
  });

  it.skip('returns `datosRyM.ordenAZ`', () => {
    expect(datosRyM.ordenAZ()).toBe('OMG');
  });
});

describe('ordenZA', () => {
  it('is a function', () => {
    expect(typeof datosRyM.ordenZA).toBe('function');
  });

  it.skip('returns `datosRyM.ordenZA`', () => {
    expect(datosRyM.ordenZA()).toBe('OMG');
  });
});