"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";
import db from "@repo/db/client";



export default async function Transfermoney(to: string , amount : number){


    const session =  await getServerSession(authOptions);
    const from = session?.user?.id;
    if(!from){
        return{
            message : "user not logged in"
    
        }
    }

    const touser = await prisma.user.findFirst({
        where :{
            number : to 
            
        }
     
    })
    if(!touser){
        return {
            message: "user not found"
        }
    }

    await prisma.$transaction(async(tsx)=>{
        const frombalance = await tsx.balance.findUnique({
            where :{
                userId : Number(from)

            }
        })
        if(!frombalance || frombalance.amount < amount){
            throw new Error("not enough funds, add more money in the bank ")
        }
        await tsx.balance.update({
            where :{
                userId : Number(from)
            },
            data :{
                amount : {
                    decrement : amount
                }
            }
        })
        await tsx.balance.update({
            where :{
                userId : touser.id
            },
            data:{
                amount : {
                    increment : amount
                }
            }
        })
       

        try {
            const update = await db.p2p.create({
                data: {
                    time: new Date(),
                    amount: amount,
                    fromUserId: Number(from),
                    toUserId: Number(touser.id),
                },
            });
            console.log('P2P transaction created successfully', update);
        } catch (error) {
            console.error('Error creating p2p record:', error);
        }
       console.log ("money send ")

    })







}