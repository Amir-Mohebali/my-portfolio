import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas"; 

const config = defineConfig({
    projectId: "5gm33j3r",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2024-02-09",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas}
})

export default config;