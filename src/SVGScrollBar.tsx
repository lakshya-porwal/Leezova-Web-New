
import { CSSIcon, ExpressJSIcon, FigmaIcon, GitHubIcon, GitIcon, HTMLIcon, NextJsIcon, ReactIcon, ReactQueryIcon, ReduxIcon } from './heroIcons/icons';

const SVGScrollBar = () => {
  return (
    <div className='relative flex w-full overflow-hidden '>
      <div
        className='absolute inset-0 pointer-events-none z-10'
        style={{
          background: 'linear-gradient(180deg,rgba(0, 0, 0, 0.85) 0%,rgba(0, 0, 0, 0.6) 8%,rgba(0, 0, 0, 0.35) 18%,rgba(0, 0, 0, 0.15) 30%,rgba(0, 0, 0, 0) 45%,rgba(0, 0, 0, 0) 100%)'
        }}
      ></div>

      <div className=' flex gap-3 flex-row h-44  w-max animate-marquee  justify-center items-center'>
        <div> <ReactIcon className='h-28 p-2' /></div>
        <div><ReactQueryIcon className='h-28 p-2' /></div>
        <div><NextJsIcon className='h-28 p-2' /></div>
        <div><ReduxIcon className='h-28 p-2' /></div>
        <div><CSSIcon className='h-28 p-2' /></div>
        <div><ExpressJSIcon className='h-28 p-2 mix-blend-hard-light' /></div>
        <div><FigmaIcon className='h-28 p-2' /></div>
        <div><GitIcon className='h-28 p-2' /></div>
        <div><GitHubIcon className='h-28 p-2' /></div>
        <div><HTMLIcon className='h-28 p-2' /></div>

        <div> <ReactIcon className='h-28 p-2' /></div>
        <div><ReactQueryIcon className='h-28 p-2' /></div>
        <div><NextJsIcon className='h-28 p-2' /></div>
        <div><ReduxIcon className='h-28 p-2' /></div>
        <div><CSSIcon className='h-28 p-2' /></div>
        <div><ExpressJSIcon className='h-28 p-2 mix-blend-hard-light' /></div>
        <div><FigmaIcon className='h-28 p-2' /></div>
        <div><GitIcon className='h-28 p-2' /></div>
        <div><GitHubIcon className='h-28 p-2' /></div>
        <div><HTMLIcon className='h-28 p-2' /></div>
      </div >
      <div
        className='absolute inset-0 pointer-events-none z-10'
        style={{
          background: 'linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0) 55%,rgba(0, 0, 0, 0.15) 70%,rgba(0, 0, 0, 0.35) 82%,rgba(0, 0, 0, 0.6) 92%,rgba(0, 0, 0, 0.85) 100%)'
        }}
      ></div>
    </div>
  )
}

export default SVGScrollBar
