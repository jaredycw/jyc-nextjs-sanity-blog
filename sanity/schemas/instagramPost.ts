const instagramPost = {
      name: 'instagramPost',
      type: 'object',
      title: 'Instagram Post',
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
          description: 'Visit an Instagram post in a browser and copy the URL.'
        }
      ]
    

}
export default instagramPost;

 