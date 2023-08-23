--Film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun 5 filmi sıralama:

SELECT title, LENGTH(title) AS length
FROM film
WHERE title LIKE '%n'
ORDER BY length DESC
LIMIT 5;


--Film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa 6-10 karakter uzunluğundaki ikinci 5 filmi sıralama:
SELECT title, LENGTH(title) AS length
FROM film
WHERE title LIKE '%n' AND LENGTH(title) BETWEEN 6 AND 10
ORDER BY length ASC
LIMIT 5;

--Customer tablosunda bulunan last_name sütununa göre azalan şekilde sıralandığında store_id 1 olma koşuluyla ilk 4 veriyi sıralama:
SELECT *
FROM customer
WHERE store_id = 1
ORDER BY last_name DESC
LIMIT 4;

