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
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
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

export default movie;
