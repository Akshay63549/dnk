import HoverCard from "./HoverCard"


const FeatureItem = ({ text }) => {
return (
    <div className="text-gray-700 dark:text-gray-300 flex gap-x-3">
        <span className="w-7 h-7 max-h-7 min-w-[1.75rem] bg-emerald-100 dark:bg-gray-900 dark:text-gray-300 text-emerald-600 rounded-md flex items-center justify-center">
            ✓
        </span>
        {text}
    </div>
)
}
const CategoryCard = ({ icon, title, description }) => {
return (
    <div className="space-y-2 sm:p-4 sm:rounded-md sm:bg-emerald-200/10 sm:dark:bg-gray-800/10">
       <HoverCard icon={icon}/>
        <h2 className="font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">
            {description}.
        </p>
    </div>
)
}
 
const features = [
{
    id: 1,
    text: "Feature 1"
},
{
    id: 2,
    text: "Feature 2"
},
{
    id: 3,
    text: "Feature 3"
},
{
    id: 4,
    text: "Feature 4"
},
]
 
const categories = [
{
    id: 1,
    icon:  "https://tailwind.unify-ui.dev/prev/images/icons/green-grapes-icon.svg",
    title: "Product Category",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},
{
    id: 2,
    icon:"https://tailwind.unify-ui.dev/prev/images/icons/tomato-icon.svg",
    title: "Product Category",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},
{
    id: 3,
    icon: "https://tailwind.unify-ui.dev/prev/images/icons/spinach-icon.svg",
    title: "Product Category",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},
{
    id: 4,
    icon: "https://tailwind.unify-ui.dev/prev/images/icons/tomato-icon.svg",
    title: "Product Category",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},
{
    id: 5,
    icon: "https://tailwind.unify-ui.dev/prev/images/icons/green-grapes-icon.svg",
    title: "Product Category",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
},
]
 
export default function Hero() {
return (
    <>
        <section className="py-8 mt-20">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex  flex-col lg:flex-row lg:items-stretch gap-x-6">
                <div className="lg:w-[47%] py-4 lg:py-8 xl:py-12 space-y-7">
                    <h1 className="text-gray-900 dark:text-white font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
                        Let your <span className="text-emerald-600">groceries</span> come to you
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Get fresh groceries online without stepping out to make delicious food with the freshest ingredients
                    </p>
                    <div className="max-w-md w-full">
                        <form action="#" className="flex w-full text-gray-700 dark:text-gray-400">
                            <input type="text" placeholder="meal, Vegetables......" className="px-5 py-2.5 border border-emerald-200 dark:border-gray-800 border-r-0 rounded-l-md flex w-full outline-none bg-emerald-50 dark:bg-gray-900" />
                            <button aria-label="search btn" className="outline-none text-white bg-emerald-600 px-3 py-2.5 rounded-r-md min-w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4">
                        {
                            features.map(feature=>(
                                <FeatureItem key={feature.id} {...feature}/>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-1 relative lg:h-auto">
                    <div className="relative h-max lg:absolute left-0 top-0 flex lg:h-full  lg:w-auto w-11/12">
                        <span className="absolute top-0 left-32 w-3/5 aspect-square rounded-md -rotate-[30deg] translate-y-20 origin-center border border-emerald-200 dark:border-gray-800" />
                        <span className="absolute top-1/2 right-16 w-2/5 aspect-square rounded-md rotate-12 -translate-y-1/2 origin-center border border-emerald-200 dark:border-gray-800" />
                        <img src="https://tailwind.unify-ui.dev/prev/images/woman-with-gro.webp" width={1001} height={1001} alt="woman with grocery" className=" lg:w-auto lg:h-full relative" />
                    </div>
                </div>
            </div>
            <div className="mx-auto lg:max-w-7xl bg-emerald-100 dark:bg-gray-900 rounded-md w-full p-5 sm:p-10 md:p-12 lg:p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 relative">
                {
                    categories.map(category=>(
                        <CategoryCard key={category.id} {...category}/>
                    ))
                }
                <div className="space-y-2 p-4 rounded-md bg-emerald-200/10 dark:bg-gray-800/10 border flex flex-col items-center justify-center border-emerald-100 dark:border-gray-800 lg:hidden">
                    <button className="rounded-full border border-dashed border-emerald-300 dark:border-gray-800 text-emerald-600 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </button>
                    <span className="text-gray-800 dark:text-gray-200">Know more</span>
                </div>
            </div>
        </section>
    </>
)
}