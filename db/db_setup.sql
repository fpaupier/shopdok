-- to be placed in the container directory /docker-entrypoint-initdb.d at startup
CREATE USER docker WITH PASSWORD 'INSERT-PASSWORD';
CREATE DATABASE dockerdb;
GRANT ALL PRIVILEGES ON DATABASE dockerdb to docker;

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    price NUMERIC NOT NULL CONSTRAINT positive_price CHECK (price >= 0),
    quantity INT NOT NULL CONSTRAINT positive_quantity CHECK (quantity >= 0)
);

INSERT INTO products (name, price, quantity) VALUES
    ('Ice Cream', 2.5, 56),
    ('Chocolate bar', 1.75, 145),
    ('Apple', 0.65, 38);
