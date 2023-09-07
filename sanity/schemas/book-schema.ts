import {BookIcon} from '@sanity/icons'

const book = {

    name: 'book',
    title: 'Book',
    type: 'document',
    icon: BookIcon,

    fields: [
        {
            name: 'cover',
            title: 'Cover',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
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
            name: 'googleBooks',
            title: 'Google Books Lists',
            type: 'string',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}]
        },
        {
            name: 'bookAuthor',
            title: 'Book Author',
            type: 'string',
        },
        {
            name: 'genre',
            title: 'Genre',
            type: 'string'
        },
        {
            name: 'page',
            title: 'Page',
            type: 'number'
        },
        {
            name: 'year',
            title: 'Year',
            type: 'number'
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
            name: 'list',
            title: 'List',
            type: 'string'
        },
        {
            name: 'publishedOn',
            title: 'Published On',
            type: 'date',
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
              },
              {
                type: 'myCodeField'
              },
            ]
        },


    ],
    initialValue: () => ({
        publishedOn: (new Date()).toISOString().substring(0, 10),
        author: {
            _ref: "64251850-6351-4a3d-8554-86650c505451",
            _type: "reference"
          }
    })
};

export default book;
