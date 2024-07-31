/* eslint-disable no-irregular-whitespace */
"use client";

import { alexandria } from "@/app/fonts";
import { isNewsLetterFeatureReleased } from "@/constants/FeatureFlag.constants";
import Input from "../Inputs/Input";
import { NEWSLETTER_SUBSCRIBERS_CONSTANT } from "@/constants";
import Button from "./Button";

const Newsletter = () => {
  if (isNewsLetterFeatureReleased) {
    return (
      <>
        <section className="md:p-0" data-testid="newsletter-section">
          <article className="mt-[72px] flex flex-col items-center justify-center gap-3 rounded-10 bg-tertiary-bg px-4 pb-4 pt-6 text-center md:mt-25 md:gap-6">
            <h3
              className={`${alexandria.className} text-body2 font-semibold md:text-xl md:font-bold`}
            >
              Subscribe to my newsletter
            </h3>
            <p
              className={`${alexandria.className} text text-caption2 font-light leading-7 md:text-caption1`}
            >
              Receive exclusive monthly insights and updates on tech,
              productivity, programming, and more!
            </p>

            {/* remove the inputs when the subscription's result is successful */}
            <>
              <form className="flex w-full flex-col gap-4 px-4 sm:flex-row md:px-13">
                <div className="flex-[4]">
                  <Input
                    type="email"
                    placeholder="your email"
                    // onChange={handleEmailChange}
                    // disabled={isSubscripting}
                  />
                </div>
                <div className="flex-1">
                  {/* <Button disabled={isSubscripting}>Sign up</Button> */}
                  <Button>Sign up</Button>
                </div>
              </form>
            </>

            <span className="mt-3 text-caption2 font-light md:mb-7 md:mt-0">
              {`Join the +${NEWSLETTER_SUBSCRIBERS_CONSTANT} other readers.`}
            </span>
          </article>
        </section>
      </>
    );
  }

  if (!isNewsLetterFeatureReleased) return null;
};

export default Newsletter;
