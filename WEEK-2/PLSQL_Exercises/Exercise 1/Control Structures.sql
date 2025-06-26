CREATE TABLE Customers (
    CustomerID   NUMBER PRIMARY KEY,
    Name         VARCHAR2(100) NOT NULL,
    Age          NUMBER CHECK (Age >= 0),
    Balance      NUMBER(10,2),
    IsVIP        VARCHAR2(5) DEFAULT 'FALSE' CHECK (IsVIP IN ('TRUE', 'FALSE'))
);

CREATE TABLE Loans (
    LoanID       NUMBER PRIMARY KEY,
    CustomerID   NUMBER REFERENCES Customers(CustomerID),
    DueDate      DATE NOT NULL,
    InterestRate NUMBER(5,2)
);

INSERT INTO Customers (CustomerID, Name, Age, Balance, IsVIP)
VALUES (1, 'Rajesh Kumar', 65, 15000, 'FALSE');

INSERT INTO Customers (CustomerID, Name, Age, Balance, IsVIP)
VALUES (2, 'Priya Sharma', 45, 9000, 'FALSE');

INSERT INTO Customers (CustomerID, Name, Age, Balance, IsVIP)
VALUES (3, 'Anita Reddy', 70, 12000, 'FALSE');


INSERT INTO Loans (LoanID, CustomerID, DueDate, InterestRate)
VALUES (101, 1, SYSDATE + 40, 10.5); 

INSERT INTO Loans (LoanID, CustomerID, DueDate, InterestRate)
VALUES (102, 2, SYSDATE + 20, 11.0); 

INSERT INTO Loans (LoanID, CustomerID, DueDate, InterestRate)
VALUES (103, 3, SYSDATE + 10, 12.0);  
COMMIT;

/* Scenario 1: Apply 1% Discount to Loan Interest Rates for Customers Over 60 */

BEGIN
    FOR rec IN (
        SELECT l.LoanID, l.InterestRate, c.CustomerID, c.Name
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE c.Age > 60
    )
    LOOP
        -- Apply 1% discount
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = rec.LoanID;

        -- Show message
        DBMS_OUTPUT.PUT_LINE('1% discount applied for ' || rec.Name || 
                             ' (Customer ID: ' || rec.CustomerID || ')');
    END LOOP;
END;
/

SELECT LoanID, CustomerID, InterestRate FROM Loans;

/*  Scenario 2: Promote Customers to VIP Based on Balance */

BEGIN
    FOR rec IN (
        SELECT CustomerID, Name
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = rec.CustomerID;

        DBMS_OUTPUT.PUT_LINE(rec.Name || ' (Customer ID: ' || rec.CustomerID || ') has been promoted to VIP.');
    END LOOP;
END;
/

SELECT CustomerID, Name, Balance, IsVIP FROM Customers;

/*Scenario 3: Loan reminders for due dates within next 30 days.*/

BEGIN
    FOR rec IN (
        SELECT l.LoanID, c.Name, l.DueDate
        FROM Loans l
        JOIN Customers c ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            ' Reminder: Loan ID ' || rec.LoanID || 
            ' for ' || rec.Name || 
            ' is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/

-- to get the list of loans and their due dates.
SELECT l.LoanID, c.Name, l.DueDate
FROM Loans l
JOIN Customers c ON l.CustomerID = c.CustomerID
WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30;