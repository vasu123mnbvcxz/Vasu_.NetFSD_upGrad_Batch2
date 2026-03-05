use MyEcommDB

--1.Display product_name, brand_name, category_name, model_year, and list_price. 

select p.product_name, b.brand_name, c.category_name, model_year,list_price from products p
inner join brands b on b.brand_id=p.brand_id 
inner join categories c
on c.category_id=p.category_id

--2. Filter products with list_price greater than 500. 

select * from products where list_price>500;


--3. Sort results by list_price in ascending order.

select * from products where list_price>500 order by list_price desc;