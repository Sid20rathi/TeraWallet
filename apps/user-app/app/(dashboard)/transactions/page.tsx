import { Card } from "@repo/ui/card"
import { authOptions } from "app/lib/auth"
import { getServerSession } from "next-auth"
import { PastTransfer } from "../../../components/past";
import prisma from "@repo/db/client";


export default async function() {
    const session = await getServerSession(authOptions);
    const login = session?.user?.id
    if(!login){
        return (
            <div>
                <h4 className="font-bold text-black">Pls login to access your Transactions</h4>
            </div>
            
            
        )
    }
    const transfer = await alldata();
    
    return <div className = "w-full flex justify-center h-80 pt-9">
                 <PastTransfer  trans = {transfer} />
       
       
       

      
        
    </div>
}   

export  async function alldata(){
    const session = await getServerSession(authOptions);
    const access = await prisma.p2p.findMany({
        where :{
            fromUserId : Number(session?.user?.id)

        }
    })
    return access.map(t=>({
        time : t.time,
        amount : t.amount,
        toUserId : t.toUserId
    }))


}