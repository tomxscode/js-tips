// Código con condiciones (if)
function queHacerIf(hora) {
  if (hora == 8) {
    console.log('Despertar');
  }
  else if (hora == 9) {
    console.log('Desayunar');
  }
  else if (hora == 12) {
    console.log('Almorzar');
  }
  else if (hora == 16) {
    console.log('Estudiar');
  }
}

queHacerIf(12)

// Código con Lookout map
function queHacerLM(hora) {
  const queHacer = {
    8: console.log('Despertar'),
    9: console.log('Desayunar'),
    12: console.log('Almorzar'),
    16: console.log('Estudiar'),
  };
  if (queHacer[hora]) {
    queHacer[hora]();
  }
}

queHacerLM(8)