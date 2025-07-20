const {Client} = require("pg");

const SQL = `
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS categories;

create table categories (
    id integer primary key generated always as identity,
    name varchar,
    description varchar
);

insert into categories (name, description) values
    ('Fantasy', 'Genre of storytelling that features magical elements, mythical creatures, and imaginative worlds beyond the boundaries of reality.'),
    ('Suspense', 'Keeps readers on edge by unraveling secrets, following twists and turns, and revealing the truth through clever clues and unexpected outcomes.'),
    ('Horror', 'Designed to evoke fear, dread, or shock, often featuring supernatural elements, psychological terror, or disturbing themes.'),
    ('Children', 'Books written for young readers, often featuring simple language, colorful illustrations, and imaginative stories that educate and entertain'),
    ('Self Help', 'Books focused on personal growth, mental well-being, and life improvement—offering strategies, insights, and motivation to help readers achieve their goals and overcome challenges.');

CREATE TABLE items (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    author varchar,
    description TEXT,
    image_url TEXT,
    ce NUMERpriIC(10, 2),
    quantity INTEGER,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE
);

insert into items (name, author, description, image_url, price, quantity, category_id) values 
    ('If Tomorrow Comes', 'Sydney Sheldon', 'a fast-paced thriller following Tracy Whitney, a wrongfully imprisoned woman who transforms into a brilliant con artist seeking justice and revenge.', '/if-tomorrow-comes.jpg', 2000.00 , 3, 2),
    ('Fire and Blood', 'George.R.R.Martin', 'Fire & Blood is a historical chronicle by George R.R. Martin that explores the rise and reign of House Targaryen in Westeros centuries before the events of Game of Thrones.', '/fire-and-blood.jpg', 1600.00, 2, 1),
    ('Game Of Thrones', 'George.R.R.Martin', 'First Book of the game of thrones series', '/got1.jpg', 1800.00, 5, 1),
    ('Atomic Habits', 'James Clear','Atomic Habits is a practical guide to building good habits and breaking bad ones through small, consistent changes that compound over time to create remarkable results.', '/atomic-habits.jpg', 545.00, 10, 5),
    ('The Subtle Art Of Not Giving A Fuck', 'Mark Manson','A brutally honest self-help book that challenges conventional positivity, encouraging readers to focus on what truly matters by embracing life''s struggles and setting better priorities.', '/tsaongaf.jpg', 348.00, 4, 5),
    ('Tinkle Comics', 'Anant Pai','Tinkle Comics is a beloved Indian comic series filled with humorous stories, adventures, and educational tales featuring iconic characters like Suppandi, Shikari Shambu, and Tantri the Mantri ', '/tinkle.jpg', 66.00, 16, 4),
    ('Fantastic Mr. Fox', 'Roald Dahl','Fantastic Mr. Fox by Roald Dahl is a witty and charming tale of a clever fox who outsmarts three greedy farmers to feed his family, celebrating intelligence, courage, and teamwork with humor and heart.', '/fantastic-fox.jpg', 236.00, 7, 4),
    ('The Magic Finger', 'Roald Dahl','The Magic Finger is a quirky and imaginative story about a young girl with a magical power in her finger that activates when she gets angry.', '/magic-finger.jpg', 245.00, 6, 4),
    ('The Magic Of The Lost Temple', 'Sudha Murthy','The Magic of the Lost Temple is a charming tale of a curious young girl named Nooni, whose visit to her grandparents village leads her on an adventurous journey of discovery, friendship, and an ancient hidden temple.', '/magic-of-the-lost-temple.jpg', 250.00, 5, 4),
    ('The Shining', 'Stepehen King','The Shining is a chilling psychological horror novel that follows Jack Torrance, a struggling writer and recovering alcoholic, as he takes a job as the winter caretaker of the isolated Overlook Hotel.', '/shining.jpg', 582.00, 4, 3),
    ('Angels and Demons', 'Dan Brown','Angels & Demons is a fast-paced thriller that follows symbologist Robert Langdon as he races against time to stop a deadly plot by the secret society known as the Illuminati.', '/angels-and-demons.jpg', 350.00, 6, 2),
    ('Dracula', 'Bram Stoker','Dracula is a classic gothic horror novel that tells the chilling tale of Count Dracula''s attempt to move from Transylvania to England in search of new blood. ', '/dracula.jpg', 400.00, 7, 3),
    ('The Hound of The Baskervilles', 'Arthur Conan Doyle','The Hound of the Baskervilles is a gripping Sherlock Holmes mystery that blends detective fiction with gothic horror.', '/hound.jpg', 150.00, 10, 2);
`;

async function main () {
    console.log("seeding...");
    const client = new Client ({
        host: "localhost",
        user: "dinakarsai",
        database: "games",
        port: 5432
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();