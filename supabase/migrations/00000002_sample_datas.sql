-- add admin sample data
INSERT INTO
  admins (
    role,
    email,
    first_name,
    last_name,
    phone,
    address,
    images,
    password_hashed
  )
VALUES
  (
    'admin',
    'admin@example.com',
    'Admin first_name',
    'Admin last_name',
    '1234567890',
    '{"address": "123 Main St, Anytown, USA"}',
    '["https://via.placeholder.com/150"]',
    '$2b$12$iC9K6NgSpHLKJ4OICTcgJeDYO/H0F4CcxsTksBWtJczO15MaMWpuy'
  );

INSERT INTO
  admins (
    role,
    email,
    first_name,
    last_name,
    phone,
    address,
    images,
    password_hashed
  )
VALUES
  (
    'super_admin',
    'super_admin@example.com',
    'Super admin first_name',
    'Super admin last_name',
    '0987654321',
    '{"address": "123 Main St, Anytown, USA"}',
    '["https://via.placeholder.com/150"]',
    '$2b$12$MG595kaYJY/y9HRjCESxD.rVErO0YDdXrEU4uZPbtj3ZDgK.yoIjW'
  );