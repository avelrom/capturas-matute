/**
 * Ajustes de Matute.
 *
 * Matute es el tema más sencillo de fediblog: convierte los mensajes públicos
 * de una cuenta del fediverso en un blog de solo texto, sin apenas ajustes.
 * Inspirado en Ana María Matute. Si quieres más control (comentarios,
 * destacados, dos cuentas, vistas de galería…), el resto de temas de fediblog
 * lo ofrecen — este es justo lo contrario a propósito.
 */
export const SITE = {
  /**
   * De dónde viene la cuenta:
   *   'mastodon' → ActivityPub (Mastodon, Pixelfed, GoToSocial…).
   *   'bluesky'  → AT Protocol (Bluesky).
   */
  source: 'mastodon' as 'mastodon' | 'bluesky',


  /**
   * Cuenta de la que se leen las entradas. Debe ser pública.
   *   Mastodon/Pixelfed: '@usuario@instancia'.
   *   Bluesky: 'usuario.bsky.social' o tu dominio propio (con o sin @).
   */
  handle: '@fediblogtest@mastodon.social',


  // ─── Ajustes generales del sitio ──────────────────────────────────────────
  site: {
    /** Nombre del blog: cabecera, título de las pestañas y feeds. */
    title: 'Matute',


    /** Idioma y formato de fechas (ej: 'es-ES', 'en-US'). */
    locale: 'es-ES',


    /**
     * Colores propios (formato #rrggbb). `null` = el del tema.
     *   accent → detalles y énfasis.   title → títulos del sitio y de las entradas.
     */
