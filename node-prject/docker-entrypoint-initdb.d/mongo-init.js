print('Start #################################################################');
db.createCollection('users');

db = db.getSiblingDB('blog');
db.createUser(
  {
    user: 'blog',
    pwd: 'blog',
    roles: [{ role: 'readWrite', db: 'blog' }],
  },
);
db.createCollection('users');

print('END #################################################################');

