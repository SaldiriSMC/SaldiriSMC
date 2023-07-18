DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_AttendanceByHours`(IN `userId` INT, IN `Date` DATE)
SELECT att.id as attendenceid, att.employeeName, ti.timeIn, ti.timeOut, ti.id as timeId, ROUND(TIMESTAMPDIFF(MINUTE, ti.timeIn, ti.timeOut)/60,2) as Difference
from attendances att 

left join times ti on att.id = ti.attendanceId
WHERE DATE(att.Date) = DATE(Date)
and att.userId = userId$$
DELIMITER ;
