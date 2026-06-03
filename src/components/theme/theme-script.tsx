import { NO_FLASH_THEME_SCRIPT } from "@/lib/theme";

/**
 * Renders the render-blocking no-flash theme script. Placed as the first child
 * of <body> so `data-theme` is set before any content paints.
 */
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }} />;
}
