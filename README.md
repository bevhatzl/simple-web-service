# A simple JSON based web service

## Description

A small JSON based web service.
Receives a payload of shows and returns only the shows with DRM enabled and having at least one episode.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Sample data](#sample-data)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To run locally, Node.js is required. Run it with `npm start`.

## Usage

Make a POST request to: /shows
The valid JSON needed is in the Sample Data below

## Built With

- [Node.js v14.18.1](https://nodejs.org)
- [Jest](https://jestjs.io)

## Sample Data

### Payload

```
{
    "payload": [
        {
            "country": "UK",
            "description": "What's life like when you have enough children to field your own football team?",
            "drm": true,
            "episodeCount": 3,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#ff7800",
            "seasons": [
                {
                    "slug": "show/16kidsandcounting/season/1"
                }
            ],
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting",
            "tvChannel": "GEM"
        },
        {
            "slug": "show/seapatrol",
            "title": "Sea Patrol",
            "tvChannel": "Channel 9"
        }
    ]
}
```

### Response

```
{
    "response": [
        {
            "image": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting"
        }
    ]
}
```

## Tests

To run tests locally: `npm test`

## Questions

View my GitHub profile at: <a href="https://github.com/bevhatzl">https://github.com/bevhatzl/</a>
