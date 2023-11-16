import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from '@sanity/vision'
import schemas from "./sanity/schemas";
import {media} from 'sanity-plugin-media'
import { giphyAssetSourcePlugin } from "sanity-plugin-asset-source-giphy";
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
 

const config = defineConfig({

    projectId:  "mrzc8peh",

    dataset: "production",

    title: "JYZ",

    apiVersion: "2023-09-11",

    useCdn: true,

    basePath: "/admin",

    plugins: [deskTool(),visionTool(),media(),unsplashImageAsset(),
        giphyAssetSourcePlugin({
            apiKey: "J1fvKpflwHfaZcicawRBGZc56R7738bC"
          }),
    ],

    schema: {types: schemas },
    




})

export default config;