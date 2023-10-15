-- Problem Statement: https://leetcode.com/problems/nth-highest-salary/description/

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    DECLARE M INT;
    SET M = N - 1;
    RETURN (
        SELECT DISTINCT salary
        FROM employee
        ORDER BY salary DESC
        LIMIT 1 OFFSET M
    );
END