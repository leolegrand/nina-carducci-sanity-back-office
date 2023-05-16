// schemas/services.js
export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'body',
      type: 'string',
      title: 'Texte',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Prix',
    },
    {
      name: 'info',
      type: 'string',
      title: 'Informations complémentaires',
    },
  ],
}
