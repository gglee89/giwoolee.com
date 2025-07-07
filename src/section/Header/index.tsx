import moment from 'moment'

// Assets
import icons from '@/shared/icons'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { ModeToggle } from '@/components/mode-toggle'

const Header = () => {
    const currentTime = moment().format('ddd LT')

    return (
        <nav className="bg-neutral-400 sticky-false text-sm">
            <div className="container mx-auto flex h-8 justify-between gap-3 items-center">
                <div className="flex items-center gap-1 hover:bg-neutral-500 rounded-md hover:border-white px-2 transition-all duration-300">
                    <HomeOutlinedIcon className="max-h-4 h-full" />
                    <div className="font-bold text-black text-sm no-underline hover:no-underline cursor-pointer">
                        Giwoo Lee
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <div className="flex flex-row items-center gap-2">
                        <a
                            href="https://github.com/gglee89/gglee89.github.io"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="flex flex-row gap-1 items-center no-underline hover:no-underline rounded-md hover:bg-neutral-500 px-2 cursor-pointer transition-all duration-300"
                        >
                            <img
                                className="max-h-4 h-full"
                                src={icons['github']}
                                alt="github"
                            />
                            <div className="font-bold text-black text-sm cursor-pointer">
                                GitHub
                            </div>
                        </a>
                        <div className="text-sm text-gray-500">
                            {currentTime}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
