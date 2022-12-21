/*
  Warnings:

  - Added the required column `group` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "group" CHAR NOT NULL;
