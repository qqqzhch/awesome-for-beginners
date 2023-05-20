"use client"
import Image from 'next/image'
import data from '../data.json'
import { use, useCallback, useMemo, useState } from 'react';

type technologie={
  key:string,
  num:number
}
export default function Home() {
  const [technologie,setTechnologie]=useState<string>()
  const [search,setSearch]=useState<string>()
  const technologies = useMemo(()=>{
    let list:technologie[]=[]
    if(data==null){
      return list
    }
    data.repositories.forEach((it)=>{

      it.technologies.forEach((key)=>{
        let one = list.find((item)=>item.key==key);
       if(one==undefined){
        list.push({key,num:1})
       }else{
        one.num+=1;  
       }
      })


    })
    return list
   },[])

   const repositoriesList =useMemo(()=>{
    if(technologie==undefined&&search==undefined){
      return data.repositories 
    }
   const list = data.repositories.filter((item)=>{
    let result;
    if(search!==undefined&&search!==""){
      result =(item.name.toLowerCase().includes(search.toLowerCase())||
              item.technologies.includes(search.toLowerCase())||
              item.description.toLowerCase().includes(search.toLowerCase()))
    }
    if(technologie!==undefined){
      result=item.technologies.includes(technologie)||result
    }
    return result
    
   
    })
    return list

   },[technologie,search])

  return (
   <>
   
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white capitalize">awesome-for-beginners</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default ">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="capitalize block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="capitalize block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">how to use git</a>
        </li>
        <li>
          <a href="#" className="capitalize block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">how to opening an issue</a>
        </li>
        <li>
          <a href="#" className="capitalize block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">how to open a good pull request</a>
        </li>
        <li>
          <a href="#" className="capitalize block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">git hub</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 <main className=" container m-auto flex flex-col min-h-screen bg-white">
 <section className=' text-center   mt-32'>
 <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white capitalize">awesome-for-beginners
</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">A list of awesome beginners-friendly projects.</p>


 </section>
 <section className=' flex'>
  
{/* <div className=' w-full max-w-2xl  m-auto'>   
  <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input onChange={(e)=>{setSearch(e.currentTarget.value);console.log(e.currentTarget.value)}} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
      </input>
      <button  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
  </div>
</div> */}
 </section>
 <section>
 <div className='flex  flex-row flex-wrap  my-10 justify-center '>
    {technologies.map((one,index)=>{
      return (<button key={index} onClick={()=>{setTechnologie(one.key)}} type="button" 
      className={`m-1 text-blue-700 hover:text-white border ${technologie==one.key?"bg-blue-800 text-white":""} border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800`}>
        {one.key}
        <span className="inline-flex items-center justify-center   min-w-[1.5rem]  h-6 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
        {one.num}
  </span>
        </button>)
    })}
  </div>
  {repositoriesList.map((item,index)=>{
    return (
      <div key={index} className="container flex flex-col w-full max-w-2xl p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			{/* <div>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div> */}
			<div>
				<h4 className="font-bold">{item.name}</h4>
				<span className="text-xs dark:text-gray-400">{item.label}</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
			{item.technologies.map((tag,index)=>{
        return (
          <span key={index} className="text-xl font-bold">{tag}</span>
        )

      })}
			
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-400">
		<p>{item.description}</p>
	</div>
  <div className=' text-center p-10'>
  
<a target='_blank' href={item.link} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more</a>

  </div>

</div>

    )
  })}


 

 </section>

</main>
<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
  </span>
  <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
      </li>
      <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
      </li>
      <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
      </li>
      <li>
          <a href="#" className="hover:underline">Contact</a>
      </li>
  </ul>
  </div>
</footer>
</>
  )
}



