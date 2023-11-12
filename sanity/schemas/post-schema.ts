import {ThListIcon} from '@sanity/icons'

const post = {

    name: 'post',
    title: 'Post',
    type: 'document',
    icon: ThListIcon,
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
              maxLength: 96,
            }
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}]
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                    {
                        type: 'reference', 
                        to: [
                            {type: 'category'}
                        ]
                    }
                ]
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields:[
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text'
            },
            {
                name:'caption',
                type:'string',
                title:'Caption'
            },
            ]
        },
        {
            name: 'publishedOn',
            title: 'Published On',
            type: 'date'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
              {
                type: 'block'
              },
              {
                name:'image',
                type: 'image',
                title:'Image',
                options: { metadata: ['lqip'] },
                fields:[
                    {
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative text'
                    },
                    {
                        name:'caption',
                        type:'string',
                        title:'Caption'
                    },
                    {
                        title: 'Size',
                        name: 'size',
                        type: 'string',
                        options: {
                          list: [
                            {title: 'Full-width', value: 'fullwidth'},
                            {title: 'Small', value: 'small'}
                          ], // <-- predefined values
                          layout: 'radio' // <-- defaults to 'dropdown'
                        }
                    },
                    {
                        name:'link',
                        type:'url',
                        title:'Link'
                    }
                ]
              },
              {
                type: 'youtube'
              },
              {
                type: 'instagramPost'
              }
            ]
        }


    ],
    initialValue: () => ({
        publishedOn: (new Date()).toISOString().substring(0, 10),
        author: {
            _ref: "64251850-6351-4a3d-8554-86650c505451",
            _type: "reference"
          },
        source: "Photo"
    
    })
};

export default post;
