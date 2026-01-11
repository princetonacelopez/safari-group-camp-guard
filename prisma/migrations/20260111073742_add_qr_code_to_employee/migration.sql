/*
  Warnings:

  - A unique constraint covering the columns `[qrCode]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Employee` ADD COLUMN `qrCode` VARCHAR(255) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Employee_qrCode_key` ON `Employee`(`qrCode`);
