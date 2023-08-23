--Film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?
SELECT AVG(rental_rate) AS average_rental_rate
FROM film;

--Film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?
SELECT COUNT(*) AS film_count
FROM film
WHERE title LIKE 'C%';

--Film tablosunda bulunan filmlerden rental_rate değeri 0.99'a eşit olan en uzun (length) film kaç dakikadır?
SELECT MAX(length) AS max_length
FROM film
WHERE rental_rate = 0.99;

--Film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?
SELECT COUNT(DISTINCT replacement_cost) AS distinct_replacement_cost_count
FROM film
WHERE length > 150;
