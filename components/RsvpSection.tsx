import React, { useState } from "react";

// --- CONFIGURACIÓN DE GOOGLE FORMS ---
// Para conectar a tu Hoja de Cálculo:
// 1. Crea un Google Form.
// 2. En "Respuestas", haz clic en el icono de Google Sheets para crear la hoja vinculada.
// 3. Inspecciona tu formulario (o usa "Obtener enlace pre-rellenado") para sacar los IDs "entry.XXXXX".
// 4. Pega la URL del "action" y los IDs abajo.

const FORM_CONFIG = {
  RSVP: {
    // URL que termina en /formResponse
    actionUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScPKMFOnwLPChgOx_x2Ug0-mpIpjm0a_77uag4o-NYMopoXSw/formResponse",
    fields: {
      name: "entry.1120823995", // ID del campo Nombre Completo
      phone: "entry.1540491781", // ID del campo Numero de teléfono
      relationship: "entry.1045150348", // ID del campo Parentesco
      guests: "entry.211899016", // ID del campo Nº Invitados
      attendance: "entry.100957132", // ID del campo Asistencia
    },
  },
  ALLERGENS: {
    actionUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSc_BRVuOQ8a9njESWonjRxK46_VDLtLO17cfB861efTwSC64g/formResponse",
    fields: {
      name: "entry.1099133302", // ID del campo Nombre del invitado
      restrictions: "entry.765343371", // ID del campo Alergenos (checkboxes)
      notes: "entry.1577122403", // ID del campo Notas Adicionales
    },
  },
};

const RsvpSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"rsvp" | "allergens">("rsvp");
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    url: string,
  ) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Usamos mode: 'no-cors' para enviar datos a Google Forms sin error de seguridad.
      // Nota: Google devuelve una respuesta opaca, así que asumimos éxito si no hay error de red.
      await fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // Simular un pequeño tiempo de carga para mejor UX
      setTimeout(() => {
        setSubmissionStatus("success");
        form.reset();
        // Reset status after 5 seconds to allow another submission
        setTimeout(() => setSubmissionStatus("idle"), 5000);
      }, 1000);
    } catch (err) {
      console.error("Error submitting form", err);
      setSubmissionStatus("error");
    }
  };

  return (
    <section
      id="rsvp"
      className="py-16 md:py-24 px-4 bg-brand-beige relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#BFA15F 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="material-symbols-outlined text-brand-gold text-4xl md:text-5xl mb-4 md:mb-6">
          mark_email_unread
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-stone mb-4 md:mb-6 px-4">
          ¿Nos acompañas?
        </h2>
        <p className="text-brand-text text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto px-4">
          Por favor, confirma tu asistencia para nuestra boda en{" "}
          <strong>Café del Río</strong>.
          <br className="hidden sm:block" />
          <span className="hidden sm:inline"> </span>
          <span className="block sm:inline mt-1 sm:mt-0">
            Todos los datos se guardan automáticamente en nuestra lista de
            invitados.
          </span>
        </p>

        {/* Tab Switcher */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
          <button
            onClick={() => {
              setActiveTab("rsvp");
              setSubmissionStatus("idle");
            }}
            className={`px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "rsvp"
                ? "bg-brand-gold text-white shadow-lg shadow-brand-gold/30"
                : "bg-white border border-brand-gold/20 text-brand-text hover:text-brand-gold hover:border-brand-gold"
            }`}
          >
            Confirmar Asistencia
          </button>
          <button
            onClick={() => {
              setActiveTab("allergens");
              setSubmissionStatus("idle");
            }}
            className={`px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "allergens"
                ? "bg-brand-gold text-white shadow-lg shadow-brand-gold/30"
                : "bg-white border border-brand-gold/20 text-brand-text hover:text-brand-gold hover:border-brand-gold"
            }`}
          >
            Alérgenos y Dietas
          </button>
        </div>

        {/* Forms Container */}
        <div className="glass-panel p-6 md:p-8 lg:p-12 rounded-2xl border border-brand-gold/10 shadow-2xl max-w-2xl mx-auto text-left relative min-h-[400px]">
          {submissionStatus === "success" ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20 bg-white/95 rounded-2xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                <span className="material-symbols-outlined text-4xl">
                  check
                </span>
              </div>
              <h3 className="text-3xl font-serif text-brand-stone mb-2">
                ¡Recibido!
              </h3>
              <p className="text-brand-text">
                Muchas gracias por confirmar. <br />
                Tus datos se han guardado correctamente en nuestra hoja.
              </p>
              <button
                onClick={() => setSubmissionStatus("idle")}
                className="mt-8 text-brand-gold font-bold uppercase text-xs tracking-widest underline decoration-brand-gold/30 underline-offset-4 hover:text-brand-goldDark"
              >
                Enviar otra respuesta
              </button>
            </div>
          ) : submissionStatus === "error" ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20 bg-white/95 rounded-2xl">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                <span className="material-symbols-outlined text-4xl">
                  error
                </span>
              </div>
              <h3 className="text-2xl font-serif text-brand-stone mb-2">
                Algo salió mal
              </h3>
              <p className="text-brand-text">
                Por favor, intenta enviarlo de nuevo.
              </p>
              <button
                onClick={() => setSubmissionStatus("idle")}
                className="mt-6 bg-brand-gold text-white px-6 py-2 rounded-lg"
              >
                Intentar de nuevo
              </button>
            </div>
          ) : null}

          {/* Logic to hide form contents when submitting/success to prevent edits, keeping layout stable */}
          <div
            className={`transition-opacity duration-500 ${submissionStatus !== "idle" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            {activeTab === "rsvp" ? (
              <form
                onSubmit={(e) => handleSubmit(e, FORM_CONFIG.RSVP.actionUrl)}
                className="flex flex-col gap-6 animate-fade-in"
              >
                <h3 className="text-2xl font-serif text-brand-stone mb-2">
                  Formulario de Asistencia
                </h3>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-brand-gold uppercase tracking-wider mb-2"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name={FORM_CONFIG.RSVP.fields.name}
                    id="name"
                    required
                    placeholder="Escribe tu nombre y apellidos"
                    className="w-full bg-white border border-brand-gold/20 text-brand-stone px-4 py-4 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-brand-gold uppercase tracking-wider mb-2"
                  >
                    Número de Teléfono
                  </label>
                  <input
                    type="tel"
                    name={FORM_CONFIG.RSVP.fields.phone}
                    id="phone"
                    required
                    placeholder="Ej: 600 000 000"
                    className="w-full bg-white border border-brand-gold/20 text-brand-stone px-4 py-4 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="relationship"
                    className="block text-sm font-bold text-brand-gold uppercase tracking-wider mb-2"
                  >
                    Parentesco / Relación
                  </label>
                  <input
                    type="text"
                    name={FORM_CONFIG.RSVP.fields.relationship}
                    id="relationship"
                    required
                    placeholder="Ej: Amigo del novio, Hermana de la novia..."
                    className="w-full bg-white border border-brand-gold/20 text-brand-stone px-4 py-4 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-bold text-brand-gold uppercase tracking-wider mb-2"
                  >
                    Número de invitados
                  </label>
                  <select
                    id="guests"
                    name={FORM_CONFIG.RSVP.fields.guests}
                    className="w-full bg-white border border-brand-gold/20 text-brand-stone px-4 py-4 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Persona" : "Personas"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="cursor-pointer relative flex items-center gap-4 p-4 rounded-lg border border-brand-gold/20 hover:border-brand-gold bg-white transition-all group">
                    <input
                      type="radio"
                      name={FORM_CONFIG.RSVP.fields.attendance}
                      value="Asistiré con gusto"
                      className="w-5 h-5 text-brand-gold bg-transparent border-gray-400 focus:ring-brand-gold"
                      defaultChecked
                    />
                    <div>
                      <span className="block text-brand-stone font-medium">
                        Asistiré con gusto
                      </span>
                      <span className="text-xs text-brand-text">
                        ¡Nos vemos en Madrid!
                      </span>
                    </div>
                  </label>
                  <label className="cursor-pointer relative flex items-center gap-4 p-4 rounded-lg border border-brand-gold/20 hover:border-red-400 bg-white transition-all group">
                    <input
                      type="radio"
                      name={FORM_CONFIG.RSVP.fields.attendance}
                      value="Tristemente no"
                      className="w-5 h-5 text-red-500 bg-transparent border-gray-400 focus:ring-red-500"
                    />
                    <div>
                      <span className="block text-brand-stone font-medium">
                        Tristemente no
                      </span>
                      <span className="text-xs text-brand-text">
                        Os acompañaré en espíritu
                      </span>
                    </div>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="w-full bg-brand-gold hover:bg-brand-goldDark text-white font-bold py-4 px-6 rounded-lg transition-all mt-4 shadow-lg hover:shadow-brand-gold/20 disabled:opacity-70 disabled:cursor-wait flex justify-center"
                >
                  {submissionStatus === "submitting" ? (
                    <span className="material-symbols-outlined animate-spin">
                      progress_activity
                    </span>
                  ) : (
                    "Confirmar Asistencia"
                  )}
                </button>
              </form>
            ) : (
              <form
                onSubmit={(e) =>
                  handleSubmit(e, FORM_CONFIG.ALLERGENS.actionUrl)
                }
                className="flex flex-col gap-6 animate-fade-in"
              >
                <h3 className="text-2xl font-serif text-brand-stone mb-2">
                  Información de Alérgenos
                </h3>
                <p className="text-sm text-brand-text -mt-4">
                  Datos importantes para el catering.
                </p>

                <div>
                  <label
                    htmlFor="allergen-name"
                    className="block text-sm font-bold text-brand-gold uppercase tracking-wider mb-2"
                  >
                    Nombre del invitado
                  </label>
                  <input
                    type="text"
                    name={FORM_CONFIG.ALLERGENS.fields.name}
                    id="allergen-name"
                    required
                    placeholder="Nombre de la persona"
                    className="w-full bg-white border border-brand-gold/20 text-brand-stone px-4 py-4 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all placeholder-gray-400"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-bold text-brand-gold uppercase tracking-wider mb-2">
                    Selecciona
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Vegetariano",
                      "Vegano",
                      "Sin Gluten",
                      "Sin Lactosa",
                      "Sin Marisco",
                      "Sin Frutos Secos",
                      "Otros",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 p-3 rounded-md hover:bg-brand-beige transition-colors cursor-pointer bg-white border border-brand-gold/10"
                      >
                        <input
                          type="checkbox"
                          name={FORM_CONFIG.ALLERGENS.fields.restrictions}
                          value={item}
                          className="w-5 h-5 rounded border-gray-400 text-brand-gold focus:ring-brand-gold bg-transparent"
                        />
                        <span className="text-brand-text text-sm font-medium">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-bold text-brand-gold uppercase tracking-wider mb-2"
                  >
                    Notas Adicionales
                  </label>
                  <textarea
                    id="notes"
                    name={FORM_CONFIG.ALLERGENS.fields.notes}
                    rows={3}
                    placeholder="Detalles específicos..."
                    className="w-full bg-white border border-brand-gold/20 text-brand-stone px-4 py-4 rounded-lg focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="w-full bg-brand-gold hover:bg-brand-goldDark text-white font-bold py-4 px-6 rounded-lg transition-all mt-4 shadow-lg hover:shadow-brand-gold/20 disabled:opacity-70 disabled:cursor-wait flex justify-center"
                >
                  {submissionStatus === "submitting" ? (
                    <span className="material-symbols-outlined animate-spin">
                      progress_activity
                    </span>
                  ) : (
                    "Enviar Información"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Bank Info */}
          <div className="mt-8 pt-8 border-t border-brand-gold/10 text-center">
            <p className="text-brand-gold font-bold uppercase text-xs tracking-widest mb-2">
              Regalo
            </p>
            <p className="text-brand-text text-sm max-w-lg mx-auto">
              Vuestra presencia es nuestro mayor regalo. No obstante, si queréis
              tener un detalle con nosotros: <br />
              <span className="text-brand-stone font-mono mt-2 inline-block bg-brand-beige px-3 py-1 rounded select-all border border-brand-gold/10">
                ES48 2100 4223 9222 0032 2369
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
