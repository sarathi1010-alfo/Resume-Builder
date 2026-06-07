import React from 'react';

type AdSlotProps = {
  type: 'leaderboard' | 'rectangle' | 'in-content';
  className?: string;
};

export function AdSlot({ type, className = '' }: AdSlotProps) {
  // In a real application, this would contain the AdSense <ins> tag
  // and load the adsbygoogle script if not already loaded.

  // Define dimensions based on ad type
  const dimensions = {
    'leaderboard': 'w-[320px] h-[50px] md:w-[728px] md:h-[90px]', // 320x50 on mobile, 728x90 on desktop
    'rectangle': 'w-[300px] h-[250px]',
    'in-content': 'w-[336px] h-[280px]',
  };

  return (
    <div className={`flex flex-col items-center justify-center my-8 no-print ${className}`}>
      <span className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Advertisement</span>
      <div
        className={`bg-slate-100 border border-slate-200 flex items-center justify-center rounded-sm ${dimensions[type]}`}
      >
        <span className="text-slate-400 text-sm font-medium">Ad Placeholder ({type})</span>
      </div>
    </div>
  );
}
