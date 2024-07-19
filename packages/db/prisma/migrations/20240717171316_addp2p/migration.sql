-- CreateTable
CREATE TABLE "p2p" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUser" INTEGER NOT NULL,

    CONSTRAINT "p2p_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "p2p" ADD CONSTRAINT "p2p_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "p2p" ADD CONSTRAINT "p2p_toUser_fkey" FOREIGN KEY ("toUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
