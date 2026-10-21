import React from 'react';
import { removeExternalLinksFromText } from '../services/studentContentSanitizer';
import { resolveDiagramImageUrl } from './CurriculumDiagramRenderer';

interface RichContentRendererProps {
  content: string;
  isEn?: boolean;
}

export function cleanLatexMath(mathStr: string): string {
  return mathStr
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\int_\{([^}]+)\}\^\{([^}]+)\}/g, '∫[$1→$2] ')
    .replace(/\\int_([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)/g, '∫[$1→$2] ')
    .replace(/\\int_\{([^}]+)\}/g, '∫[$1] ')
    .replace(/\\int_([a-zA-Z0-9]+)/g, '∫[$1] ')
    .replace(/\\int\b/g, '∫ ')
    .replace(/\\pi\b/g, 'π')
    .replace(/\\times\b/g, ' × ')
    .replace(/\\div\b/g, ' ÷ ')
    .replace(/\\pm\b/g, ' ± ')
    .replace(/\\leq?\b/g, ' ≤ ')
    .replace(/\\geq?\b/g, ' ≥ ')
    .replace(/\\neq\b/g, ' ≠ ')
    .replace(/\\approx\b/g, ' ≈ ')
    .replace(/\\infty\b/g, '∞')
    .replace(/\\alpha\b/g, 'α')
    .replace(/\\beta\b/g, 'β')
    .replace(/\\theta\b/g, 'θ')
    .replace(/\\lambda\b/g, 'λ')
    .replace(/\\Delta\b/g, 'Δ')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\cdot\b/g, '·')
    .replace(/\\,/g, ' ')
    .replace(/\\quad/g, '  ')
    .replace(/\\qquad/g, '   ')
    .replace(/[\$]/g, '')
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^4\b/g, '⁴')
    .replace(/\^n\b/g, 'ⁿ')
    .replace(/_0\b/g, '₀')
    .replace(/_1\b/g, '₁')
    .replace(/_2\b/g, '₂')
    .trim();
}



export const RichContentRenderer: React.FC<RichContentRendererProps> = ({ content, isEn = false }) => {
  if (!content) return null;
  // Cleanly unwrap any SVGs that are wrapped in escaped or raw code fences (\```xml <svg... </svg> \```)
  let normalizedContent = content.replace(/`?\\?`?\\?`?[a-zA-Z0-9_-]*\s*(<svg[\s\S]*?<\/svg>)\s*`?\\?`?\\?`?/gi, '\n\n$1\n\n');
  normalizedContent = normalizedContent.replace(/\\`{3}/g, '```');
  normalizedContent = removeExternalLinksFromText(normalizedContent);

  // Match either inline <svg>...</svg> blocks FIRST, OR fenced code blocks (```...```)
  const blockRegex = /(<svg[\s\S]*?<\/svg>)|(?:```(?:[a-zA-Z0-9_-]+)?\s*[\r\n]+([\s\S]*?)```)/gi;
  const segments: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  let segmentKey = 0;

  const renderSvgElement = (rawSvg: string) => {
    const lowerSvg = rawSvg.toLowerCase();
    const svgStart = lowerSvg.indexOf('<svg');
    const svgEnd = lowerSvg.lastIndexOf('</svg>') + 6;
    if (svgStart === -1 || svgEnd <= svgStart) return null;

    const svgMarkup = rawSvg
      .substring(svgStart, svgEnd)
      .replace(/<a\b[^>]*>/gi, '')
      .replace(/<\/a\s*>/gi, '');

    return (
      <div 
        key={`svg-${segmentKey++}`} 
        className="lecture-svg-diagram-wrapper"
        style={{
          margin: '2rem 0',
          background: 'linear-gradient(145deg, #0b1329 0%, #0f172a 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          padding: '1.25rem',
          overflow: 'hidden',
          boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.08)',
          direction: 'ltr',
          textAlign: 'center'
        }}
      >
        <div 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginBottom: '1rem', 
            color: '#38bdf8', 
            fontSize: '0.85rem', 
            fontWeight: 700,
            background: 'rgba(56, 189, 248, 0.1)',
            padding: '0.35rem 0.9rem',
            borderRadius: '20px',
            border: '1px solid rgba(56, 189, 248, 0.2)'
          }}
        >
          <span>📊</span>
          <span>{isEn ? 'Interactive Visual Map & Educational Diagram' : 'مخطط توضيحي بصري للمفاهيم'}</span>
        </div>
        <div 
          style={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}
          dangerouslySetInnerHTML={{ __html: svgMarkup }} 
        />
      </div>
    );
  };

  while ((match = blockRegex.exec(normalizedContent)) !== null) {
    const textBefore = normalizedContent.substring(lastIndex, match.index);
    if (textBefore.trim()) {
      segments.push(
        <div key={`text-${segmentKey++}`} className="rich-markdown-block">
          {renderMarkdownParagraphs(textBefore, isEn)}
        </div>
      );
    }

    if (match[1] !== undefined) {
      // It's a raw or unwrapped <svg>...</svg> block
      segments.push(renderSvgElement(match[1]));
    } else if (match[2] !== undefined) {
      // It's a fenced code block (```...```)
      const codeContent = match[2].trim();

      if (codeContent.toLowerCase().includes('<svg') && codeContent.toLowerCase().includes('</svg>')) {
        segments.push(renderSvgElement(codeContent));
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
    }

    lastIndex = match.index + match[0].length;
  }

  const remainingText = normalizedContent.substring(lastIndex);
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
    if (!trimmed || /^[`\\s]+$/.test(trimmed)) {
      flushList();
      flushTable();
      continue;
    }

    // Skip stray code fence lines
    if (trimmed === '```' || trimmed.startsWith('```') || trimmed.startsWith('\\`\\`\\`') || trimmed.endsWith('```')) {
      continue;
    }

    // Skip stray SVG/XML markup lines from leaking into paragraph text
    if (
      trimmed.startsWith('<svg') ||
      trimmed.startsWith('</svg>') ||
      trimmed.startsWith('<g') ||
      trimmed.startsWith('</g>') ||
      trimmed.startsWith('<rect') ||
      trimmed.startsWith('<text') ||
      trimmed.startsWith('</text>') ||
      trimmed.startsWith('<circle') ||
      trimmed.startsWith('<line') ||
      trimmed.startsWith('<path') ||
      trimmed.startsWith('<tspan') ||
      trimmed.startsWith('</tspan>') ||
      trimmed.startsWith('<!--') ||
      trimmed.endsWith('-->')
    ) {
      continue;
    }

    // Markdown Image: ![Alt text](image_url)
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      flushList();
      flushTable();
      const altText = imgMatch[1] || 'رسم توضيحي للدرس';
      const rawSrc = imgMatch[2].trim();
      const resolvedSrc = resolveDiagramImageUrl(rawSrc);
      nodes.push(
        <figure
          key={`img-block-${nodeKey++}`}
          className="lecture-inline-image-figure"
          style={{
            margin: '1.75rem auto',
            maxWidth: '820px',
            textAlign: 'center',
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%)',
            borderRadius: '16px',
            border: '1.5px solid rgba(56, 189, 248, 0.35)',
            padding: '1.25rem',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)'
          }}
        >
          <img
            src={resolvedSrc}
            alt={altText}
            style={{
              maxWidth: '100%',
              maxHeight: '480px',
              borderRadius: '12px',
              objectFit: 'contain',
              boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
              display: 'block',
              margin: '0 auto',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
            onError={(e) => {
              const img = e.currentTarget;
              const clean = rawSrc.replace(/^\/+/, '');
              if (!img.dataset.retryCount) {
                img.dataset.retryCount = '1';
                img.src = `./${clean}`;
              } else if (img.dataset.retryCount === '1') {
                img.dataset.retryCount = '2';
                img.src = `/${clean}`;
              } else {
                img.style.display = 'none';
              }
            }}
          />
          {altText && (
            <figcaption
              style={{
                marginTop: '0.95rem',
                fontSize: '0.92rem',
                color: '#38bdf8',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <span>🖼️</span>
              <span>{altText}</span>
            </figcaption>
          )}
        </figure>
      );
      continue;
    }

    // Display Math ($$...$$)
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
      flushList();
      nodes.push(
        <div 
          key={`disp-math-${nodeKey++}`} 
          className="math-formula-display" 
          dir="ltr"
          style={{
            margin: '1.25rem 0',
            textAlign: 'center',
            background: 'rgba(56, 189, 248, 0.08)',
            padding: '0.85rem',
            borderRadius: '10px',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            color: '#38bdf8',
            fontFamily: 'serif',
            fontSize: '1.1rem'
          }}
        >
          {cleanLatexMath(trimmed.slice(2, -2).trim())}
        </div>
      );
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
  const safeText = text.replace(
    /!?\[([^\]]*)\]\(\s*(?:https?:\/\/|\/\/|www\.|mailto:)[^)]+\)/gi,
    '$1'
  );
  const parts = safeText.split(/(\*\*[\s\S]*?\*\*|\$[^$]+?\$)/g);

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
          className="math-formula-inline"
          dir="ltr"
          style={{
            fontFamily: 'serif',
            fontStyle: 'italic',
            color: '#38bdf8',
            padding: '0.1rem 0.45rem',
            background: 'rgba(56, 189, 248, 0.12)',
            borderRadius: '6px',
            border: '1px solid rgba(56, 189, 248, 0.28)',
            direction: 'ltr',
            display: 'inline-block'
          }}
        >
          {cleanLatexMath(inner)}
        </span>
      );
    }
    return part;
  });
}
