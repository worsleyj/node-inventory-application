const { Client } = require("pg");

// const SQL = `
// CREATE TABLE IF NOT EXISTS usernames (
//   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   username VARCHAR ( 255 )
// );

// INSERT INTO usernames (username)
// VALUES
//   ('Bryan'),
//   ('Odin'),
//   ('Damon');
// `;

const SQL = `
CREATE TABLE IF NOT EXISTS parts (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name varchar (255),
type varchar(255),
manufacturer varchar(255),
quantity int);

INSERT INTO parts (name, type, manufacturer, quantity) 
VALUES 
('1080 ti', 'Graphics Card', 'EVGA', 3),
('RM850x', 'Power Supply', 'Corsair', 1),
('850 EVO', 'SSD', 'Samsung', 4);

CREATE TABLE IF NOT EXISTS manufacturers (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name varchar (255));

CREATE TABLE IF NOT EXISTS type (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name varchar (255));
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://postgres:postgres@localhost:5432/computer_parts",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
