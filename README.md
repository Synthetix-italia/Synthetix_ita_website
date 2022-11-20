# Synthetix_ita_website

# Getting started

Dowload this repo on your Laptop,
Install yarn and run < yarn dev > to spin up the application. http://localhost:3000

# Sanity
▪ cd /sanity, then: ▪ sanity docs to open the documentation in a browser ▪ sanity manage to open the project settings in a browser ▪ sanity help to explore the CLI manual ▪ sanity start to run your studio

Sanity Publish Webhooks
Using the following plugin https://www.sanity.io/plugins/vercel-deploy please following instructions to setup deploy hooks

Sanity Algolia Webhooks
The following files are used to create endpoints so that sanity hooks can receive data for CMS events and index content from Sanity to Algolia.

"/pages/api/all-algolia.js" First time indexing (only needs to be run once on fresh index)
"/pages/api/update-algolia.js" Needs to be run after each build for document update, create and delete.
See https://www.sanity.io/plugins/sanity-algolia for more information and direct link to setup hook within sanity account.
