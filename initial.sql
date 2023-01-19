CREATE TABLE Administrators(
	id SERIAL NOT NULL,
	login varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (id, login)
);

INSERT INTO Administrators(id, login, password)
VALUES
	('1', 'adm1','123456789'),
	('2', 'admin2', 'my_password'),
	('3', 'administrator', 'administrator_pass'),
	('4', 'adm22', 'hello_world'),
	('5', 'monstr_vasya', 'i_am_admin');
	
CREATE TABLE Pet_Sitters(
	id SERIAL NOT NULL,
	name VARCHAR(255) NOT NULL,
	surname VARCHAR(255) NOT NULL,
	date_of_birth DATE NOT NULL,
	addres VARCHAR(255) NOT NULL,
	login varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	phone_number VARCHAR(255) NOT NULL,
	walking boolean,
	care boolean,
	nanny boolean,
	PRIMARY KEY (id),
	UNIQUE (id, login)
);

INSERT INTO Pet_Sitters(id, name, surname, date_of_birth, addres, login, password, email, phone_number, walking, care, nanny)
VALUES
	('6', 'Иван', 'Иванов','1.1.2001','г. Витебск, пр-т Московский, д.15','user1','pass1','ivan1@mail.com','+375331111111','1','0','0'),
	('7', 'Мария', 'Крылова','10.10.1992','г. Витебск, пр-т Строителей, д.17','user2','pass2','marry@mail.com','+375293759865','1','1','1'),
	('8', 'Владислав', 'Смирнов','25.07.2000','г. Витебск, пр-т Фрунзе, д.33, к.508','user3','pass3','pirateking1@mail.com','+375333173356','1','0','0'),
	('9', 'Дарья', 'Симанова','15.08.1998','г. Витебск, ул. Титова, д.81','dasha','123357882','woodscream@mail.com','+375336958736','0','1','1'),
	('10', 'Виолетта', 'Иванова','1.1.2001','г. Витебск, пр-т Московский, д.15','user5','pass5','viola1@mail.com','+375331111112','1','0','0');
	
	
	
CREATE TABLE Users(
	id SERIAL NOT NULL,
	name VARCHAR(255) NOT NULL,
	surname VARCHAR(255) NOT NULL,
	login varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	phone_number VARCHAR(255) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (id, login)
);

INSERT INTO Users(id, name, surname,login, password, email, phone_number)
VALUES
	('11', 'Жанна', 'Петрова','jane1598','pult_ot_televizora','jannet@mail.com','+375447859635'),
	('12', 'Семен', 'Лобанов','USER','i_am_SEMEN111','fireball@mail.com','+375258654736'),
	('13', 'Майя', 'Астапенок','your_light','may','may@mail.com','+375338759625'),
	('14', 'Виктор', 'Пугачев','victor_is_victory','lkjui222','vyctor@mail.com','+375253698547'),
	('15', 'Зинаида', 'Зайцева','zayka1598','123987456','zaya@mail.com','+375333175986');

CREATE TABLE Pets(
	id SERIAL NOT NULL,
	id_of_owner INTEGER,
	name VARCHAR(255),
	type VARCHAR(255),
	PRIMARY KEY (id),
	UNIQUE (id),
	CONSTRAINT fk_owner_of_pet FOREIGN KEY (id_of_owner) REFERENCES users (id)
);

INSERT INTO Pets(id, id_of_owner, name, type)
VALUES
	('16', '11', 'Барон', 'Собака'),
	('17', '13', 'Шаниэль', 'Кошка'),
	('18', '15', 'Жучка', 'Собака'),
	('19', '12', 'Бублик', 'Собака'),
	('20', '14', 'Мурка', 'Кошка');

CREATE TABLE Rewiews(
	id SERIAL NOT NULL,
	id_of_petsitter INTEGER,
	id_of_user INTEGER,
	rewiew TEXT,
	PRIMARY KEY (id),
	CONSTRAINT fk_id_petsitters FOREIGN KEY (id_of_petsitter) REFERENCES Pet_Sitters(id),
	CONSTRAINT fk_id_user FOREIGN KEY (id_of_user) REFERENCES Users(id)
);

INSERT INTO Rewiews(id, id_of_petsitter, id_of_user, rewiew)
VALUES
	('21', '8', '11', 'Отличный ситтер!'),
	('22', '9', '12', 'Все круто'),
	('23', '10', '13', 'Плохо'),
	('24', '6', '14', 'Кошечка в целости'),
	('25', '7', '15', 'Не помыли лапы...');
	
CREATE TABLE Orders(
	id SERIAL NOT NULL,
	type_of_services VARCHAR(255),
	id_of_petsitter INTEGER,
	id_of_pet INTEGER,
	price MONEY,
	CONSTRAINT fk_id_petsitter FOREIGN KEY (id_of_petsitter) REFERENCES Pet_Sitters(id),
	CONSTRAINT fk_id_pet FOREIGN KEY (id_of_pet) REFERENCES Pet(id)
)	;

INSERT INTO Orders(id, type_of_services, id_of_petsitter, id_of_pet, price)
VALUES
	('26', 'выгул', '8', '16', '10'),
	('27', 'передержка', '9', '17', '15'),
	('28', 'дневная няня', '10', '18', '13'),
	('29', 'передержка', '6', '20', '17'),
	('30', 'выгул', '7', '19', '9');


