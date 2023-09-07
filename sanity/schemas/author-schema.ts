import {UsersIcon} from '@sanity/icons'

const author = {

    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UsersIcon,

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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            }
        },

        {
            name: 'bio',
            title: 'Bio',
            type: 'string'
        }

    ]
};

export default author;
