import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white pt-20">
      <div className="bg-[#EFF5F5]">
        <div className="mx-auto px-4 grid max-w-screen-xl py-7 md:py-0 lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6 text-center lg:text-left">
            <h1 className="max-w-3xl mb-5 text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight">
              Belajar tanpa batas akses dengan Course Online kami.
            </h1>
            <p className="text-base max-w-2xl mb-7 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around
              the world use Flowbite to simplify their payment stack.
            </p>
            <Link href="#" className="w-full md:w-1/3 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primer focus:ring-4 hover:bg-indigo-700">
              Coba Course
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <Image width={500} height={400} src="/person.png" alt="mockup" />
          </div>
        </div>
      </div>
    </section>
  )
}
