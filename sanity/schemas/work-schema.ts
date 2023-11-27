import {CaseIcon} from '@sanity/icons'
import { createClient } from 'next-sanity';
import clientConfig from "../config/client-config";
const work = {

    name: 'work',
    title: 'Work',
    type: 'document',
    icon: CaseIcon,

    fields: [
        {
            name: 'parentPage',
            title: 'Parent Page',
            type: 'string',
        },
        {
            name: 'postOrder',
            title: 'Post Order',
            type: 'number',
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
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}]
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
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
                    {
                        type: 'reference', 
                        to: [
                            {type: 'skill'}
                        ]
                    }
                ]
        },
        {
            
                name: 'industries',
                title: 'Industries',
                type: 'array',
                of: [
                        {
                            type: 'reference', 
                            to: [
                                {type: 'industry'}
                            ]
                        }
                    ]
            
        },
        {
            name: 'workingTime',
            title: 'Working Time',
            type: 'number',
        },


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
        parentPage: "works",
        author: {
            _ref: "64251850-6351-4a3d-8554-86650c505451",
            _type: "reference"
          },
        postOrder: await createClient(clientConfig).fetch(`
        count(*[_type=="work"])
      `) + 1
    })
};

export default work;
