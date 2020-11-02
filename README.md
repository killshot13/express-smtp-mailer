# express-smtp-mailer

## Uses Express.js, Nodemailer, and Google's SMTP server

### Can be configured for use with contact forms, subscriptions, etc

#### #production-ready
<br></br>
## Usage

### Installation

`git clone` this repository

`cd express-smtp-mailer` to enter root directory

`npm install` to acquire the `node_modules`

`code .` to open VS Code (or your favorite editor)

### Configuration

create a new `.env` file in the root directory

use these `process.env` variables defined in the `routes.js` file to provide account authentication

`_process.env.SMTP_TO_EMAIL=''_`
`_process.env.SMTP_TO_PASSWORD=''_`

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
