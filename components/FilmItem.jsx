import Image from 'next/image'

const FilmItem = () => {
    return (
        <div className="flex cursor-pointer border border-gray-300 rounded-lg overflow-hidden space-x-4 p-2 hover:border-gray-600 transition-all duration-200 ease-in-out bg-white">
            <span>
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <Image className="w=[80px] h-[80px] rounded-md" src="https://i.scdn.co/image/ab67616d00001e0291e0cd594d38ff4b97a92dd3" alt="" />
            </span>
            <div>
                <h1 className="text-2xl leading-10 font-semibold">Ease on me</h1>
                <p className="mt-1 text-lg leading-5 text-gray-600">Adele</p>
            </div>
        </div>
    )
}

export default FilmItem
