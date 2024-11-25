'use client'

// import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const [maison, setMaison] = useState([]);


  return(
    <>
      <div className="bg-[url(https://media.istockphoto.com/id/500276137/fr/photo/villa-moderne-de-lint%C3%A9rieur.jpg?s=612x612&w=0&k=20&c=Px6KK7iVsjHVu-AlK-9sGgf7zNhOYTmsrxA9JUJTDas=)] bg-cover bg-left-bottom bg-no-repeat h-screen" >
        <div className=" bg-black bg-opacity-40 h-screen ">
          <div className="flex flex-col items-center p-40">
            <h1 className=" text-5xl capitalize text-white font-semibold ">recherche appartement ou maison</h1>
            <p className="text-white text-lg my-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt obcaecati eum qui iure dolore fugit ipsum nesciunt rem perferendis? Excepturi ipsum earum dolorem fugit maxime labore quidem consequuntur, corrupti minima.</p>
            <button className="bg-white rounded-full py-3 px-4 text-base capitalize font-bold">reservez maintenant</button>
          </div>
      
        </div>
      </div>
      <h1>bonjour les gens</h1>
    </>
  )

}
