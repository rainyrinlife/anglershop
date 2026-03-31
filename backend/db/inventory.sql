CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    picture_path VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL
);

INSERT INTO items (picture_path, name, description, price, stock) VALUES
(NULL, 'Fishing Rod', 'A high-quality fishing rod for all your angling needs.', 49.99, 10),
(NULL, 'Fishing Reel', 'A durable fishing reel that provides smooth performance.', 29.99, 15),
(NULL, 'Fishing Line', 'Strong and reliable fishing line for various fishing conditions.', 9.99, 50),
(NULL, 'Fishing Lure', 'A variety of fishing lures to attract different types of fish.', 14.99, 30),
(NULL, 'Tackle Box', 'A spacious tackle box to organize all your fishing gear.', 19.99, 20);