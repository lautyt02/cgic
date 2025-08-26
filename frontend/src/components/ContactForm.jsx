import { useState } from 'react';
import { postContact } from '../lib/api.js';
import { validateContact } from '../lib/validators.js';

const sectors = ['ONG', 'Empresa', 'Gobierno', 'Otro'];

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '', apellido: '', sector: '', institucion: '',
    telefono: '', mail: '', disponible: false, comentario: ''
  });
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateContact(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    try {
      await postContact(form);
      setMessage('¡Gracias! Te contactaremos pronto.');
      setForm({nombre:'', apellido:'', sector:'', institucion:'', telefono:'', mail:'', disponible:false, comentario:''});
      setErrors({});
    } catch (err) {
      setMessage('Ocurrió un error al enviar. Intenta nuevamente.');
    }
  };

  return (
    <section id="contacto" className="py-8">
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">Nombre</label>
              <input name="nombre" value={form.nombre} onChange={handleChange} className="mt-1 w-full border p-2" required />
              {errors.nombre && <p className="text-red-600 text-sm">{errors.nombre}</p>}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">Apellido</label>
              <input name="apellido" value={form.apellido} onChange={handleChange} className="mt-1 w-full border p-2" required />
              {errors.apellido && <p className="text-red-600 text-sm">{errors.apellido}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Sector</label>
            <select name="sector" value={form.sector} onChange={handleChange} className="mt-1 w-full border p-2" required>
              <option value="">Selecciona</option>
              {sectors.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.sector && <p className="text-red-600 text-sm">{errors.sector}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Institución</label>
            <input name="institucion" value={form.institucion} onChange={handleChange} className="mt-1 w-full border p-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Teléfono</label>
            <input name="telefono" value={form.telefono} onChange={handleChange} className="mt-1 w-full border p-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Mail</label>
            <input type="email" name="mail" value={form.mail} onChange={handleChange} className="mt-1 w-full border p-2" />
            {errors.mail && <p className="text-red-600 text-sm">{errors.mail}</p>}
          </div>

          <div className="flex items-center">
            <input type="checkbox" name="disponible" checked={form.disponible} onChange={handleChange} id="disponible" className="mr-2" />
            <label htmlFor="disponible" className="text-sm">Disponible esa fecha</label>
          </div>

          <div>
            <label className="block text-sm font-medium">Comentario</label>
            <textarea name="comentario" value={form.comentario} onChange={handleChange} className="mt-1 w-full border p-2" rows="4"></textarea>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2">Enviar</button>
          {message && <p className="mt-2">{message}</p>}
        </form>
      </div>
    </section>
  );
}
