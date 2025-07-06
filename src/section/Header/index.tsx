import moment from 'moment'

// Assets
import icons from 'shared/icons'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

const Header = () => {
    const currentTime = moment().format('ddd LT')

    return (
        <nav className="bg-neutral-300 sticky-false">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <HomeOutlinedIcon />
                    <div className="font-bold text-sm text-decoration-none">
                        Giwoo Lee
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <a
                        href="https://github.com/gglee89/gglee89.github.io"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex flex-row items-center border-r border-black cursor-pointer"
                    >
                        <img
                            className="h-4"
                            src={icons['github']}
                            alt="github"
                        />
                        <div className="font-bold text-black text-sm text-decoration-none">
                            GitHub
                        </div>
                    </a>
                    <div className="text-gray-500">{currentTime}</div>
                </div>
            </div>
        </nav>
    )
}

export default Header
