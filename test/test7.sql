update em
set  em.salary = (em.salary * (1.00+ cn.anual_adjustment/100.00))
from employees em
inner join countries co
on co.id = em.country_id
inner join continents cn
on cn.id = co.continent_id
where em.salary <= 5000 