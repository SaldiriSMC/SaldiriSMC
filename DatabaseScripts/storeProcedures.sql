DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUsersByDepartmentAndDesignation`(IN `tenantId` INT)
select usrs.id, usrs.name, usrs.email, dept.departmentname, desg.designationName, dept.id as departmentId, desg.id as designationId, usrs.isSignedIn, CASE WHEN (tokens.expires is NULL or tokens.expires < NOW())  THEN 1 ELSE 0 END AS is_token, CASE WHEN (t2.expires is NULL or t2.expires < NOW())  THEN 1 ELSE 0 END AS is_online from
users usrs
left join departments dept on dept.id = usrs.departmentId
left join designations desg on desg.id = usrs.designationId
left join tokens on tokens.user = usrs.id and tokens.type = "resetPassword" or tokens.type = ""
left join tokens as t2 on t2.user = usrs.id and t2.type = "auth"
WHERE usrs.tenantId = tenantId$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_AttendanceByHours`(IN `userId` INT, IN `Date` DATE)
SELECT att.id as attendenceid, att.employeeName, ti.timeIn, ti.timeOut, ti.id as timeId, ROUND(TIMESTAMPDIFF(MINUTE, ti.timeIn, ti.timeOut)/60,4) as Difference
from attendances att 

left join times ti on att.id = ti.attendanceId
WHERE DATE(att.Date) = DATE(Date)
and att.userId = userId$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_AttendanceSumByID`(IN `attendanceId` INT)
SELECT att.id, DATE(att.Date) dtAtt, SUM(ROUND(TIMESTAMPDIFF(MINUTE, ti.timeIn, ti.timeOut)/60,2)) as Difference
from attendances att 
inner join times ti on att.id = ti.attendanceId
    GROUP BY att.id, dtAtt
HAVING  att.id = attendanceId$$
DELIMITER ;