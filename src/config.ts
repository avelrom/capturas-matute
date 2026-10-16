/**
 * Ajustes de Weiss.
 *
 * Weiss es el tema más sencillo de fediblog centrado en imagen: convierte las
 * fotos publicadas por una cuenta del fediverso en una cuadrícula visual, sin
 * apenas ajustes. Inspirado en Sabine Weiss. Si quieres más control (varias vistas
 * de galería, cuenta companion, visor a pantalla completa configurable…), el
 * resto de temas de fediblog lo ofrecen — este es justo lo contrario a propósito.
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
  handle: '@fediblogtest@pixelfed.social',

  // ─── Ajustes generales del sitio ──────────────────────────────────────────
  site: {
    /** Nombre del blog: cabecera, título de las pestañas y feeds. */
    title: 'Weiss',

    /** Idioma y formato de fechas (ej: 'es-ES', 'en-US'). */
    locale: 'es-ES',

    /** Descripción corta: metadatos y feeds. Vacío = se usa la biografía de la cuenta. */
    description: '',

    /**
     * Modo oscuro:
     *   'toggle' → botón en la cabecera (claro/oscuro), recordado en el navegador.
     *   'auto'   → sigue al sistema, sin botón.
     *   'light'  → siempre claro.
     *   'dark'   → siempre oscuro.
     */
    darkMode: 'toggle' as 'toggle' | 'auto' | 'light' | 'dark',

    /**
     * Colores propios (formato #rrggbb). `null` = el del tema.
     *   accent → detalles y énfasis.   title → títulos del sitio y de las entradas.
     */
    colors: {
      accent: null as string | null,
      title: null as string | null,
    },

    /**
     * Letra del blog:
     *   'sans'  → sans-serif nítida (por defecto).
     *   'serif' → serifa, de lectura clásica.
     *   'mono'  → monoespaciada, más austera.
     */
    font: 'sans' as 'sans' | 'serif' | 'mono',

    /**
     * Tamaño del texto en cada elemento, a elegir entre xs, s, m, l y xl
     * (m = el del tema). No tiene que ver con el S/M/L de los lectores, que
     * cambia el diseño general.
     */
    fontSize: {
      /** Nombre del sitio en la cabecera. */
      brand: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
      /** Títulos de los listados (inicio, archivo, etiquetas). */
      title: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
      /** Título dentro de cada entrada. */
      postTitle: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
      /** Texto de lectura de las entradas y extractos. */
      body: 'm' as 'xs' | 's' | 'm' | 'l' | 'xl',
    },

    /**
     * Estilo del menú de navegación superior:
     *   'icons' → todos los elementos son iconos homogéneos (por defecto).
     *   'text'  → todos los elementos son texto homogéneo.
     */
    menuStyle: 'icons' as 'icons' | 'text',

    /**
     * Enlaces del menú: el texto que se muestra y su icono (de Lucide, o de
     * Phosphor con prefijo `ph:`, p. ej. `'ph:house'`). Icono vacío = solo texto.
     */
    menu: {
      about: {
        label: 'Acerca de',
        icon: 'user',
      },
      archive: {
        label: 'Archivo',
        icon: 'archive',
      },
      rss: {
        label: 'RSS',
        icon: 'rss',
      },
    },

    /**
     * Panel lateral de vista previa: marca o desmarca opciones y ve el efecto
     * al momento, sin tocar este archivo. Pensado para decidir la
     * configuración antes de instalar el tema; por defecto está apagado.
     */
    previewSidebar: false,
  },

  // ─── Contenido ────────────────────────────────────────────────────────────
  ingest: {
    /**
     * Marca opcional (un emoji, normalmente) para publicar solo algunos
     * mensajes en vez de todos. Se busca en cualquier parte del mensaje y se
     * quita del texto. `null` = se publican todos los mensajes propios.
     */
    marker: null as string | null,
  },

  // ─── Galería de portada ───────────────────────────────────────────────────
  gallery: {
    /**
     * Vistas disponibles, a tu elección. Una sola = el blog siempre se ve así
     * y no aparece el selector.
     *   'grid' → cuadrícula de imágenes.
     *   'rows' → en fila: imagen centrada con el texto al lado.
     */
    views: ['grid', 'rows'] as ('grid' | 'rows')[],

    /** Vista con la que se abre el blog (debe estar en `views`; si no, se usa la primera). */
    defaultView: 'grid' as 'grid' | 'rows',

    /**
     * Tamaños (S / M / L) que ofrece el selector. Uno solo = el blog siempre se
     * ve a ese tamaño y no aparece el selector.
     */
    sizes: ['sm', 'md', 'lg'] as ('sm' | 'md' | 'lg')[],
    /** Tamaño con el que se abre el blog (debe estar en `sizes`; si no, M o el primero). */
    defaultSize: 'md' as 'sm' | 'md' | 'lg',

    /** Entradas por página en el inicio (múltiplo de 3 y 2 para cuadrículas completas). */
    postsPerPage: 12,
  },

  /** Entradas. */
  post: {
    /** Comentarios de otras cuentas al final de cada entrada. */
    showComments: true,

    /** Mostrar «me gusta» y compartidas (a 0 no se muestran). */
    showMetrics: true,

    /** Máximo de comentarios que se muestran por entrada (el resto, en la red original). */
    commentLimit: 30,

    /** Avatares de los comentarios: 'remote' (foto de la cuenta) o 'dicebear' (siempre generado). */
    commentAvatars: 'remote' as 'remote' | 'dicebear',
    /** Estilo de los avatares generados (dicebear.com/styles), con `commentAvatars: 'dicebear'`. */
    dicebearStyle: 'line-face', // caras a línea, a juego con la tipografía
  },

  /** Página /about/. */
  profile: {
    /** Página «Acerca de» y su enlace en el menú. Si la desactivas, ni existe la página ni sale el enlace. */
    show: true,
    /** Tu nombre en «Acerca de». `null` = el de tu cuenta del fediverso. */
    name: null as string | null,
    /** Tu texto en «Acerca de» (párrafos separados por una línea en blanco). `null` = la biografía de tu cuenta. */
    bio: null as string | null,
    /** Texto libre adicional, bajo la biografía (párrafos separados por una línea en blanco). Vacío = nada: no se añade ningún texto automático. */
    extraText: null as string | null,
    /** Mostrar la imagen de cabecera de la red social en /about/. */
    showBanner: true,
    /** Foto de perfil junto al nombre. */
    showAvatar: true,
    /** Biografía (la tuya o la de la cuenta). */
    showBio: true,
    /** Número de seguidores, si la instancia lo hace público. */
    showFollowers: true,
    /** Campos del perfil de la cuenta (web, pronombres…). */
    showFields: true,
  },

  /** Archivo. */
  archive: {
    /** Mostrar enlace a la vista de archivo en la cabecera. */
    show: true,
  },

  /**
   * Genera la página /editor/ y su enlace en la cabecera: un editor Markdown
   * para redactar y publicar en Pixelfed/Mastodon.
   */
  editor: {
    show: false,
  },

  /**
   * Enlaces a tus redes: aparecen en la cabecera y en /about/. Añade tantos
   * como quieras, con la etiqueta que prefieras (mastodon, instagram,
   * substack, tu web…). Vacío = no se muestra ninguno.
   */
  social: {
    pixelfed: 'https://pixelfed.social/pixelfed',
    mastodon: 'https://mastodon.social/@mastodon',
    bluesky: 'https://bsky.app/profile/bsky.app',
    instagram: 'https://www.instagram.com/instagram/',
    substack: '',
  },
} as const;
