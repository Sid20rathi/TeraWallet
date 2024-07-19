import img from "/Users/siddhant/Desktop/week-17-final-code-migration/apps/user-app/components/imghai.jpg"
import Image from 'next/image';


export default function() {
   


    return <div className="flex flex-col">
        <div>
        <div className ="pt-11 w-full h-screen flex   justify-center "> 
        <div className=" w-10/12 h-96   rounded-2xl shadow-xl pr-11 bg-red-300 flex flex-row shadow-slate-400" >
           <div className=" pl-20 italic font-serif text-pretty text-6xl flex flex-col  pt-9 font-light">           
             <div>
                Fast,safe
            </div>
            <div className ="italic p-1">
                social
            </div>
            <div className ="italic">
                 payments
            </div>
            <div className="font-light font-mono text-xl pt-4">
            Pay, get paid and more. Join your friends on TeraWallet.
            </div>

           </div>


        <div className = "object-right-bottom w-full h-full text-left flex justify-end pb-48 pt-28 ">
            <div className =" text-white h-full w-96  flex flexEnd pb-48"> 
                <img  src = "/friend.png" alt ="" className="w-96 h-96 rounded-xl shadow-2xl shadow-black "  />
            </div>
        </div>




        </div>
       
 
       
    </div>

        </div>
        <div className = "w-full h-auto flex justify-center pb-40" >
            <div className ="flex flex-col text-7xl font-bold font-serif">
            <div>
            Manage your money on
            </div>
            <div className="text-center text-red-900 ">
            TeraWallet
            </div>

            </div>
       
        </div>

    </div>
}