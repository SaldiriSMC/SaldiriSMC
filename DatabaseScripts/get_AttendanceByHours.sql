DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_AttendanceByHours`(IN `attendanceDate` DATE, IN `empID` INT)
SELECT att.id, att.employeeName, ti.timeIn, ti.timeOut, ROUND(TIMESTAMPDIFF(MINUTE, ti.timeIn, ti.timeOut)/60,2) as Difference
from attendances att 

inner join times ti on att.id = ti.attendanceId
WHERE DATE(ti.timeIn) = DATE(attendanceDate)
and att.id = empID$$
DELIMITER ;