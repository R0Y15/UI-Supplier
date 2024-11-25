import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { BriefcaseBusiness, MapPin, Search } from 'lucide-react'
import Image from "next/image"

export default function Hero() {
    return (
        <div className="relative min-h-[500px] w-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full">
                <Image
                    src="/hero-bg.png"
                    alt="Hero background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 md:py-0 flex flex-col justify-center items-center min-h-[500px] text-center">
                <h1 className="mb-4 text-4xl text-white md:text-6xl font-bold">
                    Are You a Supplier?
                </h1>
                <p className="mb-8 text-2xl text-white md:text-6xl font-regular">
                    Explore Matching Opportunities.
                </p>

                {/* Search Form */}
                <div className="w-full flex flex-col gap-4 md:flex-row md:max-w-[1000px] justify-center items-center mx-auto">
                    <div className="flex justify-center items-center relative w-full md:w-[400px] bg-white rounded-lg">
                        <BriefcaseBusiness className="absolute left-3 h-5 w-5 text-p-orange" />
                        <Input
                            type="text"
                            placeholder="Search your required service here"
                            className="flex w-full items-center justify-center h-12 pl-10 rounded-lg bg-white border-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:font-regular placeholder:text-sm md:placeholder:text-md placeholder:text-slate-500"
                        />
                    </div>

                    <div className="flex justify-center items-center relative w-full md:w-[400px] bg-white rounded-lg">
                        <MapPin className="absolute left-3 h-5 w-5 text-p-orange" />
                        <Input
                            type="text"
                            placeholder="Search your desired location here"
                            className="flex w-full h-12 pl-10 rounded-lg bg-white border-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:font-regular placeholder:text-sm md:placeholder:text-md placeholder:text-slate-500"
                        />
                    </div>
                    <Button className="w-full md:w-auto h-12 bg-p-green px-8 hover:bg-p-green-light rounded-lg text-white justify-center items-center flex">
                        Search
                    </Button>
                </div>

                {/* Buyer Link */}
                <div className="flex flex-col md:flex-row gap-2 mt-6 text-white text-sm md:text-base">
                    <p className="font-bold">Are you a buyer?</p>
                    <Link
                        href="/post-requirements"
                        className="underline hover:text-gray-200"
                    >
                        Click here if you are looking to post a requirements
                    </Link>
                </div>
            </div>
        </div>
    )
}

