import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f0b14] via-[#1a1224] to-[#0f0b14] px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
          The Journal App You Need
        </h1>

        <p className="mt-4 text-xl text-gray-300 md:text-2xl">
          Turn your thoughts into insight.
        </p>

        <p className="mt-6 text-base text-gray-400 md:text-lg">
          With advanced AI analysis that understands your thoughts, patterns,
          and emotions.
        </p>

        <div className="mt-10 flex justify-center">
          <Link href={"/sign-up"}>
            <button className="rounded-lg bg-purple-600 px-8 py-3 text-base font-medium text-white transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0f0b14]">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
