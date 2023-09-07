import {PresentationIcon} from '@sanity/icons'

const course = {

    name: 'course',
    title: 'Course',
    type: 'document',
    icon: PresentationIcon,
    fields: [
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            }
        },
        {
            name: 'list',
            title: 'List',
            type: 'string'
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'string'
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
            name: 'studiedOn',
            title: 'Studied On',
            type: 'date',
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


    ]
};

export default course;
