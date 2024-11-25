import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const Location = () => {
    const locations = [
        "Abu Dhabi",
        "Dubai",
        "Sharjah & Ajman",
        "Fujairah",
        "Ras Al Khaimah",
        "Umm Al Quwain",
    ]

    return (
        <section className="container py-16 px-4 md:px-0">
            <div className="w-full">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-8 text-center md:text-left">
                        <h2 className="text-3xl font-bold">
                            Ready to dive into <span className="text-purple-600">HABOT</span>?
                        </h2>
                        <p className="max-w-[620px] font-regular text-lg">
                            Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain
                            access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step
                            towards realizing your entrepreneurial dreams.
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 w-[317px] h-[54px] text-white font-bold text-lg group">
                            Sign up Today !
                            <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {locations.map((location) => (
                            <Card key={location} className="border-2 border-p-orange rounded-lg shadow-none hover:shadow-md transition-shadow duration-300">
                                <CardContent className="flex items-center justify-center p-6">
                                    <span className="text-center font-medium text-xl text-gray-800">{location}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location