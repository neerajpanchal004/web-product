"use client"
import React, { useContext, useEffect,} from 'react'
import { UserContext } from '../context/Contextapi'
import {getData} from './Constant'
import ProductCard from './ProductCard'
import Loader from './Loader'


const MenWear = () => {
    const { menWear,setMenWear,setRoute } = useContext(UserContext)
    

    useEffect(() => {
        let apipoint = "/api/getProducts?category=menwear";
        getData(apipoint, setMenWear); 
    }, [])
    
    if (menWear==undefined) {
        return <Loader/>
    }
    setRoute("menwear")
    return (
        <>
                                    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 border-2  gap-x-5 gap-y-16 px-10'>

            {menWear.map((Cloth) => {
                return (
                   <ProductCard key={Cloth.id} {...Cloth}/>
                )

            })}
            </div>
        </>
    )
}


export default MenWear