function readFeatureFlag(name: string, defaultEnabled = true): boolean {
  const value = process.env[name]?.trim().toLowerCase();

  if (!value) return defaultEnabled;

  return ["1", "true", "yes", "on", "enabled"].includes(value);
}

export const FEATURES = {
  comments: readFeatureFlag("FEATURE_COMMENTS_ENABLED"),
  newsletter: readFeatureFlag("FEATURE_NEWSLETTER_ENABLED"),
};
