import { UserPlus, FileCheck, Search, FileEdit, FileSignature, HandshakeIcon } from 'lucide-react'
import Image from 'next/image'

export default function HowItWorks() {
    return (
        <section className="px-4 py-20 my-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    How it works?
                </h2>
                <p className="text-center text-muted-foreground my-12 max-w-3xl mx-auto">
                    Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center justify-center bg-sky-50 p-6 rounded-lg text-center h-[254px]">
                        <div className="mb-4 flex justify-center">
                            <Image
                                src={'/assets/user-add.svg'}
                                width={55}
                                height={55}
                                alt="user-add"
                            />
                        </div>
                        <h3 className="font-semibold mb-2 text-xl">
                            Select Your Role and Sign Up
                        </h3>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg text-center h-[254px]">
                        <div className="mb-4 flex justify-center">
                            <Image
                                src={'/assets/doc-check.svg'}
                                width={55}
                                height={55}
                                alt="doc-check"
                            />
                        </div>
                        <h3 className="font-semibold mb-2">
                            Buyers Post Your Requirements
                        </h3>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center justify-center bg-sky-50 p-6 rounded-lg text-center h-[254px]">
                        <div className="mb-4 flex justify-center">
                            <Image
                                src={'/assets/doc-search.svg'}
                                width={55}
                                height={55}
                                alt="user-add"
                            />
                        </div>
                        <h3 className="font-semibold mb-2">
                            Review, Select, and Contact the Best Suppliers
                        </h3>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg text-center h-[254px]">
                        <div className="mb-4 flex justify-center">
                            <Image
                                src={'/assets/contact-edit.svg'}
                                width={55}
                                height={55}
                                alt="user-add"
                            />
                        </div>
                        <h3 className="font-semibold mb-2">
                            Suppliers Complete your Profile and get notified for opportunities
                        </h3>
                    </div>

                    {/* Step 5 */}
                    <div className="flex flex-col items-center justify-center bg-sky-50 p-6 rounded-lg text-center h-[254px]">
                        <div className="mb-4 flex justify-center">
                            <Image
                                src={'/assets/doc-edit.svg'}
                                width={55}
                                height={55}
                                alt="user-add"
                            />
                        </div>
                        <h3 className="font-semibold mb-2">
                            Contact to Buyers and Share your Quote for the service
                        </h3>
                    </div>

                    {/* Step 6 */}
                    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg text-center h-[254px]">
                        <div className="mb-4 flex justify-center">
                            <Image
                                src={'/assets/handshake.svg'}
                                width={65}
                                height={65}
                                alt="user-add"
                            />
                        </div>
                        <h3 className="font-semibold mb-2">
                            Both the Parties can Connect and Make Business Leave a Feedback
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
