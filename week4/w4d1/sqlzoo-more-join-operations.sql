/*
More JOIN operations

This tutorial introduces the notion of a join. The database consists of three
tables movie , actor and casting .

Retrieved Mon June 19, 2017 from http://sqlzoo.net/wiki/More_JOIN_operations
*/

-- #1. List the films where the yr is 1962 [Show id, title]
SELECT id, title
FROM movie
WHERE yr=1962


-- #2. Give year of 'Citizen Kane'.
SELECT yr
FROM movie
WHERE title LIKE 'Citizen Kane'


/* #3. List all of the Star Trek movies, include the id, title and yr (all of
these movies include the words Star Trek in the title). Order results by year. */
SELECT id, title, yr
FROM movie
WHERE title LIKE '%Star Trek%'
ORDER BY yr DESC


-- #4. What id number does the actor 'Glenn Close' have?
SELECT id
FROM actor
WHERE name = 'Glenn Close'


-- #5. What is the id of the film 'Casablanca'?
SELECT id
FROM movie
WHERE title = 'Casablanca'


/* #6. Obtain the cast list for 'Casablanca'. What is a cast list?
Use movieid=11768, (or whatever value you got from the previous question) */
SELECT name
FROM actor
JOIN casting ON id = actorid
WHERE movieid = 11768

-- #7. Obtain the cast list for the film 'Alien'
SELECT name
FROM actor
JOIN casting ON id = actorid
JOIN movie ON movieid = movie.id
WHERE movie.title = 'Alien'

-- #8. List the films in which 'Harrison Ford' has appeared
SELECT title
FROM movie
JOIN casting ON id = movieid
JOIN actor ON actor.id = actorid
WHERE name = 'Harrison Ford'

-- #9. List the films where 'Harrison Ford' has appeared but not in a starring role.
SELECT title
FROM movie
JOIN casting ON id = movieid
JOIN actor ON actor.id = actorid
WHERE name = 'Harrison Ford' AND (ord != 1)

-- #10. List the films together with the leading star for all 1962 films.
SELECT title, name
FROM movie
JOIN casting ON id = movieid
JOIN actor ON actor.id = actorid
WHERE yr = 1962 AND ord=1
