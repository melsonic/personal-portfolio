import NeuclideDemo from '../assets/neuclide_homepage.webp'
import YTVideoDownloaderDemo from '../assets/yt_video_downloader.webp'
import GolangAuthServerDemo from '../assets/golang_auth_server.webp'
import PortfolioDemo from '../assets/portfolio_homepage.webp'

export type SoftwareType = {
  title: string;
  description: string;
  demoImage: string;
  livePreview: string;
  githubRepo: string;
}

export const softwares: Array<SoftwareType> = [
  {
    title: "Neuclide",
    description: "Responsive web application using NextJS with Tailwind CSS for the front-end and NodeJS with MongoDB as Database for the back-end.",
    demoImage: NeuclideDemo,
    livePreview: "#",
    githubRepo: "https://github.com/melsonic/Neuclide"
  },
  {
    title: "YT Video Downloader",
    description: "An cross-platform application using technologies like Flutter for the front-end and python with flask for the back-end. Video stream processing is used using pytube.",
    demoImage: YTVideoDownloaderDemo,
    livePreview: "#",
    githubRepo: "https://github.com/melsonic/Youtube-Video-Downloader"
  },
  {
    title: "Golang Auth Server",
    description: "Fully featured authentication server using golang. Gin-Gonic is used as the HTTP framework and Gorm as ORM library along with MySQL. Test cases are also included.",
    demoImage: GolangAuthServerDemo,
    livePreview: "#",
    githubRepo: "https://github.com/melsonic/golang-auth-server"
  },
  {
    title: "Portfolio Website",
    description: "My portfolio website to showcase my area of interests, expertise and handful experiences. This is built using NextJS along with TailwindCSS.",
    demoImage: PortfolioDemo,
    livePreview: "#",
    githubRepo: "https://github.com/melsonic/portfolio"
  }
]
