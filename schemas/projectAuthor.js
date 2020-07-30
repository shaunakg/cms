export default {
  name: 'projectAuthor',
  title: 'Project Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string'
    },
    {
      name: 'shortname',
      title: 'Short Name',
      type: 'string'
    },
    {
      name: 'authorLink',
      title: 'Link',
      type: 'url'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage'
    }
  }
}
