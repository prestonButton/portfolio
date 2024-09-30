Database design

Table 1:
-----------------------------
stories
- id (autoincrement) (p-key)
- title (text) (unique)
- subtitle (text) (unique)
- slug (text/url string) (unique)
- content (text) (unique)
- dates (text)
- cover_image (string) (unique)
- images (string[]) (f-key?) *references images table*

Table 2:
-----------------------------
images
- id (string) (unique) *named in the fashion: story_id-image_id*
- story (integer) *references stories.id*
- title (string)
- caption (string)
