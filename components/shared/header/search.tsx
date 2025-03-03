import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";
const categories = [
    'men',
    'women',
    'kids',
    'accesories'
]
export default function Search() {
    return (
        <form action="/search" method="GET" className="flex h-10 items-stretch">
            <Select name="category">
                <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md">
                    <SelectValue placeholder='All' />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="all">All</SelectItem>
                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Input
                className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full"
                name="q"
                placeholder={`Search Site ${APP_NAME}`}
                type="search"
            />
            <button
                className="bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2"
                type="submit"
            >
                <SearchIcon className="w-6 h-6"/>
                    
            </button> 
        </form>
    )
}
