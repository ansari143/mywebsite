import React from 'react';

interface TrustComponentProps {
  author?: string;
  reviewedBy?: string;
  lastUpdated?: string;
  disclaimer?: string;
}

export default function TrustComponent({
  author,
  reviewedBy,
  lastUpdated,
  disclaimer = "This content is for educational purposes only and should not be considered professional advice. Always consult with qualified experts for personal guidance."
}: TrustComponentProps) {
  return (
    <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Trust & Transparency</h2>
      <div className="space-y-3 text-sm leading-7 text-slate-700">
        {author && (
          <p>
            <span className="font-semibold">Author:</span> {author}
          </p>
        )}
        {reviewedBy && (
          <p>
            <span className="font-semibold">Reviewed by:</span> {reviewedBy}
          </p>
        )}
        {lastUpdated && (
          <p>
            <span className="font-semibold">Last updated:</span> {lastUpdated}
          </p>
        )}
        {disclaimer && (
          <div className="mt-4 pt-4 border-t border-amber-200">
            <p className="text-slate-600 italic">{disclaimer}</p>
          </div>
        )}
      </div>
    </div>
  );
}