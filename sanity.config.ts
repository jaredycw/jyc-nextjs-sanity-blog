import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from '@sanity/vision'
import schemas from "./sanity/schemas";
import { codeInput } from "@sanity/code-input";
 


 

const config = defineConfig({

    projectId:  "mrzc8peh",

    dataset: "production",

    title: "JYZ",

    apiVersion: "2023-08-28",

    useCdn: false,

    basePath: "/admin",

    plugins: [deskTool(),visionTool(),codeInput()],

    schema: {types: schemas },
    




})

export default config;