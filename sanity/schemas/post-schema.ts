import {ThListIcon} from '@sanity/icons'
import { createClient } from 'next-sanity';
import clientConfig from "../config/client-config";

const post = {

    name: 'post',
    title: 'Post',
    type: 'document',
    icon: ThListIcon,
    fields: [
        {
            name: 'postOrder',
            title: 'Post Order',
            type: 'number',
            description: 'Post Order Under Work Page'
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
            type: 'date',
            options: {
                dateFormat: 'DD MMMM, YYYY',
            }

        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string',
            options: {
              maxLength: 160,
            },
            description: 'Make it for SEO Meta Description'
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
        },
        {
          name: 'jsonlink',
          type: 'url',
          title: 'JSON Link',
        }


    ],
    orderings: [
      {
        title: 'Post Order',
        name: 'postOrder',
        by: [
          {field: 'postOrder', direction: 'desc'}
        ]
      }
    ],
    initialValue: async () => ({
        publishedOn: (new Date()).toISOString().substring(0, 10),
        author: {
            _ref: "64251850-6351-4a3d-8554-86650c505451",
            _type: "reference"
          },
        postOrder: await createClient(clientConfig).fetch(`
        count(*[_type=="post"])
      `) + 1
    })
};

export default post;
