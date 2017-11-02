-- 1. What query would you run to get the total revenue for March of 2012?

SELECT DATE_FORMAT(billing.charged_datetime, '%M') AS Month, SUM(amount) as Revenue
FROM billing
WHERE MONTH(charged_datetime) = 3 AND YEAR(charged_datetime) = 2012;

-- 2. What query would you run to get total revenue collected from the client with an id of 2?

SELECT SUM(amount) as Total_Revenue, client_id as Client
FROM billing
WHERE client_id = 2;

-- 3. What query would you run to get all the sites that client=10 owns?

SELECT domain_name AS website, client_id AS Client
FROM sites
WHERE client_id = 10;

-- 4. What query would you run to get total # of sites created per month per year for the client with an id of 1? What about for client=20?


