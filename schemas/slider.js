// schemas/slider.js
export default {
  name: 'slider',
  type: 'document',
  title: 'Slider',
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
  ],
}
