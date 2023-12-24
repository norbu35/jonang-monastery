import { useEffect, useState } from "preact/hooks";
import type { Quote } from "../../payload-types";

function QuotePreact(
  { quotes, length }: { quotes: Quote[]; length: number },
) {
  const [quote, setQuote] = useState<Quote | null>(
    null,
  );

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * length)]);
  }, []);

  return (
    <figure class="mx-auto my-14 max-w-md px-6 font-quote md:max-w-3xl md:px-10 md:py-16 md:text-xl xl:max-w-4xl">
      <blockquote class="flex flex-col items-center justify-center gap-8 text-lg md:flex-row md:text-xl lg:gap-8 xl:gap-24">
        {quote?.originalQuoteHtml
          ? (
            <div
              lang={quote.originalQuoteLang!}
              class="font-tibetan text-lg md:text-xl"
              dangerouslySetInnerHTML={{
                __html: quote.originalQuoteHtml,
              }}
            />
          )
          : null}
        {quote && (
          <div dangerouslySetInnerHTML={{ __html: quote?.quoteHtml! }} />
        )}
      </blockquote>
      <figcaption class="mr-4 mt-12 text-right text-lg md:mt-20 md:text-xl">
        <cite>{quote?.source}</cite>
      </figcaption>
    </figure>
  );
}

export default QuotePreact;
