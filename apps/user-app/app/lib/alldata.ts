import { getServerSession } from "next-auth";
import { authOptions } from "app/lib/auth";
import prisma from "@repo/db/client";

export async function alldata() {
    const session = await getServerSession(authOptions);
    const access = await prisma.p2p.findMany({
        where: {
            fromUserId: Number(session?.user?.id),
        },
    });
    return access.map((t) => ({
        time: t.time,
        amount: t.amount,
        toUserId: t.toUserId,
    }));
}
