# BSS Momorepo Common Area

## This area contains the components shared by all different BSS systems. 

## Please, BE CAREFUL when changing these components. Please refer to the [rules](https://github.com/Escorpiao-Negro/monorepo/blob/main/README.md) whenever you have some doubt.

## Register any new component added in this README.md file.

## Current components:

### Blog

- **PostCard.js** - Creates a card with an image (optional), author, date, post title and post text.

### DB

- **Timestamp.js** - This component creates a timestamp to be used in the ```updated_at``` field contained in all tables of all systems.

### Entities

- **HeaderOpen.js** - Header for the open pages, i.e., those users may access without being logged.

### Login

- **JWT.js** - Responsible for creating/verifying JWT tokens.

- **Password.js** - Responsibel for creating/verifying passwords hashed with ```bcrypto```.

- **ValidateEmail.js** - The function contained returns ```true``` if the email passed as a parameter corresponds to a certain regular expression, and ```false``` otherwise.

### Messages

- **Message.js** - This is our messaging system, used by the interface to communicate with the users.

### User

- **UserData.js** - Loads data from a user to be handled by other functions.

## Changelog

| Date | Author | Description |
|---|---|---|
| June 17th, 2023 | Ed de Almeida | Created common/api/api.js, with standard call for the internal APIs of our systems, making the calling procedure easier, shorter and less erro prune. |
| June 10th, 2023 | Ed de Almeida | Removed some common components which got outdated in the new architecture. |
| May 3rd, 2023 | Ed de Almeida | Added a component HeaderOpen.js for the header of the open pages. |
| April 15th, 2023 | Ed de Almeida | Current list of common components organized. New components should be updated when created, as well as this **Changelog** |