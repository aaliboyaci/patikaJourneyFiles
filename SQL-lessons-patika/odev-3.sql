--'A' karakteri ile başlayıp 'a' karakteri ile sonlanan ülke isimlerini sıralama:
SELECT country
FROM country
WHERE country LIKE 'A%a';

--En az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlanan ülke isimlerini sıralama:
SELECT country
FROM country
WHERE LENGTH(country) >= 6 AND RIGHT(country, 1) = 'n';

--Büyük ya da küçük harf fark etmeksizin en az 4 adet 'T' karakteri içeren film isimlerini sıralama:
SELECT title
FROM film
WHERE LOWER(title) LIKE '%t%t%t%t%';

--'title' sütununda başlayan harfi 'C' olan, uzunluğu 90'dan büyük ve 'rental_rate' değeri 2.99 olan filmleri sıralama:
SELECT *
FROM film
WHERE title LIKE 'C%' AND LENGTH(title) > 90 AND rental_rate = 2.99;

