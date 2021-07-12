const cpfMask = (cpf, undo) => {
  if (!undo) {
    cpf = cpf.replace(/[^\d\.-]/g, "");

    cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  } else cpf = cpf.replace(/[^\d]/g, "");

  return cpf;
};

const telMask = (tel, undo) => {
  if (!undo) {
    tel = tel.replace(/[^\d\-() ]/g, "");

    tel = tel.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else tel = tel.replace(/[^\d]/g, "");

  return tel;
};
