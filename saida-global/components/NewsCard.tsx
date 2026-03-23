type NewsCardProps = {
  title: string;
  date: string;
  excerpt: string;
};

export default function NewsCard({ title, date, excerpt }: NewsCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="h-40 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500 text-sm">Image</p>
      </div>

      <div className="p-6">
        <p className="text-xs text-gray-500">{date}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-3 text-gray-600 text-sm">{excerpt}</p>

        <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
          Read more <span>→</span>
        </button>
      </div>
    </article>
  );
}