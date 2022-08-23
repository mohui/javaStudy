```sql
select id,
       patient_id,
       patient_name,
       follow_date
from (select row_number() over (partition by patient_id order by follow_date asc ) as KeyId,
             id,
             patient_id,
             patient_name,
             follow_date
      from hs_htn_visit) a
where KeyId = 1
```