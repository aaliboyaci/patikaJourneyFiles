--film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
SELECT DISTINCT replacement_cost
FROM film;
--21 sonuç

--film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
SELECT COUNT (title)
FROM film
WHERE title LIKE 'G%';;
--46 sonuç

--country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
SELECT COUNT (country)
FROM country
WHERE LENGTH(country) >= 5 
--104 sonuç


--city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?
SELECT COUNT (city)
FROM city
WHERE city LIKE 'R%r';
--1 sonuç