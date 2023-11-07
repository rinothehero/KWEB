-- 5.2.1
SELECT u.id, u.name, t.seat_number
FROM users u
JOIN tickets t ON u.id = t.user
WHERE t.train = 11
ORDER BY t.seat_number ASC;
-- 5.2.2
SELECT u.id, u.name, COUNT(tk.id) AS trains_count, SUM(tr.distance) / 10 AS total_distance_km
FROM users u
JOIN tickets tk ON u.id = tk.user
JOIN trains tr ON tk.train = tr.id
GROUP BY u.id
ORDER BY total_distance_km DESC
LIMIT 6;

-- 5.2.3
SELECT tr.id, ty.name AS type, st1.name AS src_stn, st2.name AS dst_stn, Timediff(tr.arrival, tr.departure) AS travel_time
FROM trains tr
JOIN types ty ON tr.type = ty.id
JOIN stations st1 ON tr.source = st1.id
JOIN stations st2 ON tr.destination = st2.id
ORDER BY travel_time DESC
LIMIT 6;
-- 5.2.4
SELECT ty.name AS type, st1.name AS src_stn, st2.name AS dst_stn, tr.departure, tr.arrival, ROUND((ty.fare_rate / 100) * (tr.distance / 10), -2) AS fare
FROM trains tr
JOIN types ty ON tr.type = ty.id
JOIN stations st1 ON tr.source = st1.id
JOIN stations st2 ON tr.destination = st2.id
ORDER BY tr.departure ASC;

-- 5.2.5
SELECT tr.id, ty.name AS type, st1.name AS src_stn, st2.name AS dst_stn, COUNT(tk.id) AS occupied, ty.max_seats AS maximum
FROM trains tr
JOIN types ty ON tr.type = ty.id
JOIN stations st1 ON tr.source = st1.id
JOIN stations st2 ON tr.destination = st2.id
JOIN tickets tk ON tr.id = tk.train
GROUP BY tr.id
HAVING occupied > 0
ORDER BY tr.id ASC;
-- 5.2.6
SELECT tr.id, ty.name AS type, st1.name AS src_stn, st2.name AS dst_stn, COALESCE(SUM(tk.seat_number), 0) AS occupied, ty.max_seats AS maximum
FROM trains tr
JOIN types ty ON tr.type = ty.id
JOIN stations st1 ON tr.source = st1.id
JOIN stations st2 ON tr.destination = st2.id
LEFT JOIN tickets tk ON tr.id = tk.train
GROUP BY tr.id
ORDER BY tr.id ASC;