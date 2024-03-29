import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from '@sanity/vision'
import schemas from "./sanity/schemas";
import {media} from 'sanity-plugin-media'
import { giphyAssetSourcePlugin } from "sanity-plugin-asset-source-giphy";
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { structure } from "./sanity/structure";
import { CodeInput, codeInput } from "@sanity/code-input";

const config = defineConfig({

    projectId:  "mrzc8peh",

    dataset: "production",

    title: "JYZ",

    apiVersion: "2023-09-11",

    useCdn: false,

    basePath: "/admin",

    plugins: [deskTool({structure}),visionTool(),media(),unsplashImageAsset(), codeInput(),
        giphyAssetSourcePlugin({
            apiKey: "J1fvKpflwHfaZcicawRBGZc56R7738bC"
          }),
    ],

    schema: {types: schemas },
    




})

export default config;

