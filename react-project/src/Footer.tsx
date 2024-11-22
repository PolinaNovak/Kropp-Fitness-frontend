import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerMain">
        <div className="footerMainInner container">
          <header className="footerHeader">
            <a className="footerLogo" href="/">
              <img
                className="footerLogoImage"
                src="./images/logo.png"
                alt="KROPP Logo"
                width="270"
                height="50"
                loading="lazy"
              />
            </a>
            <p className="footerDescription sectionDescription">
              please feel free to send us an e-mail at{" "}
              <a href="mailto:kropp@qodeinteractive.com">
                kropp@qodeinteractive.com
              </a>
              For any additional inquiries
            </p>
          </header>
          <div className="footerBody">
            <div className="footerColumn">
              <h2 className="footerColumnTitle">About</h2>
              <p className="footerAbout">
                Shape up your site with Kropp, a theme especially made for
                fitness & gym websites.
              </p>
            </div>

            <div className="footerColumn">
              <h2 className="footerColumnTitle">Working hours</h2>
              <div className="footerSchedule">
                Monday - Friday
                <br />
                <time dateTime="05:30/24:00">05:30 - 24:00</time>
              </div>
              <div className="footerSchedule">
                Weekdays
                <br />
                <time dateTime="00:00/24:00">00:00 - 24:00</time>
              </div>
            </div>

            <div className="footerColumn">
              <h2 className="footerColumnTitle">Location</h2>
              <address className="footerAddress">
                68 Jay Street, Brooklyn,
                <br />
                NY 11201, United States
              </address>
              <div className="footerContancts">
                <ul className="footerContactsList">
                  <li className="footerContactsItem">
                    <a
                      className="footerContactsLink"
                      href="mailto:kropp@qodeinteractive.com"
                    >
                      kropp@qodeinteractive.com
                    </a>
                  </li>
                  <li className="footerContactsItem">
                    <a
                      className="footerContactsLink"
                      href="tel:+ (1) 718 - 407 - 6400"
                    >
                      + (1) 718 - 407 - 6400
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerColumn">
              <h2 className="footerColumnTitle hasArrow">Start now</h2>
              <form className="footerSubscribe">
                <label className="visually-hidden" htmlFor="subscribeEmail">
                  Email
                </label>

                <input
                  className="footerSubscribeInput input"
                  id="subscribeEmail"
                  placeholder="Email"
                ></input>
                <button
                  className="footerSubscribeButton"
                  type="submit"
                  title="Subscribe"
                >
                  <span className="visually-hidden">Subscribe</span>
                </button>
              </form>
              <div className="footerSoc1als">
                <ul className="footerSoc1alsList">
                  <li className="footerSoc1alsItem">
                    <a className="footerSoc1alsLink" href="/" target="_blank">
                      <svg
                        fill="#000000"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                      </svg>
                    </a>
                  </li>

                  <li className="footerSoc1alsItem">
                    <a className="footerSoc1alsLink" href="/" target="_blank">
                      <svg
                        viewBox="0 0 24 24"
                        fill="#000000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.67 8.14002C19.5811 7.7973 19.4028 7.48433 19.1533 7.23309C18.9038 6.98185 18.5921 6.80134 18.25 6.71001C16.176 6.4654 14.0883 6.35517 12 6.38001C9.91174 6.35517 7.82405 6.4654 5.75001 6.71001C5.40793 6.80134 5.09622 6.98185 4.84674 7.23309C4.59725 7.48433 4.41894 7.7973 4.33001 8.14002C4.10282 9.41396 3.99236 10.706 4.00001 12C3.99198 13.3007 4.10244 14.5994 4.33001 15.88C4.42355 16.2172 4.60391 16.5239 4.85309 16.7696C5.10226 17.0153 5.41153 17.1913 5.75001 17.28C7.82405 17.5246 9.91174 17.6349 12 17.61C14.0883 17.6349 16.176 17.5246 18.25 17.28C18.5885 17.1913 18.8978 17.0153 19.1469 16.7696C19.3961 16.5239 19.5765 16.2172 19.67 15.88C19.8976 14.5994 20.008 13.3007 20 12C20.0077 10.706 19.8972 9.41396 19.67 8.14002ZM10.36 14.39V9.63001L14.55 12L10.36 14.38V14.39Z"
                          fill="#000000"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="footerSoc1alsItem">
                    <a className="footerSoc1alsLink" href="/" target="_blank">
                      <svg
                        viewBox="0 0 24 24"
                        fill="#000000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                          fill="#0F0F0F"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    </a>
                  </li>

                  <li className="footerSoc1alsItem">
                    <a className="footerSoc1alsLink" href="/" target="_blank">
                      <svg
                        viewBox="-5 0 20 20"
                        version="1.1"
                        fill="#000000"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-385.000000, -7399.000000)"
                            fill="#000000"
                          >
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              <path
                                d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                                id="facebook-[#176]"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>

                  <li className="footerSoc1alsItem">
                    <a className="footerSoc1alsLink" href="/" target="_blank">
                      <svg
                        viewBox="0 -2 20 20"
                        version="1.1"
                        fill="#000000"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-60.000000, -7521.000000)"
                            fill="#000000"
                          >
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              <path
                                d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                                id="twitter-[#154]"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerExtra">
        <div className="footerExtraInner container">
          <div className="footerCopyright">
            © <time dateTime="2022">2022</time> Qode Interactive, All Rights
            Reserved | <a href="/">Privacy Policy</a> |{" "}
            <a href="/">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
