-- AlterTable
ALTER TABLE `Employee` ADD COLUMN `designatedArea` VARCHAR(100) NULL,
    ADD COLUMN `employeeStatus` VARCHAR(50) NULL,
    ADD COLUMN `foodCategory` VARCHAR(50) NULL,
    ADD COLUMN `gender` VARCHAR(20) NULL,
    ADD COLUMN `grade` VARCHAR(20) NULL,
    ADD COLUMN `iqamaNumber` VARCHAR(50) NULL,
    ADD COLUMN `jobCategory` VARCHAR(50) NULL,
    ADD COLUMN `mobile` VARCHAR(50) NULL,
    ADD COLUMN `nationality` VARCHAR(50) NULL;

-- CreateIndex
CREATE INDEX `Employee_iqamaNumber_idx` ON `Employee`(`iqamaNumber`);
