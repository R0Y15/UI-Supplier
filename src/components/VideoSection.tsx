import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from 'lucide-react'

export default function BuyerSupplierSection() {
    return (
        <div className="container min-h-[500px] bg-[#002147] px-4 py-12 md:p-14 flex items-center justify-center my-20">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center justify-items-center">
                <div className="flex justify-center items-center w-full my-8 md:my-16">
                    <div className="w-full max-w-[640px] aspect-video bg-white rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=Wk6l2GC1qiS9x9t1&modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=1&playsinline=1&enablejsapi=1&origin=http://localhost:3000"
                            title="Post Your Requirements"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="text-white w-full flex justify-center px-4 md:px-0">
                    <div className="max-w-xl w-full">
                        <Tabs defaultValue="buyer" className="w-full">
                            <TabsList className="w-full grid grid-cols-2 bg-transparent">
                                <TabsTrigger
                                    value="buyer"
                                    className="data-[state=active]:text-p-orange data-[state=active]:border-b-2 data-[state=active]:border-p-orange text-lg md:text-2xl font-bold rounded-none"
                                >
                                    Buyer
                                </TabsTrigger>
                                <TabsTrigger
                                    value="supplier"
                                    className="data-[state=active]:text-[#ff6b4a] data-[state=active]:border-b-2 data-[state=active]:border-[#ff6b4a] text-lg md:text-2xl font-bold rounded-none"
                                >
                                    Supplier
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="buyer" className="mt-8">
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-6 h-6 mt-1 text-[#ff6b4a]" />
                                        <span className="text-lg">Post your requirements.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-6 h-6 mt-1 text-[#ff6b4a]" />
                                        <span className="text-lg">Sit back for multiple suppliers to contact you.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-6 h-6 mt-1 text-[#ff6b4a]" />
                                        <span className="text-lg">Choose among the suppliers based on the ratings and reviews.</span>
                                    </li>
                                </ul>
                            </TabsContent>
                            <TabsContent value="supplier" className="mt-8">
                                {/* Add supplier content here */}
                                <div className="text-lg">Supplier information coming soon...</div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

