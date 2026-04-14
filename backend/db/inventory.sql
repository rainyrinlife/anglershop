CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    category VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    imageUrl VARCHAR(255),
    stock INT NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    handle VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

/*
          {
            id: '1',
            name: 'Fishing Rod',
            description: 'A high-quality fishing rod.',
            price: 99.99,
            imageUrl: 'assets/images/fishing-rod.jpg',
            category: "Fishing Rods"
          }];
*/
INSERT INTO items (id, category, name, description, price, imageUrl, stock) VALUES
(NULL, 'fishing-rods', 'Fishing Rod', 'A high-quality fishing rod for all your angling needs.', 49.99, 'assets/images/fishing-rod.jpg', 10),
(NULL, 'fishing-reels', 'Fishing Reel', 'A durable fishing reel that provides smooth performance.', 29.99, 'assets/images/fishing-reel.jpg', 15),
(NULL, 'fishing-lines', 'Fishing Line', 'Strong and reliable fishing line for various fishing conditions.', 9.99, 'assets/images/fishing-line.jpg', 50),
(NULL, 'fishing-lures', 'Fishing Lure', 'A variety of fishing lures to attract different types of fish.', 14.99, 'assets/images/fishing-lure.jpg', 30),
(NULL, 'baits-and-lures', 'Baits and Lures', 'A variety of baits and lures to attract different types of fish.', 14.99, 'assets/images/baits-and-lures.jpg', 30),
(NULL, 'apparel', 'Apparel', 'Stay comfortable and protected with our fishing apparel collection.', 29.99, 'assets/images/apparel.jpg', 25);

INSERT INTO categories (id, handle, name, description) VALUES
(NULL, 'fishing-rods', 'Fishing Rods', 'A wide selection of fishing rods for all skill levels.'),
(NULL, 'fishing-reels', 'Fishing Reels', 'Durable and high-performance fishing reels.'),
(NULL, 'fishing-lines', 'Fishing Lines', 'Strong and reliable fishing lines for various conditions.'),
(NULL, 'fishing-lures', 'Fishing Lures', 'A variety of fishing lures to attract different types of fish.'),
(NULL, 'baits-and-lures', 'Baits and Lures', 'A variety of baits and lures to attract different types of fish.'),
(NULL, 'apparel', 'Apparel', 'Stay comfortable and protected with our fishing apparel collection.');