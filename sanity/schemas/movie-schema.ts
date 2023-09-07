import { PlayIcon } from '@sanity/icons'

const movie = {

    name: 'movie',
    title: 'Movie',
    type: 'document',
    icon:PlayIcon,

    fields: [
        {
            name: 'poster',
            title: 'Poster',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}]
        },
        {
            name: 'director',
            title: 'Director',
            type: 'string',
        },
        {
            name: 'genre',
            title: 'Genre',
            type: 'string',
        },

        {
            name: 'duration',
            title: 'Duration',
            type: 'string',
        },
        {
            name: 'year',
            title: 'Year',
            type: 'number',
        },
        {
            name: 'list',
            title: 'List',
            type: 'string',
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
        },
        {
            name: 'publishedOn',
            title: 'Published On',
            type: 'date',
        },
        {           
            name:"content",
            title:"Content",
            type: "blockContent",
        }


    ],
    initialValue: () => ({
        publishedOn: (new Date()).toISOString().substring(0, 10),
        author: {
            _ref: "64251850-6351-4a3d-8554-86650c505451",
            _type: "reference"
          }
    })

};

export default movie;
