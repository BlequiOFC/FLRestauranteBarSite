CREATE DATABASE db_flrestaurante;
USE flrestaurante;

CREATE TABLE tb_produtos (
	id_produto int auto_increment primary key,
    nm_produto varchar(50) not null,
    desc_produto varchar(200) not null,
    vl_produto int not null,
    img_produto longblob not null
);

select * from produtos;