function Footer() {
  const Social_Icons =
    " text-white border-2 border-[#686B68] bg-[#686B68] rounded-[100%] w-[3.5rem] px-[0.9rem] py-[0.6rem] ";

  return (
    <>
      <footer className=" text-[#686B68] p-4 ">
        <div className=" flex justify-between ">
          {/* Footer Left Texts */}

          <div className=" flex gap-10 text-3xl ">
            <div className=" text-[1rem] ">
              <div className=" text-2xl pb-5 text-[#c7cec7] ">PopCornHub</div>
              <div className=" hover:cursor-pointer ">
                <div>ForYou</div>
                <div>Genre</div>
                <div>Movies</div>
                <div>TV Shows</div>
                <div>Top IMDB</div>
              </div>
            </div>
            <div className=" text-[1rem] ">
              <div className=" text-2xl pb-5 text-[#c7cec7] ">Support</div>
              <div className=" hover:cursor-pointer ">
                <div>Help Center</div>
                <div>Term Of Use</div>
                <div>Privacy Policy</div>
                <div>Content Complaints</div>
              </div>
            </div>
          </div>

          {/* Footer Right Texts */}

          <div className=" flex gap-14 text-2xl ">
            {/* Footer Socials */}

            <div className=" ">
              <div className=" text-[#c7cec7] font-bold pb-2 ">
                Connect With Us
              </div>
              <div className=" flex gap-2 items-center justify-center ">
                <div className={Social_Icons}>
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className={Social_Icons}>
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className={Social_Icons}>
                  <i className="fa-brands fa-x-twitter"></i>
                </div>
                <div className={Social_Icons}>
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </div>
            </div>
            <div className=" flex flex-col ">
              <div className=" text-[#c7cec7] font-extrabold ">
                Download the App
              </div>
              <div>
                <div className="flex py-3 ">

                  {/* Google Play Card */}
                
                  <a
                    href="https://play.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow p-2"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className=" w-[5.6rem] "
                    />
                  </a>

                  {/* App Store Card */}
                  
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow p-2"
                  >
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="App Store"
                      className=" w-[5.8rem] "
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center text-[#686B68] text-sm py-3 border-t-2 border-[#686B68] ">
          © 2024 PopCornHub. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
