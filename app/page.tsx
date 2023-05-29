import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faQrcode, faMugHot, faClock, faMoneyBill } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 text-primary flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Contact us with +61 451 561 068
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* By{' '} */}
            <Image
              src="/WhatsMenu-icon.svg"
              alt="WhatsMenu Icon"
              className="dark:invert"
              width={50}
              height={50}
              priority
            />
            <p className='pt-2 text-primary'>WhatsMenu</p>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/WhatsMenu.svg"
          alt="WhatsMenu Logo"
          width={180}
          height={37}
          priority
        /> */}
        <div className='flex flex-col items-center'>
          <h4 className='text-primary opactiy-10 pb-4'>Lower your costs</h4>
          <div className='text-2xl opacity-50 flex items-center'>
            <span className="mr-2">What</span>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/WhatsMenu.svg"
              alt="WhatsMenu Logo"
              width={100}
              height={100}
              priority
            />
            <span className="ml-2">Offer</span>
          </div>
        </div>
      </div>
      {/* description divs */}
      <div className='mb-32 grid gap-4 lg:mb-0 lg:grid-cols-2 lg:gap-8'>
        {/* change menu any time */}
        <div
            className="inline-flex group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"    
        >
          <div className="w-1/5 flex items-center justify-center hidden md:flex group">
            <FontAwesomeIcon
              icon={faClock}
              className="w-1/3 primary-icon transition-transform group-hover:scale-110"
            />
          </div>
          <div className='flex flex-col ml-6 w-full md:w-auto md:ml-3'>
            <h4 className='mb-3'>
              Change your menu at any time{' '}
            </h4>
            <p className={`m-0 max-w-[45ch] text-sm opacity-50`} >
              Make changes to your menu at any time, let your customers know when a menu item is unavailable or the price has changed.
            </p>
          </div>
        </div>
        {/* Roles and data */}
        <div
            className="inline-flex group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"    
        >
          <div className="w-1/5 flex items-center justify-center hidden md:flex group">
            <FontAwesomeIcon
              icon={faUser}
              className="w-1/3 primary-icon transition-transform group-hover:scale-110"
            />
          </div>
          <div className='flex flex-col ml-6 w-full md:w-auto md:ml-3'>
            <h4 className='mb-3'>
              Roles and Data{' '}
            </h4>
            <p className={`m-0 max-w-[45ch] text-sm opacity-50`} >
              Log in with different roles, get access to your business data with clear statistics tables.
            </p>
          </div>
        </div>
        {/* Online payment */}
        <div
            className="inline-flex group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"    
        >
          <div className="w-1/5 flex items-center justify-center hidden md:flex group">
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="w-1/3 primary-icon transition-transform group-hover:scale-110"
            />
          </div>
          <div className='flex flex-col ml-6 w-full md:w-auto md:ml-3'>
            {/* <h4 className={`mb-3 text-xl font-semibold`}> */}
            <h4 className='mb-3'>
              Online Payment{' '}
            </h4>
            <p className={`m-0 max-w-[45ch] text-sm opacity-50`} >
              Facilate payment, your custmoers can pay the bills online or offline, which is flexible.
            </p>
          </div>
        </div>
        {/* Customize your APP/Web */}
        <div
            className="inline-flex group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"    
        >
          <div className="w-1/5 flex items-center justify-center hidden md:flex group">
            <FontAwesomeIcon
              icon={faMugHot}
              className="w-1/3 primary-icon transition-transform group-hover:scale-110"
            />
          </div>
          <div className='flex flex-col ml-6 w-full md:w-auto md:ml-3'>
            <h4 className='mb-3'>
              Build your own App/Web{' '}
            </h4>
            <p className={`m-0 max-w-[45ch] text-sm opacity-50`} >
              Customize your own APP/Website at the cheapest price, We are a highly-experienced team with Designers, Engineers and Analysts.
            </p>
          </div>
        </div>
        {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
          </h2>
          <p className={`m-0 max-w-[40ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
  )
}
