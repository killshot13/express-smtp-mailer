# express-smtp-mailer
[![Build Status](https://travis-ci.com/killshot13/express-smtp-mailer.svg?branch=main)](https://travis-ci.com/killshot13/express-smtp-mailer) [![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/killshot13/express-smtp-mailer/graphs/traffic) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
<br>
## Efficient & Secure Node Server -- Built with Express, Nodemailer, and Gmail

### Multi-Process Design, HTML FileType Priority, Middleware AJAX Parsing
### Integrated SMTP Mail Delivery For Contact Forms, Subscriptions, etc
<br>
## Usage

### Installation

`git clone` this repository

`cd express-smtp-mailer` to enter root directory

`npm install` to acquire the `node_modules`

`code .` to open VS Code (or your favorite editor)

### Configuration

create a new `.env` file in the root directory

use these `process.env` variables defined in the `routes.js` file to provide account authentication

_`process.env.SMTP_TO_EMAIL=''`_

_`process.env.SMTP_TO_PASSWORD=''`_

use the credentials of the recipient account

### Testing

go back to the terminal and run `node server`

it should print out the following lines

`Node dev server: listening on port 5000`

`Ready to send mail!`

verify the functionality by replacing the `'/example/frontend.js'` dirpath in `routes.js` and `server.js` with your frontend route

### Success

and there you have it!

a deployment-ready express smtp mail server
