DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_AttendanceSumByID`(IN `empID` INT, IN `attendanceDate` DATE)
SELECT att.id, DATE(att.Date) dtAtt, SUM(ROUND(TIMESTAMPDIFF(MINUTE, ti.timeIn, ti.timeOut)/60,2)) as Difference
from attendances att 
inner join times ti on att.id = ti.attendanceId
    GROUP BY att.id, dtAtt
HAVING  att.id = empID
AND DATE(dtAtt) = DATE(attendanceDate)$$
DELIMITER ;