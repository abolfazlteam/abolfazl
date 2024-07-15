import { Rammetto_One, Alexandria } from "next/font/google";

const rammettoOne = Rammetto_One({
  subsets: ["latin"],
  weight: ["400"],
  preload: false,
});

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: false,
});

export { rammettoOne, alexandria };
