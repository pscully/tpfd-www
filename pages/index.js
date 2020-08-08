const YouTubeVideo = (props) => {

  return (
    <div className="video-container">
      <smartvideo
        src="/sleepout-charlotte.mp4"
        width="1280"
        height="720"
        class="swarm-fluid"
        poster="/thumb.jpg"
        controls
        playsinline
      ></smartvideo>
    </div>
  );
};

const thingsToDonate = [
  "feminine hygiene products",
  "men and women’s underwear ",
  "men’s undershirts",
  "mens and women's t-shirts",
  "bras",
  "work boots and tennis shoes of all sizes",
  "pop-top canned food items",
  "bottled water",
  "tents",
  "tarps",
  "sleeping bags",
  "washcloths and towels",
  "bug spray",
  "rain coats/parkas",
  "umbrellas",
  "flashlights and batteries",
];

const form = '<div data-paperform-id="0v26yvrl"></div>';

const facebookLink = "https://www.facebook.com/PhillsFoundation13";

const instagramLink = "https://instagram.com/phillsfoundation";

const Index = () => {

  return (
    <>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
          <div className="relative h-full max-w-screen-xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>
        <div className="relative pt-6 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="max-w-screen-xl mx-auto md:mt-4 px-4 sm:px-6 md:hidden">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex justify-center">
                  <a href="/" aria-label="Home">
                    <img
                      className="w-auto h-64"
                      src="/sleepout-logo-nav.png"
                      alt="Sleep Out CLT Logo"
                    />
                  </a>
                </div>
              </div>

              <div className="hidden absolute md:flex items-center justify-end inset-y-0 right-0">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="#donate"
                    // data-paperform-id="0v26yvrl"
                    // data-popup-button="1"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-brand-blue bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
                  >
                    Donate
                  </a>
                </span>
              </div>
            </nav>
          </div>
          <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-10">
            <div className="text-right">
              <div className="md:flex hidden">
                <div className="w-1/2">
                  <img
                    className="w-auto"
                    src="/sleepout-logo-banner.png"
                    alt="Sleep Out CLT Logo"
                  />
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-4xl tracking-tight leading-10 font-black text-brand-yellow sm:text-5xl sm:leading-none md:text-6xl">
                    The first annual<br></br>
                    <span className="text-brand-blue font-extrabold">
                      {" "}
                      Sleep Out CLT <br></br>
                    </span>{" "}
                    hosted by the <br></br>
                    <span className="text-brand-blue font-extrabold">
                      {" "}
                      Phills Foundation <br></br>
                    </span>{" "}
                    <span className="text-brand-yellow font-extrabold">
                      {" "}
                      and benefiting Block Love Charlotte.
                    </span>
                  </h1>
                </div>
              </div>
              <div className="md:hidden mb-4">
                <h1 className="text-4xl tracking-tight leading-10 font-black text-brand-yellow sm:text-5xl sm:leading-none md:text-6xl">
                  The first annual<br></br>
                  <span className="text-brand-blue font-extrabold">
                    {" "}
                    Sleep Out CLT <br></br>
                  </span>{" "}
                  hosted by the <br></br>
                  <span className="text-brand-blue font-extrabold">
                    {" "}
                    Phills Foundation <br></br>
                  </span>{" "}
                  <span className="text-brand-yellow font-extrabold">
                    {" "}
                    and benefiting <br></br>
                    Block Love Charlotte.
                  </span>
                </h1>
              </div>
              <p className="max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                The Phills family and friends will sleep out in solidarity for
                one night with Charlotte’s homeless community to bring awareness
                to the growing need for innovative sheltering and low income
                housing solutions in our growing city.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#donate"
                    // data-paperform-id="0v26yvrl"
                    // data-popup-button="1"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brand-blue hover:bg-brand-accent focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Donate Now
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#cause"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-brand-blue bg-white hover:text-brand-accent focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Event Details
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="py-16 bg-gray-50 overflow-hidden" id="cause">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap mb-16">
          <div className="w-full md:w-2/3">
            <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Our Event in 2020
            </p>
            <h2 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              August 15th, 2020 6pm-6am
            </h2>
            <p className="text-lg text-gray-500 leading-7">
              Our tents will be set up at the corner of Phifer Avenue and N.
              Tryon Street.
            </p>
            <p className="text-lg text-gray-500 leading-7">
              Stop by to hang out and drop off your donation items.
            </p>
            <p className="text-lg text-gray-500 leading-7">
              Block Love Charlotte will collect and distribute items on-site.
            </p>
            {/* <img src="/volunteer.png" /> */}

            <div className="mb-2 md:pr-24">
              {/* <YouTube
                  videoId="CibnM2h0KSU"
                  opts={videoOpts}
                  onReady={_onReady}
                /> */}
              <YouTubeVideo
                video="CibnM2h0KSU"
                autoplay="0"
                rel="0"
                modest="1"
              />
            </div>
            <p className="text-lg text-gray-500 leading-7">
              Show your support by{" "}
              <a
                className="text-brand-blue underline font-bold"
                href="#donate"
                // data-paperform-id="0v26yvrl"
                // data-popup-button="1"
              >
                making a monetary donation
              </a>
              .
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <div className="relative text-lg leading-7 font-medium">
                  <h3 className="uppercase font-bold text-brand-blue tracking-wide mb-2">
                    Things to Donate
                  </h3>
                  <ul className="relative">
                    {thingsToDonate.map((thing, i) => {
                      return (
                        <li key={i} className="text-brand-accent">
                          {thing}
                        </li>
                      );
                    })}
                    <li className="text-brand-blue">
                      *all items should be unused
                    </li>
                  </ul>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
        <div className="my-12 mx-auto" id="donate">
          <h2 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Make a Donation
          </h2>
          <div dangerouslySetInnerHTML={{ __html: form }}></div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center md:order-2">
            <a
              href={facebookLink}
              className="text-gray-400 hover:text-gray-500"
              rel="noopener noreferrer nofollow"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href={instagramLink}
              className="ml-6 text-gray-400 hover:text-gray-500"
              rel="noopener noreferrer nofollow"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base leading-6 text-gray-400">
              © 2020 Phills Foundation, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
