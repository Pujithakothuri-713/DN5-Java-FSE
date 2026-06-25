--Creating tables

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);


--Insert Sample Data
INSERT INTO Customers
VALUES
(1,'John Doe',
TO_DATE('1985-05-15','YYYY-MM-DD'),
1000,
SYSDATE);

INSERT INTO Customers
VALUES
(2,'Jane Smith',
TO_DATE('1990-07-20','YYYY-MM-DD'),
1500,
SYSDATE);

INSERT INTO Customers
VALUES
(3,'Ramesh',
TO_DATE('1950-05-10','YYYY-MM-DD'),
15000,
SYSDATE);

INSERT INTO Customers
VALUES
(4,'Sita',
TO_DATE('1960-08-15','YYYY-MM-DD'),
20000,
SYSDATE);

INSERT INTO Customers
VALUES
(5,'Rahul',
TO_DATE('1952-04-12','YYYY-MM-DD'),
25000,
SYSDATE);

INSERT INTO Customers
VALUES
(6,'Priya',
TO_DATE('1995-11-18','YYYY-MM-DD'),
12000,
SYSDATE);

INSERT INTO Customers
VALUES
(7,'Arjun',
TO_DATE('1948-09-05','YYYY-MM-DD'),
9000,
SYSDATE);

COMMIT;

INSERT INTO Loans
VALUES
(1,1,5000,5,
SYSDATE,
ADD_MONTHS(SYSDATE,60));

INSERT INTO Loans
VALUES
(2,3,10000,6,
ADD_MONTHS(SYSDATE,-24),
SYSDATE+15);

INSERT INTO Loans
VALUES
(3,4,15000,5.5,
ADD_MONTHS(SYSDATE,-36),
SYSDATE+25);

INSERT INTO Loans
VALUES
(4,5,50000,8,
ADD_MONTHS(SYSDATE,-24),
SYSDATE+10);

INSERT INTO Loans
VALUES
(5,6,30000,7,
ADD_MONTHS(SYSDATE,-12),
SYSDATE+20);

INSERT INTO Loans
VALUES
(6,7,20000,9,
ADD_MONTHS(SYSDATE,-36),
SYSDATE+60);

COMMIT;


--Add VIP Column
ALTER TABLE Customers
ADD IsVIP VARCHAR2(5);

--Exercise 1 - Scenario 1
Apply 1% Discount to Loan Interest Rates for Customers Above 60 Years

SET SERVEROUTPUT ON;

BEGIN

    FOR cust IN
    (
        SELECT CustomerID, DOB
        FROM Customers
    )
    LOOP

        IF FLOOR(MONTHS_BETWEEN(SYSDATE,cust.DOB)/12) > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Interest rate updated for Customer ID '
                || cust.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;

END;

--Verify
SELECT LoanID,
       CustomerID,
       InterestRate
FROM Loans
ORDER BY LoanID;

--Scenario 2
Promote Customers to VIP

BEGIN

    FOR cust IN
    (
        SELECT CustomerID,
               Balance
        FROM Customers
    )

    LOOP

        IF cust.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP='TRUE'
            WHERE CustomerID=cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer '
                || cust.CustomerID
                || ' promoted to VIP.'
            );

        ELSE

            UPDATE Customers
            SET IsVIP='FALSE'
            WHERE CustomerID=cust.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;

--Verify
SELECT CustomerID,
       Name,
       Balance,
       IsVIP
FROM Customers
ORDER BY CustomerID;

--Scenario 3
Print Reminder Messages for Loans Due Within 30 Days

SET SERVEROUTPUT ON;

BEGIN

    FOR loan IN
    (

        SELECT
            c.Name,
            l.LoanID,
            l.EndDate

        FROM Customers c
        JOIN Loans l

        ON c.CustomerID=l.CustomerID

        WHERE l.EndDate
        BETWEEN SYSDATE
        AND SYSDATE+30

    )

    LOOP

        DBMS_OUTPUT.PUT_LINE(

            'Reminder: '

            || loan.Name

            || ' (Loan ID: '

            || loan.LoanID

            || ') Loan Due Date: '

            || TO_CHAR(loan.EndDate,'DD-MON-YYYY')

        );

    END LOOP;

END;
/


BEGIN

    FOR cust IN
    (
        SELECT CustomerID, DOB
        FROM Customers
    )
    LOOP

        IF FLOOR(MONTHS_BETWEEN(SYSDATE, cust.DOB)/12) > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Interest Rate Updated for Customer ID : '
                || cust.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;

END;

--Verify Data
Customers

SELECT *
FROM Customers
ORDER BY CustomerID;

--Loans
SELECT *
FROM Loans
ORDER BY LoanID;

