// schemas/gallery.js
export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        accept: 'image/*',
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Nom du fichier',
    },
    {
      name: 'altText',
      type: 'string',
      title: 'Texte Alternatif',
    },
    {
      name: 'tag',
      type: 'string',
      title: 'Tag',
    },
  ],
}
