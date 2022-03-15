-- @BLOCK
CREATE TABLE sivuvaikutukset
(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Kuvaus VARCHAR (255)
)
-- @BLOCK
SELECT Kuvaus from sivuvaikutukset

-- @BLOCK
INSERT into sivuvaikutukset(kuvaus) VALUES(
    "Turhuuden turhuus"
)
-- @BLOCK
DROP TABLE sivuvaikutukset
-- @BLOCK
SELECT Kuvaus from sivuvaikutukset