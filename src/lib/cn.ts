export type ClassValue = string | number | false | null | undefined;

/** Join truthy class names. Minimal `clsx` for our controlled class inputs. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
