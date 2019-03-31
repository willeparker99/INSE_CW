create database if not exists DealsApp;

create table if not exists DealsApp.Deal (
  id int primary key auto_increment,
  name varchar(30),
  url varchar(100),
  link varchar(100),
  discountFrom int,
  discountTo int
);
create table if not exists DealsApp.Fav (
  id int primary key auto_increment,
  DealID int,
  user varchar(100),
  fav boolean,
  foreign key (DealID) references Deal(id)
);

insert into DealsApp.Deal (name,url,link,discountFrom,discountTo) values (
  "Dominos",
  "img/dominos.jpg",
  "#",
  10,
  50
);
insert into DealsApp.Deal (name,url,link,discountFrom,discountTo) values (
  "Asos",
  "img/asos.jpg",
  "#",
  10,
  50
);

insert into DealsApp.Deal (name,url,link,discountFrom,discountTo) values (
  "Spotify",
  "img/spotify.jpg",
  "#",
  10,
  50
);

insert into DealsApp.Deal (name,url,link,discountFrom,discountTo) values (
  "Pizza Hut",
  "img/pizzahut.png",
  "#",
  10,
  50
);

insert into DealsApp.Deal (name,url,link,discountFrom,discountTo) values (
  "JD Fashion",
  "img/jd.jpg",
  "#",
  10,
  50
);

insert into DealsApp.Deal (name,url,link,discountFrom,discountTo) values (
  "Footasylum",
  "img/footasylum.png",
  "#",
  10,
  50
);

insert into DealsApp.Deal (name,url,link,discountFrom,discountTo ) values (
  "Sky Media",
  "img/sky.jpg",
  "#",
  10,
  50
);

insert into DealsApp.Deal (name,url,link,discountFrom,discountTo ) values (
  "Adidas",
  "img/adidas.jpg",
  "#",
  10,
  50
);

insert into DealsApp.Deal (name,url,link,discountFrom,discountTo ) values (
  "Greggs",
  "img/greggs.jpg",
  "#",
  10,
  50
);
insert into DealsApp.Deal (name,url,link,discountFrom,discountTo ) values (
  "Asus",
  "img/asus.jpg",
  "#",
  10,
  50
);
insert into DealsApp.Deal (name,url,link,discountFrom,discountTo ) values (
  "Dell",
  "img/dell.png",
  "#",
  10,
  50
);
insert into DealsApp.Deal (name,url,link,discountFrom,discountTo ) values (
  "Hollister Clothing",
  "img/hollister.jpg",
  "#",
  10,
  50
);
