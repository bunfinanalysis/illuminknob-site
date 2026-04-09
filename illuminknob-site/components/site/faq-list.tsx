import { siteIcons } from "@/lib/site-icons";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  const ChevronDown = siteIcons.chevronDown;

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group surface-panel overflow-hidden"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-white marker:content-none">
            <span>{item.question}</span>
            <ChevronDown className="h-5 w-5 shrink-0 text-slate-300 transition group-open:rotate-180" />
          </summary>
          <div className="border-t border-white/8 px-6 pb-6 pt-5 text-base leading-7 text-slate-300">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

