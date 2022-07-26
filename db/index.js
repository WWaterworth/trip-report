const { Client } = require("pg");

const client = new Client("postgres://localhost:5432/trip-report");

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT id, username 
    FROM users;
  `
  );

  return rows;
}

async function createUser({ username, password }) {
  try {
    const result = await client.query(
      `
      INSERT INTO users(username, password)
      VALUES ($1, $2);
    `,
      [username, password]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

// later
module.exports = {
  // add createUser here!
};

module.exports = {
  client,
  getAllUsers,
  createUser,
};
