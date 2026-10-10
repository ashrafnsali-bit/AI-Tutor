import React from 'react';
import { removeExternalLinksFromText } from '../services/studentContentSanitizer';

interface RichContentRendererProps {
  content: string;
  isEn?: boolean;
}

export const RichContentRenderer: React.FC<RichContentRendererProps> = ({ content, isEn = false }) => {
  if (!content) return null;
  content = removeExternalLinksFromText(content);

  // Split content into code blocks and normal markdown segments
  const codeBlockRegex = /```(?:xml|svg|html|text|jsx|tsx|css|json)?\s*\n([\s\S]*?)```/g;
  const segments: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  let segmentKey = 0;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    const textBefore = content.substring(lastIndex, match.index);
    if (textBefore.trim()) {
      segments.push(
        <div key={`text-${segmentKey++}`} className="rich-markdown-block">
          {renderMarkdownParagraphs(textBefore, isEn)}
        </div>
      );
    }

    const codeContent = match[1].trim();

    // Check if the code block is an SVG graphic
    if (codeContent.includes('<svg') && codeContent.includes('</svg>')) {
      const svgStart = codeContent.indexOf('<svg');
      const svgEnd = codeContent.lastIndexOf('</svg>') + 6;
      const svgMarkup = codeContent
        .substring(svgStart, svgEnd)
        .replace(/<a\b[^>]*>/gi, '')
        .replace(/<\/a\s*>/gi, '');

      segments.push(
        <div 
          key={`svg-${segmentKey++}`} 
          className="lecture-svg-diagram-wrapper"
          style={{
            margin: '1.75rem 0',
            background: 'linear-gradient(145deg, #0b1329, #0f172a)',
            borderRadius: '16px',
            border: '1px solid #334155',
            padding: '1.25rem',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
            direction: 'ltr',
            textAlign: 'center'
          }}
          dangerouslySetInnerHTML={{ __html: svgMarkup }}
        />
      );
    } else {
      // Regular code/text block
      segments.push(
        <pre 
          key={`code-${segmentKey++}`}
          className="lecture-code-block"
          style={{
            background: '#090d16',
            color: '#38bdf8',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid #1e293b',
            overflowX: 'auto',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            direction: 'ltr',
            textAlign: 'left',
            margin: '1.25rem 0'
          }}
        >
          <code>{codeContent}</code>
        </pre>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  const remainingText = content.substring(lastIndex);
  if (remainingText.trim()) {
    segments.push(
      <div key={`text-${segmentKey++}`} className="rich-markdown-block">
        {renderMarkdownParagraphs(remainingText, isEn)}
      </div>
    );
  }

  return (
    <div className="rich-content-renderer" style={{ color: '#f1f5f9', lineHeight: '1.8' }}>
      {segments}
    </div>
  );
};

function renderMarkdownParagraphs(text: string, _isEn?: boolean): React.ReactNode[] {
  const lines = text.split('\n');
  const nodes: React.ReactNode[] = [];
  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let currentTable: string[] | null = null;
  let nodeKey = 0;

  const flushList = () => {
    if (currentList) {
      const ListTag = currentList.type;
      nodes.push(
        <ListTag
          key={`list-${nodeKey++}`}
          style={{
            margin: '0.75rem 0 1.25rem',
            paddingInlineStart: '1.5rem',
            lineHeight: '1.8'
          }}
        >
          {currentList.items.map((item, idx) => (
            <li key={idx} style={{ margin: '0.35rem 0' }}>
              {formatInlineText(item)}
            </li>
          ))}
        </ListTag>
      );
      currentList = null;
    }
  };

  const flushTable = () => {
    if (currentTable && currentTable.length > 0) {
      nodes.push(renderMarkdownTable(currentTable, nodeKey++));
      currentTable = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      flushList();
      flushTable();
      continue;
    }

    // Markdown Table line
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushList();
      if (!currentTable) currentTable = [];
      currentTable.push(trimmed);
      continue;
    } else {
      flushTable();
    }

    // Horizontal Rule
    if (trimmed === '---' || trimmed === '***') {
      flushList();
      nodes.push(
        <hr
          key={`hr-${nodeKey++}`}
          style={{
            borderColor: '#334155',
            margin: '1.75rem 0',
            borderStyle: 'dashed'
          }}
        />
      );
      continue;
    }

    // Headers
    if (trimmed.startsWith('### ')) {
      flushList();
      nodes.push(
        <h3
          key={`h3-${nodeKey++}`}
          style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#38bdf8',
            margin: '1.75rem 0 0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          {formatInlineText(trimmed.replace('### ', ''))}
        </h3>
      );
      continue;
    }

    if (trimmed.startsWith('#### ')) {
      flushList();
      nodes.push(
        <h4
          key={`h4-${nodeKey++}`}
          style={{
            fontSize: '1.15rem',
            fontWeight: '600',
            color: '#34d399',
            margin: '1.25rem 0 0.5rem'
          }}
        >
          {formatInlineText(trimmed.replace('#### ', ''))}
        </h4>
      );
      continue;
    }

    if (trimmed.startsWith('## ')) {
      flushList();
      nodes.push(
        <h2
          key={`h2-${nodeKey++}`}
          style={{
            fontSize: '1.45rem',
            fontWeight: 'bold',
            color: '#facc15',
            margin: '2rem 0 0.85rem'
          }}
        >
          {formatInlineText(trimmed.replace('## ', ''))}
        </h2>
      );
      continue;
    }

    // Unordered List (* or -)
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(trimmed.substring(2));
      continue;
    }

    // Ordered List (1. 2. etc)
    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (numMatch) {
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(numMatch[2]);
      continue;
    }

    // Normal paragraph line
    flushList();
    nodes.push(
      <p
        key={`p-${nodeKey++}`}
        className="section-para"
        style={{
          margin: '0.65rem 0',
          fontSize: '1rem',
          color: '#e2e8f0',
          lineHeight: '1.8'
        }}
      >
        {formatInlineText(trimmed)}
      </p>
    );
  }

  flushList();
  flushTable();

  return nodes;
}

// Helper: render Markdown table into HTML Table
function renderMarkdownTable(lines: string[], key: number): React.ReactNode {
  if (lines.length < 2) return null;

  const parseRow = (line: string) =>
    line
      .split('|')
      .slice(1, -1)
      .map(cell => cell.trim());

  const headerRow = parseRow(lines[0]);
  const isSeparator = (line: string) => /^\|[\s-:]+\|/.test(line);

  let bodyStartIndex = 1;
  if (isSeparator(lines[1])) {
    bodyStartIndex = 2;
  }

  const bodyRows = lines.slice(bodyStartIndex).map(parseRow);

  return (
    <div
      key={`table-${key}`}
      style={{
        overflowX: 'auto',
        margin: '1.25rem 0',
        borderRadius: '10px',
        border: '1px solid #334155'
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.95rem',
          textAlign: 'start'
        }}
      >
        <thead>
          <tr style={{ background: '#1e293b', color: '#38bdf8' }}>
            {headerRow.map((h, i) => (
              <th
                key={i}
                style={{
                  padding: '0.75rem 1rem',
                  borderBottom: '2px solid #334155',
                  fontWeight: 'bold'
                }}
              >
                {formatInlineText(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, rIdx) => (
            <tr
              key={rIdx}
              style={{
                background: rIdx % 2 === 0 ? '#0f172a' : '#141e33',
                borderBottom: '1px solid #1e293b'
              }}
            >
              {row.map((cell, cIdx) => (
                <td key={cIdx} style={{ padding: '0.65rem 1rem', color: '#cbd5e1' }}>
                  {formatInlineText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Helper: format inline bold, italic, and span highlights
function formatInlineText(text: string): React.ReactNode {
  // Regex to split by bold **...** and math $...$
  const safeText = text.replace(
    /!?\[([^\]]*)\]\(\s*(?:https?:\/\/|\/\/|www\.|mailto:)[^)]+\)/gi,
    '$1'
  );
  const parts = safeText.split(/(\*\*.*?\*\*|\$.*?\$)/g);

  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2);
      return (
        <strong key={idx} style={{ color: '#f8fafc', fontWeight: 'bold' }}>
          {inner}
        </strong>
      );
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      const inner = part.slice(1, -1);
      return (
        <span
          key={idx}
          style={{
            fontFamily: 'serif',
            fontStyle: 'italic',
            color: '#fbbf24',
            padding: '0 3px',
            direction: 'ltr',
            display: 'inline-block'
          }}
        >
          {inner}
        </span>
      );
    }
    return part;
  });
}
