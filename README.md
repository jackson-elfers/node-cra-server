## install

```
npm run install
cd client && npm run install
```

## dev

```
npm run dev
```

## build

```
npm run build
```

## build server

```
npm run start
```

## install and run mysql (ubuntu)
```
sudo apt-get update
sudo apt-get install mysql-server

sudo mysql_secure_installation utility

sudo systemctl start mysql

sudo mysql -u root -p

CREATE USER "admin"@"%" IDENTIFIED BY "12345";
GRANT ALL PRIVILEGES ON *.* TO "admin"@"%";
```

## create .env file in project root /
```
PORT=5000
MYSQL_CONNECTION_LIMIT=100
MYSQL_HOST=localhost
MYSQL_USER=admin
MYSQL_PASSWORD=12345
MYSQL_DATABASE=dev
```
