CREATE TABLE `courses` (
    `name` VARCHAR(20) NOT NULL,
    'year' INT NOT NULL,
    `department` INT NOT NULL,
    'personal_num' INT NOT NULL,
    `major` VARCHAR(8) NOT NULL,
    `phone_num` VARCHAR(16) NOT NULL,
    'address' VARCHAR(50) NOT NULL,
    'sum_credit' INT DEFAULT 0,
    'avg_grade' DOUBLE DEFAULT 0.0,
    `is_attend` TINYINT(1) DEFAULT 1,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;