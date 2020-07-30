export default {
    name: 'technology',
    title: 'Technology',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'blockContent'
      },
      {
        name: 'mainImage',
        title: 'Icon',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ],

    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        }
    }
  }
  