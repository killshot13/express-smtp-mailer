# express-smtp-mailer

[![Build Status](https://travis-ci.com/killshot13/express-smtp-mailer.svg?branch=main)](https://travis-ci.com/killshot13/express-smtp-mailer) [![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/killshot13/express-smtp-mailer/graphs/traffic) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

[v1.1.0 release notes](https://github.com/killshot13/express-smtp-mailer/releases/tag/v1.1.0)

## Efficient & Secure Node Server -- Built with Express, Nodemailer, and Gmail

### Multi-Process Design, HTML FileType Priority, Middleware AJAX Parsing

### Integrated SMTP Mail Delivery For Contact Forms, Subscriptions, etc

[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/killshot/13/express-smtp-mailer)

## [VIEW FULL TUTORIAL](https://daily.dev/posts/how-to-build-an-smtp-mail-server-with-express-node-and-gmail)

### Installation

`git clone` this repository

`cd express-smtp-mailer` to enter root directory

`npm install` to acquire the `node_modules`

`code .` to open VS Code (or your favorite editor)

### Configuration

create a new `.env` file in the root directory

use the `process.env` variables defined in the `.env.example` and `routes.js` files to setup authentication

for production, use the credentials of the recipient account

_`process.env.SMTP_TO_EMAIL=''`_

_`process.env.SMTP_TO_PASSWORD=''`_

for development and testing, create an [Ethereal account](https://ethereal.email/create) and enter the credentials of the testing account (if desired)

_`process.env.SMTP_DEV_EMAIL=''`_

_`process.env.SMTP_DEV_PASSWORD=''`_

### Testing

go back to the terminal and run `node server`

it should print out the following lines

`Node dev server: listening on port 5000`

`Ready to send mail!`

verify full functionality by replacing the `'/example/frontend.js'` dirpath in `routes.js` and `server.js` with your own API routes

### Success

and there you have it!

a deployment-ready express smtp mail server
