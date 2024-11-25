"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white px-4">
            <div className="container flex h-16 items-center justify-center mx-auto">
                <div className="flex items-center justify-between w-full">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/habot-dark.png"
                            alt="Habot Logo"
                            width={120}
                            height={100}
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-4 gap-4">
                        <Link href="/find-suppliers" className="text-slate-500 font-regular">
                            Find Suppliers
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none text-slate-500 font-regular">
                                Find Service
                                <ChevronDown className="w-4 h-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white">
                                <DropdownMenuLabel>Find Service</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Service 1</DropdownMenuItem>
                                <DropdownMenuItem>Service 2</DropdownMenuItem>
                                <DropdownMenuItem>Service 3</DropdownMenuItem>
                                <DropdownMenuItem>Service 4</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button
                            variant="outline"
                            asChild
                            className="border border-p-green text-p-green font-bold hover:bg-p-green hover:text-white cursor-pointer"
                            onClick={() => router.push('/')}
                        >
                            <p>Login / Sign Up</p>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-16 bg-white border-b shadow-lg">
                    <div className="flex flex-col space-y-4 p-4">
                        <Link 
                            href="/find-suppliers" 
                            className="text-slate-500 font-regular"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Find Suppliers
                        </Link>
                        <div className="flex flex-col space-y-2">
                            <span className="text-slate-500 font-regular">Find Service</span>
                            <div className="flex flex-col space-y-2 pl-4">
                                <Link href="#" className="text-slate-500" onClick={() => setIsMenuOpen(false)}>Service 1</Link>
                                <Link href="#" className="text-slate-500" onClick={() => setIsMenuOpen(false)}>Service 2</Link>
                                <Link href="#" className="text-slate-500" onClick={() => setIsMenuOpen(false)}>Service 3</Link>
                                <Link href="#" className="text-slate-500" onClick={() => setIsMenuOpen(false)}>Service 4</Link>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            className="border border-p-green text-p-green font-bold hover:bg-p-green hover:text-white cursor-pointer w-full"
                            onClick={() => {
                                router.push('/');
                                setIsMenuOpen(false);
                            }}
                        >
                            Login / Sign Up
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar