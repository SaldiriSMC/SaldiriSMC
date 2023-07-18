DELIMITER $$
CREATE DEFINER=`techteam`@`localhost` PROCEDURE `getUsersByDepartmentAndDesignation`(IN `tenantId` INT(255))
    COMMENT 'no'
select usrs.id, usrs.name, usrs.email, dept.departmentname, desg.designationName, dept.id as departmentId, desg.id as designationId, usrs.isSignedIn, CASE WHEN (tokens.expires is NULL or tokens.expires < NOW())  THEN 1 ELSE 0 END AS is_token from
users usrs
inner join departments dept on dept.id = usrs.departmentId
inner join designations desg on desg.id = usrs.designationId
left join tokens on tokens.user = usrs.id and tokens.type = "resetPassword" or tokens.type = ""
WHERE usrs.tenantId = tenantId$$
DELIMITER ;
