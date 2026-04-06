CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    category VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    imageUrl VARCHAR(255),
    stock INT NOT NULL
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
(NULL, 'Fishing Rods', 'Fishing Rod', 'A high-quality fishing rod for all your angling needs.', 49.99, 'assets/images/fishing-rod.jpg', 10),
(NULL, 'Fishing Reels', 'Fishing Reel', 'A durable fishing reel that provides smooth performance.', 29.99, 'assets/images/fishing-reel.jpg', 15),
(NULL, 'Fishing Lines', 'Fishing Line', 'Strong and reliable fishing line for various fishing conditions.', 9.99, 'assets/images/fishing-line.jpg', 50),
(NULL, 'Fishing Lures', 'Fishing Lure', 'A variety of fishing lures to attract different types of fish.', 14.99, 'assets/images/fishing-lure.jpg', 30),
(NULL, 'Tackle Boxes', 'Tackle Box', 'A spacious tackle box to organize all your fishing gear.', 19.99, 'assets/images/tackle-box.jpg', 20);