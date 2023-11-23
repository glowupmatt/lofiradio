import {albums} from "@/app/music"

const images = albums.map(album => album.image)

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex