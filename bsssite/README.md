# Hypatia.club

Hypatia is a club, or social network if you prefer, for readers and academical researchers.

The idea started to flourish when my wife was taking her Master degree and had to read a lot of PDF texts. More than this, she had to search for topics inside these PDF texts, which is not quite easy. Then I created a Javascript library to parse these PDF files, extract the text and organize the words in remissive index.

After doing that, and helped her in her research, I considered the fact that most readers have the same problem, specially those involved in academical research, and decided to create a public website to do this.

Then the idea evolved and I considered creating kind of a social network, where people could upload PDFs (Whose content is in public domain, of course!) to be processed and these PDFs, as well and the remissive dictionary were accessible to all members.

The idea is using Hypatia Club as a research resource, as well as a place for people to talk about books, exchange information and other things.

## Running Hypatia

### Build the back-end Docker image and start a continer with it

- `cd ~/monorepo/hypatia/be`
- `docker build -t hypatia_be .`
- `docker run -d --name hypatia_be -p 4000:4000 hypatia_be:latest`

### Build the front-end Docker image and start a continer with it

- `cd ~/monorepo/hypatia/fe`
- `docker build -t hypatia_fe .`
- `docker run -d --name hypatia_fe -p 4000:4000 hypatia_fe:latest`

### Open your browser in http://localhost:3000 and have fun!
