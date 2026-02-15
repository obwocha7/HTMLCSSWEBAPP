import React, { useEffect, useRef, useState } from 'react';

export default function LivePreview({ code, showSuccess }) {
  const iframeRef = useRef(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [code]);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(code || '');
        doc.close();
      }
    }
  }, [code, key]);

  return (
    <div className="h-full rounded-lg overflow-hidden border border-card-border relative">
      <div className="bg-deep-space-lighter px-3 py-1.5 flex items-center justify-between border-b border-card-border">
        <div className="flex items-center gap-2">
          <span className="text-xs text-cloud-dim">Preview</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full ${code ? 'bg-neon-cyan' : 'bg-cloud-dim'}`} />
          <span className="text-[10px] text-cloud-dim">{code ? 'Live' : 'Empty'}</span>
        </div>
      </div>
      <div className="relative h-[calc(100%-32px)]">
        {showSuccess && (
          <div
            className="absolute inset-0 z-10 pointer-events-none rounded-b-lg transition-opacity duration-500"
            style={{
              boxShadow: 'inset 0 0 30px rgba(255, 209, 102, 0.3)',
            }}
          />
        )}
        <iframe
          ref={iframeRef}
          key={key}
          title="Live Preview"
          className="w-full h-full bg-white"
          sandbox="allow-scripts"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
}
