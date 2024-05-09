-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('happy'),
  ('sad'),
  ('funny'),
  ('animals'),
  ('pop_culture'),
  ('sports');

-- Favorites table:
CREATE TABLE "favorites" (
  "id" SERIAL PRIMARY KEY,
  "category_id" VARCHAR (100) NOT NULL,
  "img_url" VARCHAR NOT NULL
)

-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.

-- Query for favorites
-- SELECT * FROM "favorites"
--   JOIN "categories" ON favorites.category_id = categories.id
--   WHERE category_id = $1
