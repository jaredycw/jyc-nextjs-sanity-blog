const youtube = {
      name: 'youtube',
      type: 'object',
      title: 'YouTube Embed',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt'
        },
        {
          name: 'url',
          type: 'url',
          title: 'YouTube video URL'
        }
      ]
  
}
export default youtube;