Database design

## Table 1:

stories

- id (autoincrement) (p-key)
- title (text) (unique)
- subtitle (text) (unique)
- slug (text/url string) (unique)
- content (text) (unique)
- dates (text)
- cover_image (string) (unique)
- images (string[]) (f-key?) _references images table_

## Table 2:

images

- id (string) (unique) _named in the fashion: story_id-image_id_
- story (integer) _references stories.id_
- title (string)
- caption (string)
