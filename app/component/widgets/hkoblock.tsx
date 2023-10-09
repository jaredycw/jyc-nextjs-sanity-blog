"use client"
import useSWR, { preload } from 'swr';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function HKOWeatherWidget(){

    const fetcher = (url:string) => fetch(url).then((r) => r.json());
    const { data: hkoWeather, isLoading} = useSWR('/api/weather', fetcher)
  
      if (isLoading) return <div>Loading...</div>

    return(
        <div>
            <h1>Weather - HK</h1>

            <div className=" flex flex-wrap flex-col md:flex-row items-center now-playing p-6">
            <h2 className="mb-5 ml-0 md:ml-5 uppercase border-b">Today</h2>
            <div className="mb-5 ml-0 md:ml-5">
                <Image src={`https://www.hko.gov.hk/images/HKOWxIconOutline/pic${hkoWeather.hkoIcon}.png`} width={100} height={100} alt="weather Icon"/>
            </div>
 
                
                <div className='flex-1 flex-wrap ml-0 md:ml-10'>            
                    <h5>Temperature: {hkoWeather.hkoTemperature} °C </h5>
                    <p>Place: {hkoWeather.hkoPlace} | Time: {hkoWeather.TemperatureTime}</p>
                    <h5>Hudimity: {hkoWeather.humidity} %</h5>
                    <p>Time: {hkoWeather.humidityTime} </p>
                    <h5>UV Index: {hkoWeather.uvIndex}</h5>
                    <p>Place: {hkoWeather.uvPlace} | <span className="capitalize">{hkoWeather.uvTimeDesc}</span> | <span className="uppercase">{hkoWeather.uvDesc}</span></p>
                    <h5 className="mt-6">Warning</h5>
                    <p>{hkoWeather.warningMessage}</p>
                    
                </div>
                <div className='flex-none w-25 pt-10 md:p-5 uppercase text-gray-400'>- HKO - </div>     
            </div>
        </div>

    )
}