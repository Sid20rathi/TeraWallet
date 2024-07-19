"use client"

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import Transfermoney from "app/lib/actions/p2p";

import { useState } from "react";



export default function P2P(){
    const[amount , Setamount ] = useState("");
    const[number, SetNumber] = useState("");
    return(
        <div>
            <div className = "text-4xl  text-[#6a51a6] font-extrabold pt-9">
                PAY TO  YOUR FRIEND
            
            </div>
            <div className="flex flex-col h-full w-full  gap-4 md:grid-cols-2 p-4 pt-32 pl-48">
                <div className="flex justify-center">
                    <Card title="Send MONEY ">
                    <div>
            <label  className="block mb-1 text-sm mt-6 font-medium text-gray-900 ">Number/Name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Number" required  onChange={(e)=>{
                SetNumber(e.target.value);
            
            }}/>
        </div>
        
        <div>
            <label  className="block mb-1 mt-6 text-sm font-medium text-gray-900 ">Amount</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Amount" required onChange ={(e)=>{
                Setamount(e.target.value)
            }} />
        </div>
        <div className="flex justify-center pt-5">
            <Button  onClick={ async ()=>{
                await Transfermoney(number, Number(amount)*100);  
            }}> send Money</Button>
            </div>                        
                    </Card>
       
                    
                </div>
                
            </div>
        </div>
    )
}