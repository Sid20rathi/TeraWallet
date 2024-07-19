
import { Card } from '@repo/ui/card';
import React from 'react';
import prisma from "@repo/db/client";


 
export const PastTransfer = async ({
    trans
}:{
    trans:{
    time : Date,
    amount : number,
    toUserId : number
}[]
})=>{
    if(!trans.length){
        return <div className = "w-full pr-5 h-auto">
            <Card title = " Recent Transactions">
                <div className = " font-semibold">
                    You haven't done any transactions yet
                </div>
            </Card>
        </div>
    }
    const hi = trans.map(t=> t.toUserId)
  
    const Number = await  prisma.user.findFirst({
        where :{
            id : {
                in : hi


            } 
        }

    })
  
    return <div className =" w-full pr-5 h-auto">
        <Card title = "Recent Transactions " >
            {trans.map(t=> <div>
                
                <div className =" flex justify-between w-full h-full" >
                <div className ="pt-2 font-semibold">
                    Sent INR

                </div>
                <div className ="pt-2">
                    - RS {t?.amount/100}

                </div>

            </div>
            <div className='flex flex-row'>
                {t.time.toDateString()} to <div className='pl-2 font-semibold'>{Number?.number}</div>
            </div>
            </div>  )}
        


        </Card>
      
    </div>

}