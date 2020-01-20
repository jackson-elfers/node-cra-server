const db = require("./index");

// user
const user = async function() {
  const query = `
create table if not exists user(
_id binary(16) not null,
created_at datetime not null,
updated_at datetime not null,
username varchar(255) not null,
password varchar(255) not null,
primary key (_id)
);
`;
  await db.query(query);
};

module.exports = async function() {
  await user();
};
