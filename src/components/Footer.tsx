import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="w-full bg-[#0B1E36] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 border-y border-gray-600 py-8">
                    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-52 w-full md:items-center">
                        <div className="space-y-4">
                            <Link href="/" className="text-2xl font-bold">
                                <Image
                                    src="/habot-light.png"
                                    alt="logo"
                                    width={160}
                                    height={40}
                                />
                            </Link>
                            <p className="text-sm text-gray-400">© R Singhania</p>
                        </div>
    
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto">
                            {/* Company Links */}
                            <div className="space-y-4">
                                <h3 className="font-semibold">Company</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
    
                            {/* Terms Links */}
                            <div className="space-y-4">
                                <h3 className="font-semibold">Terms</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/data-privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                                            Data privacy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                                            Terms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/accessibility" className="text-sm text-gray-400 hover:text-white transition-colors">
                                            Accessibility
                                        </Link>
                                    </li>
                                </ul>
                            </div>
    
                            {/* Related Links */}
                            <div className="space-y-4">
                                <h3 className="font-semibold">Related</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/find-buyer" className="text-sm text-gray-400 hover:text-white transition-colors">
                                            Find Buyer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/feedback" className="text-sm text-gray-400 hover:text-white transition-colors">
                                            Feedback
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 w-full md:w-auto justify-center md:justify-start">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors rounded-full p-2 border border-gray-400">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors rounded-full p-2 border border-gray-400">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors rounded-full p-2 border border-gray-400">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors rounded-full p-2 border border-gray-400">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

