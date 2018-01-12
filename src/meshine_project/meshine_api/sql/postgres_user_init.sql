--sudo -u postgres psql
CREATE DATABASE meshine;
CREATE USER meshine WITH PASSWORD 'meshine';
ALTER ROLE meshine SET client_encoding = 'utf8';
ALTER ROLE meshine SET default_transaction_isolation = 'read committed';
ALTER ROLE meshine SET timezone = 'UTC';
GRANT ALL PRIVILEGES ON DATABASE meshine TO meshine;