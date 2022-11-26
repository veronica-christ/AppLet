--survusers TABLE
DROP TABLE IF EXISTS survusers ;
CREATE TABLE survusers(
    userid SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phonenumber VARCHAR(15) NOT NULL,
    usertype VARCHAR(15),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    password VARCHAR(255) NOT NULL
);

--survlist TABLE
DROP TABLE IF EXISTS survlist ;
CREATE TABLE survlist(
    survid SERIAL PRIMARY KEY,
    title VARCHAR(100),
    desciption VARCHAR(255),
    status VARCHAR(12),
    code VARCHAR(12),
    userid integer,
    FOREIGN KEY(userid) REFERENCES survusers (userid)
);

CREATE TABLE QnA (
        survey_id varchar(255),
        question varchar(255),
        option1 varchar(255), 
        option2 varchar(255), 
        option3 varchar(255)
);
CREATE TABLE surveys (
    survey_id varchar PRIMARY KEY,
    title varchar(255), 
    description varchar(255), 
    status varchar(255)
);
    