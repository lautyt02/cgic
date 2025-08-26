export function validateContact(data) {
  const errors = {};
  if (!data.nombre) errors.nombre = 'Requerido';
  if (!data.apellido) errors.apellido = 'Requerido';
  if (!data.sector) errors.sector = 'Requerido';
  if (data.mail && !/^[^@]+@[^@]+\.[^@]+$/.test(data.mail)) errors.mail = 'Email inválido';
  return errors;
}
