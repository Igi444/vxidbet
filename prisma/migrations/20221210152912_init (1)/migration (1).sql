-- CreateTable
CREATE TABLE "Country" (
    "name" TEXT NOT NULL,
    "iso2" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "squad" TEXT,
    "points" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_iso2_key" ON "Country"("iso2");
