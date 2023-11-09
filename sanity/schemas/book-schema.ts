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
            fields:[
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'bookAuthor',
            title: 'Book Author',
            type: 'string',
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
