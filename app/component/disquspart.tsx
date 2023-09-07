"use client"
import { DiscussionEmbed } from 'disqus-react';
import { Recommendations } from 'disqus-react';

export default function DisqusPart(props) {

  return(
      <div>
        <DiscussionEmbed
        shortname='jycw'
        config={
            {
                url: props.url,
                identifier: props.id,
                title: props.title,
            }
        }
        />
          <Recommendations 
            shortname='jycw'
            config={
                {
                  url: props.url,
                  identifier: props.id,
                  title: props.title,
                }
              }
          />
        </div>
  )

}