CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"body" TEXT NOT NULL
);

ALTER TABLE posts RENAME body TO "content";
ALTER TABLE posts ADD COLUMN "createAt" date;