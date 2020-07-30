export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'array',
      of: [{type: 'reference', to: {type: 'projectAuthor'}}]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'builtwith',
      title: 'Built With',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technology'}}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'completedIn',
      title: 'Completed in',
      type: 'string'
    },
    {
      name: 'publishLink',
      title: 'Published Link',
      type: 'url'
    },
    {
      name: 'codeLink',
      title: "Code Link",
      type: 'url'
    }

  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${map((e) => {return e.username}, author).join(", ")}`
      })
    }
  }
}
