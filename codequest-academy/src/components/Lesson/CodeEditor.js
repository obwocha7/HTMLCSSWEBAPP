import React, { useRef, useCallback } from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor({ code, onChange, language = 'html', theme = 'vs-dark' }) {
  const editorRef = useRef(null);

  const handleEditorDidMount = useCallback((editor) => {
    editorRef.current = editor;
    editor.updateOptions({
      fontSize: 14,
      fontFamily: '"JetBrains Mono", monospace',
      minimap: { enabled: false },
      lineNumbers: 'on',
      roundedSelection: true,
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      tabSize: 2,
      automaticLayout: true,
      padding: { top: 12 },
      suggestOnTriggerCharacters: true,
      quickSuggestions: true,
      bracketPairColorization: { enabled: true },
    });
  }, []);

  const handleChange = useCallback((value) => {
    onChange(value || '');
  }, [onChange]);

  return (
    <div className="h-full rounded-lg overflow-hidden border border-card-border">
      <div className="bg-deep-space-lighter px-3 py-1.5 flex items-center justify-between border-b border-card-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-coral-energy" />
            <div className="w-2.5 h-2.5 rounded-full bg-solar-gold" />
            <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan" />
          </div>
          <span className="text-xs text-cloud-dim font-mono ml-2">index.html</span>
        </div>
        <span className="text-[10px] text-cloud-dim">HTML</span>
      </div>
      <Editor
        height="100%"
        defaultLanguage={language}
        value={code}
        onChange={handleChange}
        onMount={handleEditorDidMount}
        theme={theme}
        options={{
          fontSize: 14,
          fontFamily: '"JetBrains Mono", monospace',
          minimap: { enabled: false },
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          tabSize: 2,
          automaticLayout: true,
          padding: { top: 12 },
        }}
        loading={
          <div className="flex items-center justify-center h-full bg-deep-space">
            <div className="text-cloud-dim text-sm animate-pulse">Loading editor...</div>
          </div>
        }
      />
    </div>
  );
}
