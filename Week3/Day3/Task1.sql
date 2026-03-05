
use MyEcommDB

--Retrieve customer first name, last name, order_id, order_date, and order_status. 
	select C.first_name,last_name,o.order_id, o.order_date, o.order_status from customers C 
	inner join orders O 
	on c.customer_id=O.customer_id

--2. Display only orders with status Pending (1) or Completed (4). 

select * from orders where order_status=1 or order_status=4

--3. Sort the results by order_date in descending order.

select * from orders where order_status=1 or order_status=4 order by order_date desc