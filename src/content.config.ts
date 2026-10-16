import { defineCollection } from 'astro:content';
import { siteLoader } from '@fediblog/core/site-loader';
import { notaSchema } from '@fediblog/core/schema';
import { SITE } from './config';

// La colección «notas» no vive en disco: la puebla el loader a partir de la
// cuenta del fediverso indicada en src/config.ts (SITE.handle).
const notas = defineCollection({
  loader: siteLoader(SITE, {
    // Las imágenes van aparte (arriba de cada entrada y en la cuadrícula), no en el cuerpo.
    inlineFigures: false,
    dicebearBackground: ['e4e4e4', 'cfcfcf', '9a9a9a'],
  }),
  schema: notaSchema,
});

export const collections = { notas };
