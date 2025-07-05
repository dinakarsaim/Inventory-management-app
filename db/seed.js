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
    ('Action', 'This category has games that have a lot of combat'),
    ('Open World', 'Games where the player can roam around a fictional world and interact with the environment');

CREATE TABLE items (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    description TEXT,
    price NUMERIC(10, 2),
    quantity INTEGER,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE
);

insert into items (name, description, price, quantity, category_id) values 
    ('GTA V', 'The fifth game of the grand theft auto series', 2000.00 , 3, 2),
    ('Mortal Kombat', 'Latest version of mortal kombat whih better fight mechanics', 1600.00, 2, 1);
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