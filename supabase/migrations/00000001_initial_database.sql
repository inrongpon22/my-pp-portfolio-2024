CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- for uuid generation

-- admins table
-- Create ENUM type for admins roles
CREATE TYPE admin_role AS ENUM ('admin', 'super_admin');

CREATE TABLE admins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  role admin_role NOT NULL DEFAULT 'admin',
  email VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  phone VARCHAR(255),
  address JSONB,
  images JSONB,
  password_hashed VARCHAR(255) NOT NULL, -- Store hashed passwords, NEVER plain text!
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);

CREATE TABLE admin_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_id UUID NOT NULL REFERENCES admins(id),
  session_token VARCHAR(255) NOT NULL UNIQUE, -- JWT token
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  revoked_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);

-- INDEXES FOR FASTER LOOKUP FOR SESSIONS BY admin_id
CREATE INDEX idx_admin_sessions_admin_id ON admin_sessions(admin_id);
-- INDEXES FOR FASTER LOOKUP FOR SESSIONS BY session_token
CREATE INDEX idx_admin_sessions_session_token ON admin_sessions(session_token);



-- users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  password_hashed VARCHAR(255) NOT NULL, -- Store hashed passwords, NEVER plain text!
  email VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  phone VARCHAR(255),
  address JSONB,
  images JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);

CREATE TABLE user_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  session_token VARCHAR(255) NOT NULL UNIQUE, -- JWT token
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  revoked_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
);