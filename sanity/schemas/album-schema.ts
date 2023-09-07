
import {ImagesIcon} from '@sanity/icons'
const album = {

    name: 'album',
    title: 'Album',
    type: 'document',
    icon: ImagesIcon,
    fields: [
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            }
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
            name: 'publishedOn',
            title: 'Published On',
            type: 'date',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        }

    ]
}

export default album;
