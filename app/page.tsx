import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQrcode, faMugHot, faClock, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4 lg:p-24 lg:flex-row lg:items-start lg:flex-wrap lg:flex-grow">
      {/* 模块1 */}
      <div className="w-full max-w-5xl lg:w-full flex justify-between mb-8">
        <p className="hidden lg:flex text-primary justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:w-1/3 lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Contact us with +61 451 561 068
        </p>

        <div className="w-full max-w-5xl lg:w-1/3 lg:ml-auto">
          <div className="flex justify-end items-center" style={{ height:'100%' }}>
            <a
              href="https://admin.emenu.au"
              className="text-primary"
              style={{ color: "#8455f6", height:'100%', lineHeight:'100%',display: 'flex', alignItems: 'center' }}
            >
              Admin Entry
            </a>
          </div>
        </div>
      </div>

      {/* 模块2 */}
      <div className="w-full max-w-5xl lg:w-1/3 lg:ml-8 mb-20 lg:mb-20 lg:justify-center" >
        <div className="text-center flex justify-center">
          <div className='text-2xl opacity-50 flex items-center'>
            <span className="mr-2">What</span>
            <Image
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


      {/* 模块3 */}
      <div className="w-full max-w-5xl lg:w-full mb-8">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {/* change menu any time */}
          <div className="rounded-lg border border-transparent px-5 py-4 bg-gray-100 dark:bg-neutral-800/30">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faClock}
                className="w-1/3 primary-icon transition-transform group-hover:scale-110"
              />
            </div>
            <div className='flex flex-col mt-3'>
              <h4 className='mb-3'>Change your menu at any time</h4>
              <p className={`m-0 text-sm opacity-50`}>
                Make changes to your menu at any time, let your customers know when a menu item is unavailable or the price has changed.
              </p>
            </div>
          </div>
          {/* Roles and data */}
          <div className="rounded-lg border border-transparent px-5 py-4 bg-gray-100 dark:bg-neutral-800/30">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faUser}
                className="w-1/3 primary-icon transition-transform group-hover:scale-110"
              />
            </div>
            <div className='flex flex-col mt-3'>
              <h4 className='mb-3'>Roles and Data</h4>
              <p className={`m-0 text-sm opacity-50`}>
                Log in with different roles, get access to your business data with clear statistics tables.
              </p>
            </div>
          </div>
          {/* Online payment */}
          <div className="rounded-lg border border-transparent px-5 py-4 bg-gray-100 dark:bg-neutral-800/30">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faMoneyBill}
                className="w-1/3 primary-icon transition-transform group-hover:scale-110"
              />
            </div>
            <div className='flex flex-col mt-3'>
              <h4 className='mb-3'>Online Payment</h4>
              <p className={`m-0 text-sm opacity-50`}>
                Facilitate payment, your customers can pay the bills online or offline, which is flexible.
              </p>
            </div>
          </div>
          {/* Customize your APP/Web */}
          <div className="rounded-lg border border-transparent px-5 py-4 bg-gray-100 dark:bg-neutral-800/30">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faMugHot}
                className="w-1/3 primary-icon transition-transform group-hover:scale-110"
              />
            </div>
            <div className='flex flex-col mt-3'>
              <h4 className='mb-3'>Build your own App/Web</h4>
              <p className={`m-0 text-sm opacity-50`}>
                Customize your own APP/Website at the cheapest price, We are a highly-experienced team with Designers, Engineers, and Analysts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 模块4 */}
      <div className="w-full max-w-5xl lg:w-full">
        <div className="flex justify-center">
          <a
            className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-md"
            href="/whatsMenu.apk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/WhatsMenu-icon.svg"
              alt="WhatsMenu Icon"
              width={50}
              height={50}
              priority
            />
            <p className='text-primary'>Download</p>
          </a>
        </div>
      </div>
    </main>
  )
}
