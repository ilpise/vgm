# mogo client 
Per collegarsi a mongodb atlas da command line è necessario utilizzare mongoclient 4.0.4 che va scaricato

~/Mindly/vgm/mongodb-linux-x86_64-ubuntu1604-4.0.4/bin$ ./mongo "mongodb://cluster0-shard-00-00-yikde.mongodb.net:27017,cluster0-shard-00-01-yikde.mongodb.net:27017,cluster0-shard-00-02-yikde.mongodb.net:27017/test?replicaSet=Cluster0-shard-0" --ssl --authenticationDatabase admin --username vgm --password 1qazxsw2
MongoDB shell version v4.0.4
connecting to: mongodb://cluster0-shard-00-00-yikde.mongodb.net:27017,cluster0-shard-00-01-yikde.mongodb.net:27017,cluster0-shard-00-02-yikde.mongodb.net:27017/test?replicaSet=Cluster0-shard-0
2018-11-13T18:38:27.290+0100 I NETWORK  [js] Starting new replica set monitor for Cluster0-shard-0/cluster0-shard-00-00-yikde.mongodb.net:27017,cluster0-shard-00-01-yikde.mongodb.net:27017,cluster0-shard-00-02-yikde.mongodb.net:27017
2018-11-13T18:38:27.526+0100 I NETWORK  [js] Successfully connected to cluster0-shard-00-00-yikde.mongodb.net:27017 (1 connections now open to cluster0-shard-00-00-yikde.mongodb.net:27017 with a 5 second timeout)
2018-11-13T18:38:27.526+0100 I NETWORK  [ReplicaSetMonitor-TaskExecutor] Successfully connected to cluster0-shard-00-01-yikde.mongodb.net:27017 (1 connections now open to cluster0-shard-00-01-yikde.mongodb.net:27017 with a 5 second timeout)
Implicit session: session { "id" : UUID("7c1f9ea9-61b5-4ba9-ad64-b23278ecd1f7") }
2018-11-13T18:38:27.736+0100 I NETWORK  [ReplicaSetMonitor-TaskExecutor] Successfully connected to cluster0-shard-00-02-yikde.mongodb.net:27017 (1 connections now open to cluster0-shard-00-02-yikde.mongodb.net:27017 with a 5 second timeout)
MongoDB server version: 3.6.8
WARNING: shell and server versions do not match
Error while trying to show server startup warnings: user is not allowed to do action [getLog] on [admin.]
MongoDB Enterprise Cluster0-shard-0:PRIMARY> show databases;
admin  0.000GB
local  2.783GB
test   0.000GB
MongoDB Enterprise Cluster0-shard-0:PRIMARY> exit
bye

# Mongo db php 
The currently maintained driver is the [mongodb](https://pecl.php.net/package/mongodb) extension available from PECL.

This driver can be used stand-alone, although it is very bare-bones. You should consider using the driver with the complimentary [PHP library](https://github.com/mongodb/mongo-php-library), which implements a more full-featured API on top of the bare-bones driver. Further information on this architecture may be found in the [PHP.net documentation](http://php.net/manual/en/mongodb.overview.php).
# Insall PHP Library for MongoDB

http://php.net/manual/en/mongodb.tutorial.library.php

https://github.com/mongodb/mongo-php-library

# Installazione
Ho installato il pacchetto
```
sudo apt-get install php-mongodb
```

ed abilitarlo con 
```
sudo phpenmod mongodb
```

Questo pacchetto fornisce la base bare-bones con le classi base
```
$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");
```
ma non riesce ad effettuare l'autenticazione in quanto la versione è troppo vecchia.

## 
Come da documentazione installiamo l'estensione PECL
Installato
```
sudo apt-get install php7.0-dev
```
Installato
```
sudo apt-get install php-pear
```
Installato mongodb PECL extesion/module
```
sudo pecl install mongodb
```
L'extension va a sovrascrivere quella relativa al pacchetto fornito da repository
```
Installing '/usr/lib/php/20151012/mongodb.so'
```



