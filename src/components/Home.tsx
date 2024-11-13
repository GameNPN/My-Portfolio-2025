import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { Button } from './ui/button'
import { Github, Linkedin, Twitter } from 'lucide-react'

function Home() {
    return (
        <div className="flex flex-col h-screen items-center justify-center text-white">
            <div className='grid grid-rows- md:grid-rows-2 md:grid-rows-1 w-full'>
                <p className='md:row-start-2'>1</p>
                <p className='md:row-start-1'>2</p>
            </div>
            {/* <h1 className="text-5xl font-bold mb-4">Naphatnan Sillapa</h1>
            <p className="text-xl mb-8">Full Stack Developer</p>
            <div className="flex space-x-4 text-[#405D72]">
                <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                </Button>
            </div> */}
        </div>
    )
}

export default Home