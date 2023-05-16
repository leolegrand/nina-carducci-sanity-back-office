// schemas/profil.js
export default {
  name: 'profil',
  type: 'document',
  title: 'Profil',
  fields: [
    {
      name: 'profilePicture',
      type: 'image',
      title: 'Photo de profil',
      options: {
        accept: 'image/*',
      },
    },
    {
      name: 'profilePictureAltText',
      type: 'string',
      title: 'Photo de profil - Texte alternatif',
    },
    {
      name: 'aboutText1',
      type: 'string',
      title: 'A propos de moi - Texte 1',
    },
    {
      name: 'aboutText2',
      type: 'string',
      title: 'A propos de moi - Texte 2',
    },
    {
      name: 'quote1',
      type: 'string',
      title: 'Citation - 1',
    },
    {
      name: 'quoteAuthor1',
      type: 'string',
      title: 'Auteur de la citation - 1',
    },
    {
      name: 'quote2',
      type: 'string',
      title: 'Citation - 2',
    },
    {
      name: 'quoteAuthor2',
      type: 'string',
      title: 'Auteur de la citation - 2',
    },
    {
      name: 'formPicture',
      type: 'image',
      title: 'Photo du formulaire',
      options: {
        accept: 'image/*',
      },
    },
    {
      name: 'formPictureAltText',
      type: 'string',
      title: 'Photo du formulaire - Texte alternatif',
    },
  ],
}
