const JsonLd = ({ data }: { data: unknown }) => {
  return (
    <script
      type="application/ld+json"
      defer
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;
