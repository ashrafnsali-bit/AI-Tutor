import React, { useState } from 'react';
import type { LectureDiagram } from '../types';
import { 
  Maximize2, 
  X, 
  Layers, 
  Sparkles, 
  Info, 
  CheckCircle2
} from 'lucide-react';

interface CurriculumDiagramRendererProps {
  diagram: LectureDiagram;
  lang?: 'ar' | 'en';
}

export const CurriculumDiagramRenderer: React.FC<CurriculumDiagramRendererProps> = ({
  diagram,
  lang = 'ar'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLabelIdx, setActiveLabelIdx] = useState<number | null>(null);

  const isEn = lang === 'en';
  const figureNum = isEn ? diagram.figureNumberEn : diagram.figureNumberAr;
  const title = isEn ? diagram.titleEn : diagram.titleAr;
  const caption = isEn ? diagram.captionEn : diagram.captionAr;
  const formula = isEn ? diagram.takeawayFormulaEn : diagram.takeawayFormulaAr;

  // Render High-Precision Vector SVG scientific models
  const renderSvgModel = () => {
    const isNeutralization = title.includes('التعادل') || title.toLowerCase().includes('neutralization');
    const isElectrolysis = title.includes('التحليل الكهربائي') || title.toLowerCase().includes('electrolysis');

    switch (diagram.diagramType) {
      case 'primary_science_g3_unit': {
        const unit = Number(diagram.id.match(/-unit-(\d+)-visual$/)?.[1] || 0);
        const visualId = diagram.id.replace(/[^a-zA-Z0-9_-]/g, '-');
        return (
          <svg
            viewBox="0 0 760 320"
            className="scientific-svg primary-science-svg"
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${visualId}-background`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0fdf4" />
                <stop offset="100%" stopColor="#eff6ff" />
              </linearGradient>
              <marker id={`${visualId}-arrow`} markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#0f766e" />
              </marker>
            </defs>
            <rect width="760" height="320" rx="20" fill={`url(#${visualId}-background)`} />
            <rect x="42" y="28" width="676" height="264" rx="18" fill="#fff" stroke="#86c7b2" strokeWidth="3" />
            <text x="380" y="66" textAnchor="middle" fill="#164e63" fontSize="21" fontWeight="700" fontFamily="inherit">
              {isEn ? 'Explore the science idea' : 'استكشف الفكرة العلمية'}
            </text>
            {unit === 0 && (
              <g>
                {[
                  { x: 145, ar: 'سؤال', en: 'Question', color: '#bae6fd' },
                  { x: 300, ar: 'ملاحظة', en: 'Observe', color: '#bbf7d0' },
                  { x: 455, ar: 'اختبار', en: 'Test', color: '#fde68a' },
                  { x: 610, ar: 'استنتاج', en: 'Conclude', color: '#ddd6fe' },
                ].map((step, index) => (
                  <g key={step.en}>
                    <circle cx={step.x} cy="166" r="48" fill={step.color} stroke="#0f766e" strokeWidth="2" />
                    <text x={step.x} y="171" textAnchor="middle" fill="#164e63" fontSize="16" fontWeight="700" fontFamily="inherit">
                      {isEn ? step.en : step.ar}
                    </text>
                    {index < 3 && (
                      <path d={`M${step.x + 53} 166 H${step.x + 91}`} stroke="#0f766e" strokeWidth="3" markerEnd={`url(#${visualId}-arrow)`} />
                    )}
                  </g>
                ))}
                <text x="380" y="252" textAnchor="middle" fill="#475569" fontSize="15" fontFamily="inherit">
                  {isEn ? 'Observe safely and use evidence to explain results' : 'لاحظ بأمان واستعمل الدليل لتفسير النتائج'}
                </text>
              </g>
            )}
            {unit === 1 && (
              <g>
                <circle cx="174" cy="137" r="31" fill="#fde68a" stroke="#f59e0b" strokeWidth="3" />
                <text x="174" y="143" textAnchor="middle" fill="#78350f" fontSize="13" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Sun' : 'الشمس'}
                </text>
                <path d="M380 213 V126 M380 159 C346 143 334 126 332 108 C364 106 379 126 380 145 M382 173 C412 155 429 138 430 119 C400 119 384 139 382 158" fill="none" stroke="#15803d" strokeWidth="9" strokeLinecap="round" />
                <path d="M380 212 C359 227 353 237 349 248 M380 212 C400 227 407 237 412 248 M380 212 V251" fill="none" stroke="#a16207" strokeWidth="4" strokeLinecap="round" />
                <path d="M82 251 H680" stroke="#65a30d" strokeWidth="5" />
                <text x="378" y="103" textAnchor="middle" fill="#166534" fontSize="15" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Leaves use light to make food' : 'الأوراق تستعمل الضوء لصنع الغذاء'}
                </text>
                <text x="475" y="239" textAnchor="middle" fill="#92400e" fontSize="14" fontFamily="inherit">
                  {isEn ? 'Roots take in water' : 'الجذور تمتص الماء'}
                </text>
                <path d="M558 108 C548 124 546 129 546 136 A13 13 0 0 0 572 136 C572 129 568 122 558 108Z" fill="#38bdf8" />
                <text x="602" y="143" textAnchor="middle" fill="#0369a1" fontSize="13" fontFamily="inherit">
                  {isEn ? 'Water' : 'ماء'}
                </text>
              </g>
            )}
            {unit === 2 && (
              <g>
                {[
                  { x: 145, labelAr: 'بذرة', labelEn: 'Seed', color: '#fde68a' },
                  { x: 300, labelAr: 'بادرة', labelEn: 'Seedling', color: '#bbf7d0' },
                  { x: 455, labelAr: 'نبات بالغ', labelEn: 'Adult plant', color: '#86efac' },
                  { x: 610, labelAr: 'بذور جديدة', labelEn: 'New seeds', color: '#bfdbfe' },
                ].map((stage, index) => (
                  <g key={stage.labelEn}>
                    <circle cx={stage.x} cy="160" r="44" fill={stage.color} stroke="#15803d" strokeWidth="2" />
                    <text x={stage.x} y="166" textAnchor="middle" fill="#14532d" fontSize="14" fontWeight="700" fontFamily="inherit">
                      {isEn ? stage.labelEn : stage.labelAr}
                    </text>
                    {index < 3 && (
                      <path d={`M${stage.x + 48} 160 H${stage.x + 98}`} stroke="#0f766e" strokeWidth="3" markerEnd={`url(#${visualId}-arrow)`} />
                    )}
                  </g>
                ))}
                <text x="380" y="246" textAnchor="middle" fill="#475569" fontSize="15" fontFamily="inherit">
                  {isEn ? 'Life-cycle stages differ among plants and animals' : 'تختلف مراحل دورة الحياة بين النباتات والحيوانات'}
                </text>
              </g>
            )}
            {unit === 3 && (
              <g>
                <circle cx="135" cy="153" r="31" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" />
                <text x="135" y="158" textAnchor="middle" fill="#78350f" fontSize="12" fontFamily="inherit">
                  {isEn ? 'Sun' : 'الشمس'}
                </text>
                <path d="M267 192 V143 M267 163 C248 151 245 137 246 126 C263 128 270 141 267 154 M268 171 C287 156 290 145 287 134 C273 137 267 150 268 163" fill="none" stroke="#15803d" strokeWidth="6" strokeLinecap="round" />
                <text x="267" y="221" textAnchor="middle" fill="#166534" fontSize="13" fontFamily="inherit">
                  {isEn ? 'Plant' : 'نبات'}
                </text>
                <ellipse cx="455" cy="167" rx="34" ry="23" fill="#d6a56d" stroke="#854d0e" strokeWidth="2" />
                <circle cx="485" cy="150" r="15" fill="#d6a56d" stroke="#854d0e" strokeWidth="2" />
                <text x="461" y="221" textAnchor="middle" fill="#7c2d12" fontSize="13" fontFamily="inherit">
                  {isEn ? 'Consumer' : 'مستهلك'}
                </text>
                <path d="M590 178 Q614 137 638 178 Q614 166 590 178Z" fill="#64748b" stroke="#334155" strokeWidth="2" />
                <circle cx="614" cy="159" r="11" fill="#64748b" />
                <text x="614" y="221" textAnchor="middle" fill="#334155" fontSize="13" fontFamily="inherit">
                  {isEn ? 'Another consumer' : 'مستهلك آخر'}
                </text>
                <path d={`M174 153 H220 M313 153 H408 M495 153 H564`} stroke="#0f766e" strokeWidth="3" markerEnd={`url(#${visualId}-arrow)`} />
                <text x="380" y="259" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">
                  {isEn ? 'Arrows show energy transfer through a food web' : 'توضح الأسهم انتقال الطاقة في الشبكة الغذائية'}
                </text>
              </g>
            )}
            {unit === 4 && (
              <g>
                <rect x="86" y="98" width="256" height="140" rx="14" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                <rect x="418" y="98" width="256" height="140" rx="14" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
                <circle cx="153" cy="143" r="17" fill="#fde68a" />
                <path d="M243 192 V142 M243 159 C224 147 222 136 224 127 C239 127 244 139 243 151" fill="none" stroke="#15803d" strokeWidth="6" strokeLinecap="round" />
                <text x="214" y="219" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Habitat resources' : 'موارد الموطن'}
                </text>
                <path d="M466 193 H626 M487 173 L505 147 L523 173 M540 193 V150" fill="none" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
                <path d="M549 106 C544 118 542 122 542 128 A10 10 0 0 0 562 128 C562 122 559 117 549 106Z" fill="#38bdf8" />
                <text x="546" y="219" textAnchor="middle" fill="#9a3412" fontSize="14" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Change and response' : 'تغير واستجابة'}
                </text>
                <path d="M350 166 H408" stroke="#0f766e" strokeWidth="3" markerEnd={`url(#${visualId}-arrow)`} />
                <text x="380" y="265" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">
                  {isEn ? 'Environmental changes affect living things and resources' : 'تؤثر تغيرات البيئة في المخلوقات الحية والموارد'}
                </text>
              </g>
            )}
            {unit === 5 && (
              <g>
                <path d="M94 226 L225 111 L321 194 L418 100 L572 226Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" />
                <path d="M225 111 L247 154 L265 144 L286 167 M418 100 L441 145 L460 133 L481 166" fill="none" stroke="#475569" strokeWidth="3" />
                <path d="M111 234 H660" stroke="#92400e" strokeWidth="5" />
                <path d="M330 121 C320 151 326 172 313 194 M344 131 C354 157 347 180 361 199" fill="none" stroke="#0284c7" strokeWidth="3" markerEnd={`url(#${visualId}-arrow)`} />
                <circle cx="590" cy="113" r="25" fill="#fde68a" />
                <text x="206" y="260" textAnchor="middle" fill="#334155" fontSize="14" fontFamily="inherit">
                  {isEn ? 'Weathering breaks rock' : 'التجوية تفتت الصخور'}
                </text>
                <text x="491" y="260" textAnchor="middle" fill="#0369a1" fontSize="14" fontFamily="inherit">
                  {isEn ? 'Erosion moves fragments' : 'التعرية تنقل الفتات'}
                </text>
              </g>
            )}
            {unit === 6 && (
              <g>
                <rect x="101" y="111" width="558" height="39" fill="#a16207" />
                <rect x="101" y="150" width="558" height="40" fill="#d6a56d" />
                <rect x="101" y="190" width="558" height="45" fill="#94a3b8" />
                <path d="M101 235 H659" stroke="#475569" strokeWidth="3" />
                <path d="M238 110 V67 M238 87 C220 77 218 66 220 59 C235 60 240 72 238 81 M239 95 C256 83 260 73 257 65 C245 67 238 79 239 87" fill="none" stroke="#15803d" strokeWidth="6" strokeLinecap="round" />
                <path d="M428 166 C454 146 482 146 508 166 C482 184 454 184 428 166Z" fill="#f8fafc" stroke="#334155" strokeWidth="3" />
                <circle cx="465" cy="164" r="5" fill="#334155" />
                <text x="166" y="138" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Organic soil' : 'مواد عضوية'}
                </text>
                <text x="567" y="177" textAnchor="middle" fill="#422006" fontSize="14" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Soil and fossils' : 'تربة وأحافير'}
                </text>
                <text x="380" y="265" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">
                  {isEn ? 'Use Earth’s resources wisely and conserve them' : 'استخدم موارد الأرض بحكمة وحافظ عليها'}
                </text>
              </g>
            )}
          </svg>
        );
      }
      case 'primary_math_g2_unit': {
        const unit = Number(diagram.id.match(/-(\d+)$/)?.[1] || 1);
        const visualId = diagram.id.replace(/[^a-zA-Z0-9_-]/g, '-');
        return (
          <svg
            viewBox="0 0 760 320"
            className="scientific-svg primary-math-svg"
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${visualId}-bg`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fdf4ff" />
                <stop offset="50%" stopColor="#eff6ff" />
                <stop offset="100%" stopColor="#f0fdf4" />
              </linearGradient>
            </defs>
            <rect width="760" height="320" rx="20" fill={`url(#${visualId}-bg)`} />
            <rect x="50" y="32" width="660" height="256" rx="16" fill="#ffffff" stroke="#93c5fd" strokeWidth="2.5" />
            {unit === 1 && (
              <g>
                <text x="380" y="68" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="800" fontFamily="inherit">
                  {isEn ? 'Place Value: 47 = 4 Tens and 7 Ones' : 'القيمة المنزلية: ٤٧ = ٤ عشرات و ٧ آحاد'}
                </text>
                {/* Tens Box */}
                <rect x="130" y="88" width="220" height="120" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
                <text x="240" y="114" textAnchor="middle" fill="#1d4ed8" fontSize="15" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Tens (4 tens = 40)' : 'العشرات (٤ عشرات = ٤٠)'}
                </text>
                {[0, 1, 2, 3].map((r) => (
                  <rect key={r} x={160 + r * 45} y="126" width="30" height="70" rx="4" fill="#60a5fa" stroke="#2563eb" strokeWidth="1.5" />
                ))}
                {/* Ones Box */}
                <rect x="410" y="88" width="220" height="120" rx="12" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" />
                <text x="520" y="114" textAnchor="middle" fill="#be185d" fontSize="15" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Ones (7 ones = 7)' : 'الآحاد (٧ آحاد = ٧)'}
                </text>
                {[0, 1, 2, 3, 4, 5, 6].map((c) => (
                  <rect key={c} x={430 + (c % 4) * 48} y={130 + Math.floor(c / 4) * 36} width="28" height="28" rx="5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
                ))}
                {/* Pattern Strip */}
                <rect x="130" y="222" width="500" height="48" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
                <text x="380" y="252" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Counting by 10s Pattern:  10  →  20  →  30  →  40  →  50 (+10)' : 'نمط العد القفزي بالعشرات:  ١٠  ←  ٢٠  ←  ٣٠  ←  ٤٠  ←  ٥٠ (+١٠)'}
                </text>
              </g>
            )}
            {unit === 2 && (
              <g>
                <text x="380" y="66" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="800" fontFamily="inherit">
                  {isEn ? 'Make a Ten Strategy: 8 + 5 = (8 + 2) + 3 = 10 + 3 = 13' : 'استراتيجية تكوين العشرة: ٨ + ٥ = (٨ + ٢) + ٣ = ١٠ + ٣ = ١٣'}
                </text>
                {/* First Ten Frame */}
                <g transform="translate(100, 88)">
                  <rect width="260" height="110" rx="10" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" />
                  <text x="130" y="24" textAnchor="middle" fill="#0369a1" fontSize="13" fontWeight="700" fontFamily="inherit">
                    {isEn ? 'First 10-Frame (Filled = 10)' : 'إطار العشرة الأول (مكتمل = ١٠)'}
                  </text>
                  {/* 8 Blue + 2 Red dots */}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <circle
                      key={i}
                      cx={35 + (i % 5) * 48}
                      cy={50 + Math.floor(i / 5) * 40}
                      r="15"
                      fill={i < 8 ? '#3b82f6' : '#ef4444'}
                    />
                  ))}
                </g>
                {/* Second Ten Frame */}
                <g transform="translate(400, 88)">
                  <rect width="260" height="110" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
                  <text x="130" y="24" textAnchor="middle" fill="#b91c1c" fontSize="13" fontWeight="700" fontFamily="inherit">
                    {isEn ? 'Second 10-Frame (Remainder = 3)' : 'إطار العشرة الثاني (المتبقي = ٣)'}
                  </text>
                  {/* 3 Red dots */}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <circle
                      key={i}
                      cx={35 + (i % 5) * 48}
                      cy={50 + Math.floor(i / 5) * 40}
                      r="15"
                      fill={i < 3 ? '#ef4444' : '#e2e8f0'}
                      stroke={i < 3 ? 'none' : '#cbd5e1'}
                      strokeWidth="1"
                    />
                  ))}
                </g>
                <rect x="140" y="216" width="480" height="52" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
                <text x="380" y="248" textAnchor="middle" fill="#065f46" fontSize="17" fontWeight="800" fontFamily="inherit">
                  {isEn ? '8 Blue + 2 Red = 10  |  10 + 3 Remaining = 13' : '٨ أزرق + ٢ أحمر = ١٠  |  ١٠ + ٣ متبقٍ = ١٣'}
                </text>
              </g>
            )}
            {unit === 3 && (
              <g>
                <text x="380" y="66" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="800" fontFamily="inherit">
                  {isEn ? 'Fact Family Triangle: Related Addition & Subtraction' : 'مثلث عائلة الحقائق: الربط بين الجمع والطرح'}
                </text>
                {/* Triangle */}
                <polygon points="380,86 280,220 480,220" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3" />
                {/* Top Number: 12 */}
                <circle cx="380" cy="98" r="22" fill="#d97706" />
                <text x="380" y="105" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="800" fontFamily="inherit">12</text>
                {/* Left Number: 7 */}
                <circle cx="295" cy="210" r="20" fill="#2563eb" />
                <text x="295" y="216" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="800" fontFamily="inherit">7</text>
                {/* Right Number: 5 */}
                <circle cx="465" cy="210" r="20" fill="#16a34a" />
                <text x="465" y="216" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="800" fontFamily="inherit">5</text>
                {/* Equations Box Left */}
                <rect x="80" y="104" width="170" height="106" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="165" y="132" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="700" fontFamily="inherit">{isEn ? 'Addition Facts' : 'حقائق الجمع'}</text>
                <text x="165" y="162" textAnchor="middle" fill="#1d4ed8" fontSize="16" fontWeight="800" fontFamily="inherit">7 + 5 = 12</text>
                <text x="165" y="192" textAnchor="middle" fill="#1d4ed8" fontSize="16" fontWeight="800" fontFamily="inherit">5 + 7 = 12</text>
                {/* Equations Box Right */}
                <rect x="510" y="104" width="170" height="106" rx="10" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
                <text x="595" y="132" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="700" fontFamily="inherit">{isEn ? 'Subtraction Facts' : 'حقائق الطرح'}</text>
                <text x="595" y="162" textAnchor="middle" fill="#15803d" fontSize="16" fontWeight="800" fontFamily="inherit">12 − 5 = 7</text>
                <text x="595" y="192" textAnchor="middle" fill="#15803d" fontSize="16" fontWeight="800" fontFamily="inherit">12 − 7 = 5</text>
                {/* Summary bar */}
                <rect x="180" y="238" width="400" height="38" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
                <text x="380" y="262" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Subtraction reverses addition with the same three numbers' : 'الطرح هو العملية العكسية للجمع باستخدام الأعداد الثلاثة نفسها'}
                </text>
              </g>
            )}
            {unit === 4 && (
              <g>
                <text x="380" y="66" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="800" fontFamily="inherit">
                  {isEn ? 'Data Representation: Tally Table & Bar Graph' : 'تمثيل البيانات: جدول الإشارات والأعمدة البيانية'}
                </text>
                {/* Left: Tally Table */}
                <g transform="translate(80, 88)">
                  <rect width="270" height="170" rx="10" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
                  <text x="135" y="26" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="800" fontFamily="inherit">
                    {isEn ? 'Tally Table (Favorite Fruits)' : 'جدول الإشارات (الفاكهة المفضلة)'}
                  </text>
                  <line x1="10" y1="36" x2="260" y2="36" stroke="#cbd5e1" strokeWidth="1.5" />
                  {/* Apples */}
                  <text x="25" y="66" fill="#0f172a" fontSize="13" fontWeight="700" fontFamily="inherit">{isEn ? 'Apple' : 'تفاح'}</text>
                  <text x="140" y="66" fill="#dc2626" fontSize="16" fontWeight="800" fontFamily="inherit">||||  (4)</text>
                  {/* Oranges */}
                  <text x="25" y="112" fill="#0f172a" fontSize="13" fontWeight="700" fontFamily="inherit">{isEn ? 'Orange' : 'برتقال'}</text>
                  <text x="140" y="112" fill="#ea580c" fontSize="16" fontWeight="800" fontFamily="inherit">|||| |  (6)</text>
                  {/* Bananas */}
                  <text x="25" y="154" fill="#0f172a" fontSize="13" fontWeight="700" fontFamily="inherit">{isEn ? 'Banana' : 'موز'}</text>
                  <text x="140" y="154" fill="#ca8a04" fontSize="16" fontWeight="800" fontFamily="inherit">|||  (3)</text>
                </g>
                {/* Right: Bar Graph */}
                <g transform="translate(390, 88)">
                  <rect width="290" height="170" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
                  <text x="145" y="26" textAnchor="middle" fill="#14532d" fontSize="14" fontWeight="800" fontFamily="inherit">
                    {isEn ? 'Bar Graph' : 'الأعمدة البيانية'}
                  </text>
                  <line x1="30" y1="140" x2="270" y2="140" stroke="#475569" strokeWidth="2" />
                  {/* Apple Bar */}
                  <rect x="55" y="68" width="45" height="72" rx="4" fill="#ef4444" />
                  <text x="77" y="60" textAnchor="middle" fill="#991b1b" fontSize="13" fontWeight="800" fontFamily="inherit">4</text>
                  <text x="77" y="156" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="700" fontFamily="inherit">{isEn ? 'Apple' : 'تفاح'}</text>
                  {/* Orange Bar */}
                  <rect x="125" y="32" width="45" height="108" rx="4" fill="#f97316" />
                  <text x="147" y="26" textAnchor="middle" fill="#c2410c" fontSize="13" fontWeight="800" fontFamily="inherit">6</text>
                  <text x="147" y="156" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="700" fontFamily="inherit">{isEn ? 'Orange' : 'برتقال'}</text>
                  {/* Banana Bar */}
                  <rect x="195" y="86" width="45" height="54" rx="4" fill="#eab308" />
                  <text x="217" y="78" textAnchor="middle" fill="#a16207" fontSize="13" fontWeight="800" fontFamily="inherit">3</text>
                  <text x="217" y="156" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="700" fontFamily="inherit">{isEn ? 'Banana' : 'موز'}</text>
                </g>
              </g>
            )}
            {unit === 5 && (
              <g>
                <text x="380" y="64" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="800" fontFamily="inherit">
                  {isEn ? 'Two-Digit Addition with Regrouping: 28 + 15 = 43' : 'جمع رقمين بإعادة التجميع: ٢٨ + ١٥ = ٤٣'}
                </text>
                {/* Place-value columns */}
                <rect x="180" y="82" width="400" height="150" rx="12" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" />
                <line x1="380" y1="82" x2="380" y2="232" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4" />
                {/* Headers */}
                <text x="280" y="108" textAnchor="middle" fill="#1d4ed8" fontSize="16" fontWeight="800" fontFamily="inherit">{isEn ? 'Tens' : 'العشرات'}</text>
                <text x="480" y="108" textAnchor="middle" fill="#be185d" fontSize="16" fontWeight="800" fontFamily="inherit">{isEn ? 'Ones' : 'الآحاد'}</text>
                {/* Regrouping bubble */}
                <circle cx="280" cy="132" r="14" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
                <text x="280" y="137" textAnchor="middle" fill="#1d4ed8" fontSize="13" fontWeight="800" fontFamily="inherit">1</text>
                <text x="480" y="136" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="inherit">{isEn ? '(8+5=13 → 1 ten)' : '(٨+٥=١٣ ← ١ عشرة)'}</text>
                {/* Numbers */}
                <text x="280" y="166" textAnchor="middle" fill="#0f172a" fontSize="24" fontWeight="800" fontFamily="inherit">2</text>
                <text x="480" y="166" textAnchor="middle" fill="#0f172a" fontSize="24" fontWeight="800" fontFamily="inherit">8</text>
                <text x="220" y="196" fill="#2563eb" fontSize="24" fontWeight="800" fontFamily="inherit">+</text>
                <text x="280" y="196" textAnchor="middle" fill="#0f172a" fontSize="24" fontWeight="800" fontFamily="inherit">1</text>
                <text x="480" y="196" textAnchor="middle" fill="#0f172a" fontSize="24" fontWeight="800" fontFamily="inherit">5</text>
                <line x1="200" y1="204" x2="560" y2="204" stroke="#475569" strokeWidth="3" />
                {/* Result */}
                <text x="280" y="228" textAnchor="middle" fill="#15803d" fontSize="26" fontWeight="900" fontFamily="inherit">4</text>
                <text x="480" y="228" textAnchor="middle" fill="#15803d" fontSize="26" fontWeight="900" fontFamily="inherit">3</text>
                <rect x="220" y="244" width="320" height="34" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                <text x="380" y="266" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="800" fontFamily="inherit">
                  {isEn ? 'Sum = 43 (Regrouped 10 ones into 1 ten)' : 'الناتج = ٤٣ (أُعيد تجميع ١٠ آحاد إلى عشرة واحدة)'}
                </text>
              </g>
            )}
            {unit === 6 && (
              <g>
                <text x="380" y="62" textAnchor="middle" fill="#1e293b" fontSize="18" fontWeight="800" fontFamily="inherit">
                  {isEn ? 'Two-Digit Subtraction with Regrouping: 52 − 27 = 25 & Check' : 'طرح رقمين بإعادة التجميع: ٥٢ − ٢٧ = ٢٥ والتحقق بالجمع'}
                </text>
                {/* Subtraction columns */}
                <g transform="translate(140, 80)">
                  <rect width="230" height="160" rx="10" fill="#f8fafc" stroke="#dc2626" strokeWidth="2" />
                  <text x="65" y="26" textAnchor="middle" fill="#1d4ed8" fontSize="14" fontWeight="800" fontFamily="inherit">{isEn ? 'Tens' : 'العشرات'}</text>
                  <text x="165" y="26" textAnchor="middle" fill="#be185d" fontSize="14" fontWeight="800" fontFamily="inherit">{isEn ? 'Ones' : 'الآحاد'}</text>
                  {/* Crossing out and borrowing */}
                  <text x="65" y="52" textAnchor="middle" fill="#2563eb" fontSize="14" fontWeight="800" fontFamily="inherit">4</text>
                  <text x="165" y="52" textAnchor="middle" fill="#db2777" fontSize="14" fontWeight="800" fontFamily="inherit">12</text>
                  <line x1="52" y1="78" x2="78" y2="64" stroke="#ef4444" strokeWidth="2" />
                  <text x="65" y="80" textAnchor="middle" fill="#64748b" fontSize="22" fontWeight="700" fontFamily="inherit">5</text>
                  <line x1="152" y1="78" x2="178" y2="64" stroke="#ef4444" strokeWidth="2" />
                  <text x="165" y="80" textAnchor="middle" fill="#64748b" fontSize="22" fontWeight="700" fontFamily="inherit">2</text>
                  <text x="25" y="112" fill="#dc2626" fontSize="22" fontWeight="800" fontFamily="inherit">−</text>
                  <text x="65" y="112" textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="800" fontFamily="inherit">2</text>
                  <text x="165" y="112" textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="800" fontFamily="inherit">7</text>
                  <line x1="20" y1="124" x2="210" y2="124" stroke="#475569" strokeWidth="2.5" />
                  <text x="65" y="150" textAnchor="middle" fill="#16a34a" fontSize="24" fontWeight="900" fontFamily="inherit">2</text>
                  <text x="165" y="150" textAnchor="middle" fill="#16a34a" fontSize="24" fontWeight="900" fontFamily="inherit">5</text>
                </g>
                {/* Inverse Check Box */}
                <g transform="translate(390, 80)">
                  <rect width="240" height="160" rx="10" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
                  <text x="120" y="28" textAnchor="middle" fill="#047857" fontSize="15" fontWeight="800" fontFamily="inherit">
                    {isEn ? 'Inverse Check (Addition)' : 'التحقق بالعملية العكسية (الجمع)'}
                  </text>
                  <text x="120" y="70" textAnchor="middle" fill="#0f172a" fontSize="20" fontWeight="800" fontFamily="inherit">
                    25 + 27 = 52  ✓
                  </text>
                  <rect x="25" y="94" width="190" height="50" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5" />
                  <text x="120" y="116" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="700" fontFamily="inherit">
                    {isEn ? 'Difference + Subtrahend' : 'الناتج (٢٥) + المطروح (٢٧)'}
                  </text>
                  <text x="120" y="134" textAnchor="middle" fill="#047857" fontSize="13" fontWeight="800" fontFamily="inherit">
                    {isEn ? '= Minuend (52)  Correct!' : '= المطروح منه (٥٢)  إجابة صحيحة'}
                  </text>
                </g>
                <text x="380" y="262" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Unbundle 1 ten to make 12 ones, subtract, and verify with addition' : 'فُكّت عشرة واحدة لتصبح ١٢ آحادًا، ثم طُرحت الأعداد وتُحقّق منها بالجمع'}
                </text>
              </g>
            )}
          </svg>
        );
      }
      case 'primary_math_g3_unit': {
        const unit = Number(diagram.id.match(/-(\d+)$/)?.[1] || 1);
        const visualId = diagram.id.replace(/[^a-zA-Z0-9_-]/g, '-');
        return (
          <svg
            viewBox="0 0 760 320"
            className="scientific-svg primary-math-svg"
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${visualId}-background`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#eff6ff" />
                <stop offset="100%" stopColor="#ecfdf5" />
              </linearGradient>
            </defs>
            <rect width="760" height="320" rx="20" fill={`url(#${visualId}-background)`} />
            <rect x="78" y="42" width="604" height="236" rx="18" fill="#fff" stroke="#93c5fd" strokeWidth="3" />
            {unit === 1 && (
              <g>
                <text x="380" y="78" textAnchor="middle" fill="#334155" fontSize="20" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Place value: 23,157' : 'القيمة المنزلية: ٢٣١٥٧'}
                </text>
                {[
                  { x: 112, digit: '2', ar: 'عشرات الألوف', en: 'Ten-thousands', color: '#38bdf8' },
                  { x: 220, digit: '3', ar: 'الألوف', en: 'Thousands', color: '#34d399' },
                  { x: 328, digit: '1', ar: 'المئات', en: 'Hundreds', color: '#fbbf24' },
                  { x: 436, digit: '5', ar: 'العشرات', en: 'Tens', color: '#fb7185' },
                  { x: 544, digit: '7', ar: 'الآحاد', en: 'Ones', color: '#a78bfa' },
                ].map((place) => (
                  <g key={place.en}>
                    <rect x={place.x} y="104" width="96" height="92" rx="12" fill={place.color} opacity="0.2" stroke={place.color} strokeWidth="2" />
                    <text x={place.x + 48} y="151" textAnchor="middle" fill="#1e3a8a" fontSize="30" fontWeight="800" fontFamily="inherit">{place.digit}</text>
                    <text x={place.x + 48} y="221" textAnchor="middle" fill="#334155" fontSize="12" fontWeight="700" fontFamily="inherit">{isEn ? place.en : place.ar}</text>
                  </g>
                ))}
                <text x="380" y="256" textAnchor="middle" fill="#1d4ed8" fontSize="17" fontWeight="700" fontFamily="inherit">
                  {isEn ? '20,000 + 3,000 + 100 + 50 + 7' : '٢٠٠٠٠ + ٣٠٠٠ + ١٠٠ + ٥٠ + ٧'}
                </text>
              </g>
            )}
            {unit === 2 && (
              <g>
                <text x="380" y="86" textAnchor="middle" fill="#334155" fontSize="21" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Add by place value' : 'اجمع بحسب القيمة المنزلية'}
                </text>
                <text x="380" y="143" textAnchor="middle" fill="#1e3a8a" fontSize="32" fontWeight="800" fontFamily="inherit">268</text>
                <text x="380" y="185" textAnchor="middle" fill="#047857" fontSize="32" fontWeight="800" fontFamily="inherit">+ 157</text>
                <path d="M300 198 H460" stroke="#64748b" strokeWidth="3" />
                <text x="380" y="239" textAnchor="middle" fill="#7c3aed" fontSize="32" fontWeight="800" fontFamily="inherit">425</text>
                <text x="380" y="263" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">
                  {isEn ? 'ones → tens → hundreds' : 'الآحاد ← العشرات ← المئات'}
                </text>
              </g>
            )}
            {unit === 3 && (
              <g>
                <text x="380" y="82" textAnchor="middle" fill="#334155" fontSize="21" fontWeight="700" fontFamily="inherit">
                  {isEn ? 'Regroup, subtract, and check' : 'أعد التجميع، واطرح، ثم تحقق'}
                </text>
                <rect x="154" y="104" width="452" height="70" rx="12" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
                <text x="380" y="149" textAnchor="middle" fill="#1e3a8a" fontSize="27" fontWeight="800" fontFamily="inherit">
                  {isEn ? '503 − 178 = 325' : '٥٠٣ − ١٧٨ = ٣٢٥'}
                </text>
                <rect x="172" y="194" width="416" height="48" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                <text x="380" y="224" textAnchor="middle" fill="#166534" fontSize="18" fontWeight="700" fontFamily="inherit">
                  {isEn ? '503 = 4 hundreds + 9 tens + 13 ones' : '٥٠٣ = ٤ مئات + ٩ عشرات + ١٣ آحادًا'}
                </text>
                <text x="380" y="264" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">
                  {isEn ? 'Check the difference with addition' : 'تحقق من الفرق باستعمال الجمع'}
                </text>
              </g>
            )}
            {unit === 4 && (
              <g>
                <text x="380" y="78" textAnchor="middle" fill="#334155" fontSize="21" fontWeight="700" fontFamily="inherit">
                  {isEn ? '4 rows of 6' : '٤ صفوف في كل منها ٦'}
                </text>
                {Array.from({ length: 24 }, (_, index) => (
                  <rect
                    key={index}
                    x={270 + (index % 6) * 38}
                    y={96 + Math.floor(index / 6) * 34}
                    width="30"
                    height="26"
                    rx="5"
                    fill={['#bfdbfe', '#bbf7d0', '#fde68a', '#fbcfe8'][Math.floor(index / 6)]}
                    stroke="#475569"
                    strokeWidth="1.5"
                  />
                ))}
                <text x="380" y="252" textAnchor="middle" fill="#7c3aed" fontSize="24" fontWeight="800" fontFamily="inherit">4 × 6 = 24</text>
                <text x="380" y="271" textAnchor="middle" fill="#475569" fontSize="13" fontFamily="inherit">
                  {isEn ? '4 equal groups of 6' : '٤ مجموعات متساوية من ٦'}
                </text>
              </g>
            )}
            {unit === 5 && (
              <g>
                <text x="380" y="70" textAnchor="middle" fill="#334155" fontSize="21" fontWeight="700" fontFamily="inherit">
                  {isEn ? '7 rows of 8' : '٧ صفوف في كل منها ٨'}
                </text>
                {Array.from({ length: 56 }, (_, index) => (
                  <rect
                    key={index}
                    x={274 + (index % 8) * 28}
                    y={84 + Math.floor(index / 8) * 22}
                    width="21"
                    height="16"
                    rx="4"
                    fill={['#bfdbfe', '#bbf7d0', '#fde68a', '#fbcfe8', '#ddd6fe', '#bae6fd', '#fed7aa'][Math.floor(index / 8)]}
                    stroke="#475569"
                    strokeWidth="1"
                  />
                ))}
                <text x="380" y="262" textAnchor="middle" fill="#7c3aed" fontSize="24" fontWeight="800" fontFamily="inherit">7 × 8 = 56</text>
                <text x="380" y="279" textAnchor="middle" fill="#475569" fontSize="13" fontFamily="inherit">
                  {isEn ? 'Use an array to check a multiplication fact' : 'استعمل شبكة للتحقق من حقيقة الضرب'}
                </text>
              </g>
            )}
          </svg>
        );
      }
      case 'primary_math_g5_unit': {
        const unit = Number(diagram.id.match(/-(\d+)$/)?.[1] || 1);
        const visualId = diagram.id.replace(/[^a-zA-Z0-9_-]/g, '-');
        return (
          <svg
            viewBox="0 0 760 320"
            className="scientific-svg primary-math-svg"
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${visualId}-background`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#eff6ff" />
                <stop offset="100%" stopColor="#ecfdf5" />
              </linearGradient>
              <marker id={`${visualId}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#475569" />
              </marker>
            </defs>
            <rect width="760" height="320" rx="20" fill={`url(#${visualId}-background)`} />
            <rect x="112" y="48" width="536" height="222" rx="18" fill="#fff" stroke="#93c5fd" strokeWidth="3" />
            {unit === 1 && (
              <g>
                <text x="380" y="86" textAnchor="middle" fill="#334155" fontSize="20" fontWeight="700" fontFamily="inherit">{isEn ? 'Place value groups' : 'مجموعات القيمة المنزلية'}</text>
                {[
                  { x: 164, value: '3', ar: 'مليارات', en: 'Billions', color: '#38bdf8' },
                  { x: 274, value: '742', ar: 'ملايين', en: 'Millions', color: '#34d399' },
                  { x: 384, value: '000', ar: 'آلاف', en: 'Thousands', color: '#fbbf24' },
                  { x: 494, value: '000', ar: 'آحاد', en: 'Ones', color: '#fb7185' },
                ].map((group) => (
                  <g key={group.ar}>
                    <rect x={group.x} y="112" width="94" height="78" rx="10" fill={group.color} opacity="0.22" stroke={group.color} strokeWidth="2" />
                    <text x={group.x + 47} y="153" textAnchor="middle" fill="#334155" fontSize="23" fontWeight="800" fontFamily="inherit">{group.value}</text>
                    <text x={group.x + 47} y="218" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="700" fontFamily="inherit">{isEn ? group.en : group.ar}</text>
                  </g>
                ))}
                <text x="380" y="250" textAnchor="middle" fill="#1d4ed8" fontSize="17" fontWeight="700" fontFamily="inherit">3,742,000,000</text>
              </g>
            )}
            {unit === 2 && (
              <g>
                <text x="380" y="88" textAnchor="middle" fill="#334155" fontSize="20" fontWeight="700" fontFamily="inherit">{isEn ? 'Align decimal points' : 'حاذِ الفواصل العشرية'}</text>
                <text x="380" y="140" textAnchor="middle" fill="#1e3a8a" fontSize="31" fontWeight="800" fontFamily="inherit">12.45</text>
                <text x="380" y="182" textAnchor="middle" fill="#047857" fontSize="31" fontWeight="800" fontFamily="inherit">+ 3.70</text>
                <path d="M292 198 H468" stroke="#64748b" strokeWidth="3" />
                <text x="380" y="238" textAnchor="middle" fill="#7c3aed" fontSize="31" fontWeight="800" fontFamily="inherit">16.15</text>
                <text x="380" y="260" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">{isEn ? 'estimate → calculate → check' : 'قدّر ← احسب ← تحقّق'}</text>
              </g>
            )}
            {unit === 3 && (
              <g>
                <text x="380" y="84" textAnchor="middle" fill="#334155" fontSize="20" fontWeight="700" fontFamily="inherit">{isEn ? 'Area model: 12 × 4' : 'نموذج المساحة: ١٢ × ٤'}</text>
                <rect x="190" y="118" width="284" height="72" rx="10" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
                <text x="332" y="162" textAnchor="middle" fill="#1e3a8a" fontSize="22" fontWeight="800" fontFamily="inherit">{isEn ? '10 × 4 = 40' : '١٠ × ٤ = ٤٠'}</text>
                <rect x="486" y="118" width="84" height="72" rx="10" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
                <text x="528" y="162" textAnchor="middle" fill="#166534" fontSize="18" fontWeight="800" fontFamily="inherit">{isEn ? '2 × 4' : '٢ × ٤'}</text>
                <text x="380" y="232" textAnchor="middle" fill="#334155" fontSize="19" fontWeight="700" fontFamily="inherit">{isEn ? '40 + 8 = 48' : '٤٠ + ٨ = ٤٨'}</text>
                <text x="380" y="257" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">{isEn ? 'split into easier products' : 'حلّل إلى نواتج ضرب أسهل'}</text>
              </g>
            )}
            {unit === 4 && (
              <g>
                <text x="380" y="88" textAnchor="middle" fill="#334155" fontSize="20" fontWeight="700" fontFamily="inherit">{isEn ? 'Share equally' : 'قسمة بالتساوي'}</text>
                <text x="236" y="158" textAnchor="middle" fill="#1e3a8a" fontSize="30" fontWeight="800" fontFamily="inherit">84</text>
                <path d="M288 150 H390" stroke="#64748b" strokeWidth="4" markerEnd={`url(#${visualId}-arrow)`} />
                {[0, 1, 2, 3].map((group) => (
                  <g key={group}>
                    <rect x={412 + group * 48} y="118" width="40" height="66" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
                    <text x={432 + group * 48} y="157" textAnchor="middle" fill="#1e3a8a" fontSize="19" fontWeight="800" fontFamily="inherit">21</text>
                  </g>
                ))}
                <text x="380" y="230" textAnchor="middle" fill="#7c3aed" fontSize="23" fontWeight="800" fontFamily="inherit">84 ÷ 4 = 21</text>
                <text x="380" y="256" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">{isEn ? 'check with multiplication' : 'تحقّق باستعمال الضرب'}</text>
              </g>
            )}
            {unit === 5 && (
              <g>
                <text x="380" y="88" textAnchor="middle" fill="#334155" fontSize="20" fontWeight="700" fontFamily="inherit">{isEn ? 'Function rule and equation' : 'قاعدة دالة ومعادلة'}</text>
                <rect x="158" y="119" width="112" height="64" rx="12" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
                <text x="214" y="159" textAnchor="middle" fill="#1e3a8a" fontSize="21" fontWeight="800" fontFamily="inherit">{isEn ? 'input x' : 'المدخل س'}</text>
                <path d="M278 151 H346" stroke="#64748b" strokeWidth="3" markerEnd={`url(#${visualId}-arrow)`} />
                <rect x="356" y="119" width="132" height="64" rx="12" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                <text x="422" y="159" textAnchor="middle" fill="#166534" fontSize="20" fontWeight="800" fontFamily="inherit">{isEn ? '× 3 + 2' : '× ٣ + ٢'}</text>
                <path d="M496 151 H546" stroke="#64748b" strokeWidth="3" markerEnd={`url(#${visualId}-arrow)`} />
                <rect x="554" y="119" width="74" height="64" rx="12" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                <text x="591" y="159" textAnchor="middle" fill="#92400e" fontSize="19" fontWeight="800" fontFamily="inherit">{isEn ? 'out' : 'ناتج'}</text>
                <text x="380" y="230" textAnchor="middle" fill="#7c3aed" fontSize="24" fontWeight="800" fontFamily="inherit">3 × 4 + 2 = 14</text>
                <text x="380" y="256" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">{isEn ? 'substitute, then evaluate' : 'عوّض ثم احسب'}</text>
              </g>
            )}
            {unit === 6 && (
              <g>
                <text x="380" y="86" textAnchor="middle" fill="#334155" fontSize="20" fontWeight="700" fontFamily="inherit">{isEn ? 'Improper fraction and mixed number' : 'كسر غير فعلي وعدد كسري'}</text>
                <text x="252" y="132" textAnchor="middle" fill="#1e3a8a" fontSize="29" fontWeight="800" fontFamily="inherit">7/4</text>
                <path d="M302 124 H440" stroke="#64748b" strokeWidth="3" markerEnd={`url(#${visualId}-arrow)`} />
                <text x="510" y="132" textAnchor="middle" fill="#7c3aed" fontSize="29" fontWeight="800" fontFamily="inherit">1 3/4</text>
                {[0, 1, 2, 3, 4, 5, 6].map((part) => (
                  <rect
                    key={part}
                    x={206 + part * 48}
                    y="160"
                    width="42"
                    height="44"
                    rx="4"
                    fill={part < 4 ? '#60a5fa' : '#eff6ff'}
                    stroke="#1d4ed8"
                    strokeWidth="2"
                  />
                ))}
                <text x="380" y="238" textAnchor="middle" fill="#475569" fontSize="16" fontWeight="700" fontFamily="inherit">{isEn ? 'one whole and three fourths' : 'واحد صحيح وثلاثة أرباع'}</text>
                <text x="380" y="261" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">{isEn ? 'model → rename → compare' : 'مثّل ← حوّل ← قارن'}</text>
              </g>
            )}
            <text x="380" y="300" textAnchor="middle" direction={isEn ? 'ltr' : 'rtl'} unicodeBidi="plaintext" fill="#334155" fontSize="14" fontWeight="700" fontFamily="inherit">
              {isEn ? `Grade 5 math study ${unit}` : `تمثيل رياضي للصف الخامس ${unit}`}
            </text>
          </svg>
        );
      }
      case 'primary_math_unit': {
        const unit = Number(diagram.id.match(/-(\d+)$/)?.[1] || 1);
        const visualId = diagram.id.replace(/[^a-zA-Z0-9_-]/g, '-');
        return (
          <svg
            viewBox="0 0 760 320"
            className="scientific-svg primary-math-svg"
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${visualId}-background`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#eff6ff" />
                <stop offset="100%" stopColor="#ecfdf5" />
              </linearGradient>
              <marker id={`${visualId}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#475569" />
              </marker>
            </defs>
            <rect width="760" height="320" rx="20" fill={`url(#${visualId}-background)`} />
            <circle cx="80" cy="74" r="62" fill="#38bdf8" opacity="0.12" />
            <circle cx="680" cy="255" r="80" fill="#a78bfa" opacity="0.10" />
            {unit === 1 && (
              <g>
                <rect x="130" y="56" width="500" height="204" rx="16" fill="#fff" stroke="#93c5fd" strokeWidth="3" />
                <text x="380" y="94" textAnchor="middle" fill="#334155" fontSize="19" fontWeight="700" fontFamily="inherit">{isEn ? 'Number pattern' : 'نمط عددي'}</text>
                {[0, 1, 2, 3].map((index) => (
                  <g key={index}>
                    <circle cx={220 + index * 88} cy="146" r="24" fill={['#38bdf8', '#34d399', '#fbbf24', '#fb7185'][index]} />
                    <text x={220 + index * 88} y="152" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily="inherit">{index + 1}</text>
                  </g>
                ))}
                <path d="M215 200 H525" stroke="#64748b" strokeWidth="3" strokeDasharray="7 7" markerEnd={`url(#${visualId}-arrow)`} />
                <rect x="314" y="212" width="132" height="32" rx="10" fill="#ede9fe" />
                <text x="380" y="233" textAnchor="middle" fill="#5b21b6" fontSize="15" fontWeight="700" fontFamily="inherit">{isEn ? 'rule → expression' : 'قاعدة ← عبارة'}</text>
              </g>
            )}
            {unit === 2 && (
              <g>
                <rect x="124" y="52" width="512" height="214" rx="16" fill="#fff" stroke="#86efac" strokeWidth="3" />
                <path d="M190 222 V104 M190 222 H566" stroke="#475569" strokeWidth="3" />
                {[0, 1, 2, 3].map((index) => (
                  <g key={index}>
                    <path d={`M ${238 + index * 76} 222 V ${180 - [22, 60, 38, 88][index]}`} stroke={['#38bdf8', '#34d399', '#f59e0b', '#8b5cf6'][index]} strokeWidth="28" strokeLinecap="round" />
                    <circle cx={238 + index * 76} cy={125 + [48, 10, 32, -18][index]} r="7" fill="#db2777" />
                  </g>
                ))}
                <path d="M238 173 L314 135 L390 157 L466 107" fill="none" stroke="#db2777" strokeWidth="4" />
                <text x="380" y="246" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="700" fontFamily="inherit">{isEn ? 'Table → graph → interpretation' : 'جدول ← تمثيل بياني ← استنتاج'}</text>
              </g>
            )}
            {unit === 3 && (
              <g>
                <rect x="150" y="58" width="460" height="204" rx="16" fill="#fff" stroke="#93c5fd" strokeWidth="3" />
                <text x="380" y="105" textAnchor="middle" fill="#1e3a8a" fontSize="34" fontWeight="800" fontFamily="inherit">{isEn ? '3.47' : '٣٫٤٧'}</text>
                {[0, 1, 2, 3].map((index) => (
                  <g key={index}>
                    <rect x={230 + index * 82} y="137" width="62" height="56" rx="8" fill={['#dbeafe', '#dcfce7', '#fef3c7', '#fce7f3'][index]} stroke={['#3b82f6', '#16a34a', '#d97706', '#db2777'][index]} strokeWidth="2" />
                    <text x={261 + index * 82} y="172" textAnchor="middle" fill="#334155" fontSize="22" fontWeight="800" fontFamily="inherit">{['3', '.', '4', '7'][index]}</text>
                  </g>
                ))}
                <path d="M258 205 H502" stroke="#64748b" strokeWidth="2" strokeDasharray="5 6" />
                <text x="380" y="235" textAnchor="middle" fill="#475569" fontSize="14" fontFamily="inherit">{isEn ? 'estimate → calculate → check' : 'قدّر ← احسب ← تحقّق'}</text>
              </g>
            )}
            {unit === 4 && (
              <g>
                <rect x="146" y="58" width="468" height="204" rx="16" fill="#fff" stroke="#c4b5fd" strokeWidth="3" />
                <text x="280" y="104" textAnchor="middle" fill="#334155" fontSize="23" fontWeight="800" fontFamily="inherit">2/3</text>
                <text x="480" y="104" textAnchor="middle" fill="#334155" fontSize="23" fontWeight="800" fontFamily="inherit">4/6</text>
                {[0, 1, 2].map((index) => (
                  <rect key={`third-${index}`} x={188 + index * 62} y="124" width="58" height="50" fill={index < 2 ? '#60a5fa' : '#eff6ff'} stroke="#1d4ed8" strokeWidth="2" />
                ))}
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <rect key={`sixth-${index}`} x={386 + index * 34} y="124" width="32" height="50" fill={index < 4 ? '#34d399' : '#ecfdf5'} stroke="#047857" strokeWidth="2" />
                ))}
                <path d="M270 204 H490" stroke="#64748b" strokeWidth="3" markerEnd={`url(#${visualId}-arrow)`} />
                <text x="380" y="237" textAnchor="middle" fill="#475569" fontSize="15" fontWeight="700" fontFamily="inherit">{isEn ? 'equivalent parts' : 'أجزاء متكافئة'}</text>
              </g>
            )}
            {unit === 5 && (
              <g>
                <rect x="132" y="58" width="496" height="204" rx="16" fill="#fff" stroke="#7dd3fc" strokeWidth="3" />
                <path d="M190 154 H560" stroke="#475569" strokeWidth="5" />
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <path key={index} d={`M ${205 + index * 42} 154 V ${index % 2 === 0 ? 120 : 136}`} stroke="#0f766e" strokeWidth="3" />
                ))}
                <path d="M238 122 V92 H414 V122" fill="none" stroke="#2563eb" strokeWidth="4" markerEnd={`url(#${visualId}-arrow)`} />
                <path d="M464 114 C448 138 442 150 442 166 A34 34 0 0 0 510 166 C510 150 504 138 488 114 Z" fill="#bfdbfe" stroke="#2563eb" strokeWidth="3" />
                <path d="M354 204 H520" stroke="#f59e0b" strokeWidth="4" markerEnd={`url(#${visualId}-arrow)`} />
                <text x="255" y="225" textAnchor="middle" fill="#0f766e" fontSize="16" fontWeight="700" fontFamily="inherit">{isEn ? 'length' : 'طول'}</text>
                <text x="476" y="225" textAnchor="middle" fill="#1d4ed8" fontSize="16" fontWeight="700" fontFamily="inherit">{isEn ? 'capacity' : 'سعة'}</text>
              </g>
            )}
            <text x="380" y="300" textAnchor="middle" direction={isEn ? 'ltr' : 'rtl'} unicodeBidi="plaintext" fill="#334155" fontSize="14" fontWeight="700" fontFamily="inherit">
              {isEn ? `Grade 6 math study ${unit}` : `تمثيل رياضي للصف السادس ${unit}`}
            </text>
          </svg>
        );
      }
      case 'visual_arts': {
        const unit = Number(diagram.id.match(/-(\d+)$/)?.[1] || 1);
        const patternId = `${diagram.id.replace(/[^a-zA-Z0-9_-]/g, '-')}-motif`;
        return (
          <svg
            viewBox="0 0 760 320"
            className="scientific-svg visual-arts-svg"
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${patternId}-bg`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff7ed" />
                <stop offset="100%" stopColor="#fce7f3" />
              </linearGradient>
              <pattern id={patternId} width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M32 4 L60 32 L32 60 L4 32 Z" fill="none" stroke="#be185d" strokeWidth="2" />
                <circle cx="32" cy="32" r="5" fill="#f59e0b" />
                <circle cx="4" cy="4" r="3" fill="#7c3aed" />
              </pattern>
              <marker id={`${patternId}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#64748b" />
              </marker>
            </defs>
            <rect width="760" height="320" rx="20" fill={`url(#${patternId}-bg)`} />
            <circle cx="92" cy="68" r="60" fill="#fb7185" opacity="0.13" />
            <circle cx="670" cy="258" r="86" fill="#8b5cf6" opacity="0.10" />
            {unit === 1 && (
              <g>
                <rect x="168" y="42" width="424" height="228" rx="10" fill="#fff" stroke="#7c3aed" strokeWidth="3" />
                <circle cx="470" cy="102" r="35" fill="#fbbf24" />
                <path d="M188 226 L318 114 L420 226 Z" fill="#60a5fa" />
                <path d="M316 226 L426 148 L566 226 Z" fill="#34d399" />
                <path d="M190 238 H570" stroke="#334155" strokeWidth="4" />
                <circle cx="250" cy="86" r="9" fill="#fb7185" />
                <circle cx="280" cy="86" r="9" fill="#fb7185" />
                <circle cx="310" cy="86" r="9" fill="#fb7185" />
                <path d="M246 266 H514" stroke="#7c3aed" strokeWidth="2" strokeDasharray="7 7" />
              </g>
            )}
            {unit === 2 && (
              <g>
                <rect x="162" y="42" width="436" height="230" rx="12" fill={`url(#${patternId})`} stroke="#7c3aed" strokeWidth="3" />
                <rect x="290" y="98" width="180" height="120" rx="8" fill="#fff7ed" stroke="#0f766e" strokeWidth="3" />
                <path d="M380 110 L446 158 L380 206 L314 158 Z" fill="none" stroke="#be185d" strokeWidth="4" />
                <circle cx="380" cy="158" r="13" fill="#f59e0b" />
              </g>
            )}
            {unit === 3 && (
              <g>
                <rect x="86" y="64" width="218" height="194" rx="14" fill="#fff" stroke="#64748b" strokeWidth="3" />
                <rect x="118" y="94" width="154" height="120" rx="8" fill="#e2e8f0" />
                <path d="M145 194 L194 118 L245 194 Z" fill="#7c3aed" />
                <circle cx="194" cy="132" r="16" fill="#fbbf24" />
                <path d="M325 160 H425" stroke="#64748b" strokeWidth="5" markerEnd={`url(#${patternId}-arrow)`} />
                <rect x="456" y="64" width="218" height="194" rx="14" fill="#fff" stroke="#be185d" strokeWidth="3" />
                <rect x="488" y="94" width="154" height="120" rx="8" fill="#fff1f2" />
                <path d="M515 194 L564 118 L615 194 Z" fill="#be185d" />
                <circle cx="564" cy="132" r="16" fill="#f59e0b" />
                <path d="M146 238 H618" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 8" />
              </g>
            )}
            {unit === 4 && (
              <g>
                <path d="M276 74 C288 102 285 121 260 150 C240 174 252 242 290 264 H470 C508 242 520 174 500 150 C475 121 472 102 484 74 Z" fill="#f5d0a9" stroke="#9a3412" strokeWidth="4" />
                <ellipse cx="380" cy="76" rx="104" ry="22" fill="#fde68a" stroke="#9a3412" strokeWidth="4" />
                <path d="M380 98 V254" stroke="#64748b" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M300 164 Q380 190 460 164 M280 204 Q380 232 480 204" fill="none" stroke="#be185d" strokeWidth="7" strokeLinecap="round" />
                <circle cx="332" cy="130" r="8" fill="#0f766e" />
                <circle cx="428" cy="130" r="8" fill="#0f766e" />
                <circle cx="314" cy="230" r="7" fill="#7c3aed" />
                <circle cx="446" cy="230" r="7" fill="#7c3aed" />
              </g>
            )}
            <text x="380" y="300" textAnchor="middle" direction={isEn ? 'ltr' : 'rtl'} unicodeBidi="plaintext" fill="#334155" fontSize="14" fontWeight="700" fontFamily="inherit">
              {isEn ? `Art study ${unit}` : `تطبيق فني تعليمي ${unit}`}
            </text>
          </svg>
        );
      }
      case 'digital_skills':
      case 'life_skills': {
        const isLifeSkills = diagram.diagramType === 'life_skills';
        const steps = diagram.visualSteps || [];
        const visualId = diagram.id.replace(/[^a-zA-Z0-9_-]/g, '-');
        const positions = steps.map((_, index) => {
          const visualIndex = isEn ? index : steps.length - index - 1;
          return 28 + visualIndex * 184;
        });

        return (
          <svg
            viewBox="0 0 760 260"
            className={`scientific-svg ${isLifeSkills ? 'life-skills-svg' : 'digital-skills-svg'}`}
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${visualId}-background`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={isLifeSkills ? '#3b2631' : '#101d37'} />
                <stop offset="100%" stopColor={isLifeSkills ? '#263b35' : '#172554'} />
              </linearGradient>
              <marker id={`${visualId}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={isLifeSkills ? '#fda4af' : '#67e8f9'} />
              </marker>
            </defs>
            <rect width="760" height="260" rx="16" fill={`url(#${visualId}-background)`} />
            <circle cx="54" cy="38" r="68" fill={isLifeSkills ? '#fb7185' : '#38bdf8'} opacity="0.08" />
            <circle cx="706" cy="232" r="94" fill={isLifeSkills ? '#4ade80' : '#a78bfa'} opacity="0.08" />
            {steps.slice(0, 4).map((step, index) => {
              const x = positions[index] ?? 28;
              const colors = isLifeSkills
                ? ['#fb7185', '#fbbf24', '#34d399', '#60a5fa']
                : ['#22d3ee', '#818cf8', '#34d399', '#fbbf24'];
              const color = colors[index % colors.length];
              const label = isEn ? step.labelEn : step.labelAr;

              return (
                <g key={`${label}-${index}`}>
                  {index < Math.min(steps.length, 4) - 1 && (
                    <path
                      d={isEn
                        ? `M ${x + 160} 133 L ${x + 178} 133`
                        : `M ${x} 133 L ${x - 18} 133`}
                      stroke={isLifeSkills ? '#fda4af' : '#67e8f9'}
                      strokeWidth="2.5"
                      markerEnd={`url(#${visualId}-arrow)`}
                      opacity="0.85"
                    />
                  )}
                  <rect
                    x={x}
                    y="62"
                    width="160"
                    height="142"
                    rx="14"
                    fill="#1e293b"
                    stroke={color}
                    strokeOpacity="0.72"
                    strokeWidth="1.5"
                  />
                  <circle cx={x + 80} cy="103" r="25" fill={color} opacity="0.16" />
                  <circle cx={x + 80} cy="103" r="17" fill={color} opacity="0.28" />
                  <text
                    x={x + 80}
                    y="109"
                    textAnchor="middle"
                    fill={color}
                    fontSize="16"
                    fontWeight="800"
                    fontFamily="inherit"
                  >
                    {index + 1}
                  </text>
                  <text
                    x={x + 80}
                    y="157"
                    textAnchor="middle"
                    direction={isEn ? 'ltr' : 'rtl'}
                    unicodeBidi="plaintext"
                    fill="#f8fafc"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="inherit"
                  >
                    {label}
                  </text>
                  <text
                    x={x + 80}
                    y="181"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="10"
                    fontFamily="inherit"
                  >
                    {isEn ? `Step ${index + 1}` : `الخطوة ${index + 1}`}
                  </text>
                </g>
              );
            })}
            <text
              x="380"
              y="235"
              textAnchor="middle"
              fill="#cbd5e1"
              fontSize="11"
              fontFamily="inherit"
            >
              {isLifeSkills
                ? isEn ? 'Everyday life skills' : 'مهارات حياتية في مواقف يومية'
                : isEn ? 'A visual guide to the lesson concept' : 'تصور بصري مبسط لمفهوم الدرس'}
            </text>
          </svg>
        );
      }

      case 'social_studies': {
        const steps = diagram.visualSteps || [];
        const visualId = diagram.id.replace(/[^a-zA-Z0-9_-]/g, '-');
        const cardWidth = 166;
        const gap = 22;
        const startX = 26;
        return (
          <svg
            viewBox="0 0 780 240"
            className="scientific-svg social-studies-svg"
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${visualId}-bg`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#132b3e" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            <rect width="780" height="240" rx="16" fill={`url(#${visualId}-bg)`} />
            {steps.slice(0, 4).map((step, index) => {
              const visualIndex = isEn ? index : steps.length - index - 1;
              const x = startX + visualIndex * (cardWidth + gap);
              const color = ['#38bdf8', '#34d399', '#fbbf24', '#c084fc'][index % 4];
              const label = isEn ? step.labelEn : step.labelAr;
              return (
                <g key={`${label}-${index}`}>
                  <rect x={x} y="42" width={cardWidth} height="150" rx="14" fill="#0f172a" stroke={color} strokeWidth="2" />
                  <circle cx={x + cardWidth / 2} cy="88" r="25" fill={color} opacity="0.17" />
                  <circle cx={x + cardWidth / 2} cy="88" r="16" fill={color} opacity="0.3" />
                  <text x={x + cardWidth / 2} y="94" textAnchor="middle" fill={color} fontSize="17" fontWeight="800">{index + 1}</text>
                  <text
                    x={x + cardWidth / 2}
                    y="143"
                    textAnchor="middle"
                    direction={isEn ? 'ltr' : 'rtl'}
                    unicodeBidi="plaintext"
                    fill="#f8fafc"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="inherit"
                  >
                    {label}
                  </text>
                  <text x={x + cardWidth / 2} y="169" textAnchor="middle" fill="#94a3b8" fontSize="10">
                    {isEn ? 'Social studies concept' : 'مفهوم من الدراسات الاجتماعية'}
                  </text>
                </g>
              );
            })}
            <text x="390" y="222" textAnchor="middle" fill="#bae6fd" fontSize="11" fontWeight="700">
              {isEn ? 'Saudi society • place • history • responsible citizenship' : 'المجتمع السعودي • المكان • التاريخ • المواطنة المسؤولة'}
            </text>
          </svg>
        );
      }

      case 'health_science': {
        const steps = (diagram.visualSteps || []).slice(0, 4);
        const visualId = diagram.id.replace(/[^a-zA-Z0-9_-]/g, '-');
        const colors = ['#fb7185', '#2dd4bf', '#fbbf24', '#60a5fa'];
        return (
          <svg
            viewBox="0 0 780 240"
            className="scientific-svg health-science-svg"
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${visualId}-background`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#251b2b" />
                <stop offset="100%" stopColor="#172b35" />
              </linearGradient>
            </defs>
            <rect width="780" height="240" rx="16" fill={`url(#${visualId}-background)`} />
            {steps.map((step, index) => {
              const visualIndex = isEn ? index : steps.length - index - 1;
              const x = 22 + visualIndex * 190;
              const color = colors[index % colors.length];
              const label = isEn ? step.labelEn : step.labelAr;
              const lines: string[] = [];
              label.split(' ').forEach((word) => {
                const lastLine = lines.length - 1;
                if (lastLine < 0 || `${lines[lastLine]} ${word}`.length > 18) {
                  lines.push(word);
                } else {
                  lines[lastLine] = `${lines[lastLine]} ${word}`;
                }
              });
              return (
                <g key={`${label}-${index}`}>
                  <rect x={x} y="38" width="166" height="164" rx="16" fill="#111827" stroke={color} strokeWidth="2" />
                  <circle cx={x + 83} cy="82" r="25" fill={color} opacity="0.2" />
                  <path
                    d={`M ${x + 78} 68 h 10 v 9 h 9 v 10 h -9 v 9 h -10 v -9 h -9 v -10 h 9 z`}
                    fill={color}
                  />
                  <text
                    x={x + 83}
                    y="132"
                    textAnchor="middle"
                    direction={isEn ? 'ltr' : 'rtl'}
                    unicodeBidi="plaintext"
                    fill="#f8fafc"
                    fontSize="13"
                    fontWeight="700"
                  >
                    {lines.slice(0, 2).map((line, lineIndex) => (
                      <tspan key={`${line}-${lineIndex}`} x={x + 83} dy={lineIndex === 0 ? 0 : 18}>{line}</tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </svg>
        );
      }

      case 'electric_field':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="posGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
              </radialGradient>
              <radialGradient id="negGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </radialGradient>
              <marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171" />
              </marker>
              <marker id="arrowCyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Background Grid */}
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
            </pattern>
            <rect width="600" height="320" fill="url(#grid)" />

            {/* Electric Field Lines between +Q and -Q Dipole */}
            {/* Center Line */}
            <path d="M 210 160 L 390 160" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrowCyan)" />
            
            {/* Upper Arcs */}
            <path d="M 200 145 C 230 70, 370 70, 400 145" fill="none" stroke="#38bdf8" strokeWidth="2" markerMid="url(#arrowCyan)" />
            <path d="M 190 135 C 210 20, 390 20, 410 135" fill="none" stroke="#38bdf8" strokeWidth="1.8" />
            
            {/* Lower Arcs */}
            <path d="M 200 175 C 230 250, 370 250, 400 175" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 190 185 C 210 300, 390 300, 410 185" fill="none" stroke="#38bdf8" strokeWidth="1.8" />

            {/* Outgoing lines from +Q */}
            <path d="M 170 160 L 60 160" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrowRed)" />
            <path d="M 175 140 L 80 90" stroke="#f87171" strokeWidth="1.8" markerEnd="url(#arrowRed)" />
            <path d="M 175 180 L 80 230" stroke="#f87171" strokeWidth="1.8" markerEnd="url(#arrowRed)" />
            <path d="M 190 120 L 120 40" stroke="#f87171" strokeWidth="1.8" markerEnd="url(#arrowRed)" />
            <path d="M 190 200 L 120 280" stroke="#f87171" strokeWidth="1.8" markerEnd="url(#arrowRed)" />

            {/* Incoming lines to -Q */}
            <path d="M 540 160 L 430 160" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowCyan)" />
            <path d="M 520 90 L 425 140" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#arrowCyan)" />
            <path d="M 520 230 L 425 180" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#arrowCyan)" />
            <path d="M 480 40 L 410 120" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#arrowCyan)" />
            <path d="M 480 280 L 410 200" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#arrowCyan)" />

            {/* Positive Charge +q */}
            <circle cx="190" cy="160" r="28" fill="url(#posGlow)" stroke="#ef4444" strokeWidth="2.5" />
            <text x="190" y="167" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="900">+</text>
            <text x="190" y="210" textAnchor="middle" fill="#fca5a5" fontSize="13" fontWeight="bold">+q (شحنة موجبة)</text>

            {/* Negative Charge -q */}
            <circle cx="410" cy="160" r="28" fill="url(#negGlow)" stroke="#3b82f6" strokeWidth="2.5" />
            <text x="410" y="167" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="900">−</text>
            <text x="410" y="210" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="bold">-q (شحنة سالبة)</text>

            {/* Formula / Concept Callout */}
            <rect x="230" y="275" width="140" height="32" rx="8" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255, 255, 255, 0.2)" />
            <text x="300" y="296" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="900">E = k · |q| / r²</text>
          </svg>
        );

      case 'circuit':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Parallel-Plate Capacitor Model */}
            <defs>
              <linearGradient id="dielectricGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Left Positive Plate */}
            <rect x="180" y="50" width="18" height="220" rx="4" fill="#ef4444" stroke="#f87171" strokeWidth="2" />
            <text x="189" y="80" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">+</text>
            <text x="189" y="120" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">+</text>
            <text x="189" y="160" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">+</text>
            <text x="189" y="200" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">+</text>
            <text x="189" y="240" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">+</text>
            <text x="140" y="165" textAnchor="middle" fill="#fca5a5" fontSize="14" fontWeight="900">+Q</text>

            {/* Right Negative Plate */}
            <rect x="400" y="50" width="18" height="220" rx="4" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2" />
            <text x="409" y="80" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">−</text>
            <text x="409" y="120" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">−</text>
            <text x="409" y="160" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">−</text>
            <text x="409" y="200" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">−</text>
            <text x="409" y="240" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">−</text>
            <text x="450" y="165" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="900">-Q</text>

            {/* Dielectric Slab in Center */}
            <rect x="250" y="65" width="98" height="190" rx="8" fill="url(#dielectricGrad)" stroke="#c084fc" strokeWidth="2" strokeDasharray="4 4" />
            <text x="299" y="155" textAnchor="middle" fill="#e879f9" fontSize="14" fontWeight="bold">مادة عازلة (κ)</text>
            <text x="299" y="180" textAnchor="middle" fill="#cbd5e1" fontSize="12">Dielectric Slab</text>

            {/* Uniform E-field arrows */}
            <path d="M 205 90 L 390 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowCyan)" />
            <path d="M 205 130 L 245 130" stroke="#38bdf8" strokeWidth="1.8" />
            <path d="M 355 130 L 390 130" stroke="#38bdf8" strokeWidth="1.8" />
            <path d="M 205 190 L 245 190" stroke="#38bdf8" strokeWidth="1.8" />
            <path d="M 355 190 L 390 190" stroke="#38bdf8" strokeWidth="1.8" />
            <path d="M 205 230 L 390 230" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowCyan)" />

            {/* Distance d label */}
            <line x1="200" y1="285" x2="398" y2="285" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M 200 280 L 200 290 M 398 280 L 398 290" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="300" y="302" textAnchor="middle" fill="#94a3b8" fontSize="13">المسافة بين اللوحين (d)</text>

            {/* Capacitance Equation Badge */}
            <rect x="210" y="10" width="180" height="30" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#a855f7" strokeWidth="1.5" />
            <text x="300" y="30" textAnchor="middle" fill="#f0abfc" fontSize="13" fontWeight="900">C = κ · ε₀ · (A / d)</text>
          </svg>
        );

      case 'vector_3d':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Magnetic Force & Right Hand Rule 3D Diagram */}
            {/* Coordinate axes */}
            <line x1="300" y1="160" x2="480" y2="160" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="300" y1="160" x2="300" y2="40" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="300" y1="160" x2="180" y2="250" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />

            {/* Vector Velocity v (Green) */}
            <line x1="300" y1="160" x2="470" y2="130" stroke="#10b981" strokeWidth="4" markerEnd="url(#arrowCyan)" />
            <text x="495" y="135" fill="#34d399" fontSize="16" fontWeight="900">v⃗ (السرعة)</text>

            {/* Vector Magnetic Field B (Blue) */}
            <line x1="300" y1="160" x2="200" y2="240" stroke="#3b82f6" strokeWidth="4" />
            <text x="170" y="265" fill="#60a5fa" fontSize="16" fontWeight="900">B⃗ (المجال المغناطيسي)</text>

            {/* Vector Magnetic Force F (Red - Upward) */}
            <line x1="300" y1="160" x2="300" y2="45" stroke="#ef4444" strokeWidth="4.5" />
            <text x="300" y="30" textAnchor="middle" fill="#f87171" fontSize="18" fontWeight="900">F⃗_B (القوة المغناطيسية)</text>

            {/* Right angle arc */}
            <path d="M 300 135 L 325 135 L 325 160" fill="none" stroke="#fbbf24" strokeWidth="2" />

            {/* Charged Particle in center */}
            <circle cx="300" cy="160" r="14" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
            <text x="300" y="165" textAnchor="middle" fill="#000" fontSize="12" fontWeight="900">+q</text>

            {/* Hand Rule Callout */}
            <rect x="50" y="60" width="180" height="95" rx="12" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255, 255, 255, 0.15)" />
            <text x="140" y="85" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="bold">قاعدة اليد اليمنى ✋</text>
            <text x="140" y="105" textAnchor="middle" fill="#cbd5e1" fontSize="11">• الإبهام يشير إلى السرعة v⃗</text>
            <text x="140" y="125" textAnchor="middle" fill="#cbd5e1" fontSize="11">• الأصابع تشير إلى المجال B⃗</text>
            <text x="140" y="145" textAnchor="middle" fill="#fca5a5" fontSize="11">• باطن الكف يشير إلى القوة F⃗</text>
          </svg>
        );

      case 'pv_carnot':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* p-V Diagram for Carnot Cycle */}
            {/* Axes */}
            <line x1="100" y1="270" x2="520" y2="270" stroke="#94a3b8" strokeWidth="2.5" />
            <text x="540" y="275" fill="#fff" fontSize="15" fontWeight="bold">الحجم (V)</text>
            <line x1="100" y1="270" x2="100" y2="40" stroke="#94a3b8" strokeWidth="2.5" />
            <text x="90" y="30" fill="#fff" fontSize="15" fontWeight="bold">الضغط (P)</text>

            {/* Carnot Closed Loop */}
            {/* 1 -> 2: Isothermal Expansion (High Temp TH) */}
            <path d="M 170 80 Q 240 100, 310 130" stroke="#ef4444" strokeWidth="3.5" fill="none" />
            <circle cx="170" cy="80" r="5" fill="#ef4444" />
            <text x="155" y="75" fill="#fca5a5" fontSize="14" fontWeight="bold">1</text>
            <text x="240" y="95" fill="#ef4444" fontSize="12" fontWeight="bold">تمدد أيزوثيرمي (Q_H)</text>

            {/* 2 -> 3: Adiabatic Expansion */}
            <path d="M 310 130 Q 370 190, 420 230" stroke="#3b82f6" strokeWidth="3" fill="none" />
            <circle cx="310" cy="130" r="5" fill="#ef4444" />
            <text x="325" y="125" fill="#fca5a5" fontSize="14" fontWeight="bold">2</text>
            <text x="385" y="175" fill="#60a5fa" fontSize="12" fontWeight="bold">تمدد أديباتي</text>

            {/* 3 -> 4: Isothermal Compression (Low Temp TC) */}
            <path d="M 420 230 Q 340 220, 260 200" stroke="#06b6d4" strokeWidth="3.5" fill="none" />
            <circle cx="420" cy="230" r="5" fill="#06b6d4" />
            <text x="435" y="240" fill="#67e8f9" fontSize="14" fontWeight="bold">3</text>
            <text x="340" y="240" fill="#06b6d4" fontSize="12" fontWeight="bold">انضغاط أيزوثيرمي (Q_C)</text>

            {/* 4 -> 1: Adiabatic Compression */}
            <path d="M 260 200 Q 200 130, 170 80" stroke="#8b5cf6" strokeWidth="3" fill="none" />
            <circle cx="260" cy="200" r="5" fill="#8b5cf6" />
            <text x="245" y="215" fill="#c4b5fd" fontSize="14" fontWeight="bold">4</text>
            <text x="180" y="160" fill="#a78bfa" fontSize="12" fontWeight="bold">انضغاط أديباتي</text>

            {/* Enclosed Work Area Shade */}
            <path d="M 170 80 Q 240 100, 310 130 Q 370 190, 420 230 Q 340 220, 260 200 Q 200 130, 170 80 Z" fill="rgba(245, 158, 11, 0.18)" />
            <text x="285" y="165" textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="900">الشغل الصافي (W_net)</text>

            {/* Efficiency Box */}
            <rect x="360" y="50" width="190" height="40" rx="8" fill="rgba(15, 23, 42, 0.85)" stroke="#fbbf24" />
            <text x="455" y="75" textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="900">η = 1 − (T_C / T_H)</text>
          </svg>
        );

      case 'faraday_induction':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Faraday's Induction & Transformer Model */}
            {/* Iron Core (Square loop) */}
            <rect x="160" y="60" width="280" height="190" rx="16" fill="none" stroke="#475569" strokeWidth="32" />
            <text x="300" y="160" textAnchor="middle" fill="#94a3b8" fontSize="14" fontWeight="bold">قلب حديدي مغلق (Iron Core)</text>

            {/* Primary Coil (Left - Red) */}
            <path d="M 144 85 C 120 85, 120 115, 144 115" stroke="#ef4444" strokeWidth="6" fill="none" />
            <path d="M 144 115 C 120 115, 120 145, 144 145" stroke="#ef4444" strokeWidth="6" fill="none" />
            <path d="M 144 145 C 120 145, 120 175, 144 175" stroke="#ef4444" strokeWidth="6" fill="none" />
            <path d="M 144 175 C 120 175, 120 205, 144 205" stroke="#ef4444" strokeWidth="6" fill="none" />
            <text x="80" y="145" textAnchor="middle" fill="#fca5a5" fontSize="13" fontWeight="900">الملف الابتدائي (N_p)</text>
            <text x="80" y="165" textAnchor="middle" fill="#cbd5e1" fontSize="11">جهد الدخل V_p</text>

            {/* Secondary Coil (Right - Cyan) */}
            <path d="M 456 75 C 480 75, 480 95, 456 95" stroke="#06b6d4" strokeWidth="5" fill="none" />
            <path d="M 456 95 C 480 95, 480 115, 456 115" stroke="#06b6d4" strokeWidth="5" fill="none" />
            <path d="M 456 115 C 480 115, 480 135, 456 135" stroke="#06b6d4" strokeWidth="5" fill="none" />
            <path d="M 456 135 C 480 135, 480 155, 456 155" stroke="#06b6d4" strokeWidth="5" fill="none" />
            <path d="M 456 155 C 480 155, 480 175, 456 175" stroke="#06b6d4" strokeWidth="5" fill="none" />
            <path d="M 456 175 C 480 175, 480 195, 456 195" stroke="#06b6d4" strokeWidth="5" fill="none" />
            <path d="M 456 195 C 480 195, 480 215, 456 215" stroke="#06b6d4" strokeWidth="5" fill="none" />
            <text x="520" y="145" textAnchor="middle" fill="#67e8f9" fontSize="13" fontWeight="900">الملف الثانوي (N_s)</text>
            <text x="520" y="165" textAnchor="middle" fill="#cbd5e1" fontSize="11">جهد الخرج V_s</text>

            {/* Magnetic Flux Path (Yellow Dashed) */}
            <rect x="180" y="80" width="240" height="150" rx="8" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="6 6" />
            <text x="300" y="95" textAnchor="middle" fill="#fde68a" fontSize="12">تدفق مغناطيسي متبادل (Φ_B)</text>

            {/* Transformer Law Box */}
            <rect x="200" y="275" width="200" height="34" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#06b6d4" strokeWidth="1.5" />
            <text x="300" y="297" textAnchor="middle" fill="#67e8f9" fontSize="14" fontWeight="900">V_s / V_p = N_s / N_p</text>
          </svg>
        );

      case 'calculus_integral':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Definite Integral Area Under Curve */}
            {/* Axes */}
            <line x1="80" y1="260" x2="520" y2="260" stroke="#94a3b8" strokeWidth="2.5" />
            <text x="535" y="265" fill="#fff" fontSize="14" fontWeight="bold">x</text>
            <line x1="100" y1="280" x2="100" y2="40" stroke="#94a3b8" strokeWidth="2.5" />
            <text x="95" y="30" fill="#fff" fontSize="14" fontWeight="bold">y = f(x)</text>

            {/* Curve function */}
            <path d="M 120 230 C 200 60, 360 90, 480 200" fill="none" stroke="#38bdf8" strokeWidth="4" />

            {/* Shaded Area between a and b */}
            <path d="M 180 260 L 180 155 C 230 100, 340 105, 410 162 L 410 260 Z" fill="rgba(56, 189, 248, 0.25)" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />

            {/* Riemann Sample Strip dx */}
            <rect x="270" y="105" width="24" height="155" fill="rgba(245, 158, 11, 0.35)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="282" y="245" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold">dx</text>

            {/* Boundaries a and b */}
            <line x1="180" y1="260" x2="180" y2="155" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
            <text x="180" y="280" textAnchor="middle" fill="#fca5a5" fontSize="15" fontWeight="900">a</text>

            <line x1="410" y1="260" x2="410" y2="162" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
            <text x="410" y="280" textAnchor="middle" fill="#fca5a5" fontSize="15" fontWeight="900">b</text>

            {/* Area Label Callout */}
            <rect x="230" y="150" width="120" height="35" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#38bdf8" />
            <text x="290" y="172" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="900">A = ∫ₐᵇ f(x) dx</text>
          </svg>
        );

      case 'derivative_slope':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Tangent Line & Derivative Slope */}
            {/* Axes */}
            <line x1="80" y1="260" x2="520" y2="260" stroke="#94a3b8" strokeWidth="2.5" />
            <line x1="100" y1="280" x2="100" y2="40" stroke="#94a3b8" strokeWidth="2.5" />

            {/* Parabola Curve */}
            <path d="M 120 240 Q 280 200, 460 50" fill="none" stroke="#a855f7" strokeWidth="4" />
            <text x="475" y="55" fill="#c084fc" fontSize="14" fontWeight="bold">f(x)</text>

            {/* Tangent Line at point P */}
            <line x1="160" y1="250" x2="440" y2="70" stroke="#ef4444" strokeWidth="3" />
            <text x="445" y="85" fill="#f87171" fontSize="13" fontWeight="bold">مماس المنحنى (Tangent)</text>

            {/* Point of tangency P(x0, f(x0)) */}
            <circle cx="300" cy="160" r="7" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
            <text x="320" y="165" fill="#fbbf24" fontSize="14" fontWeight="bold">P(x₀, f(x₀))</text>

            {/* Slope Triangle */}
            <line x1="240" y1="198" x2="360" y2="198" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
            <text x="300" y="215" textAnchor="middle" fill="#38bdf8" fontSize="12">Δx → 0</text>
            <line x1="360" y1="198" x2="360" y2="122" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
            <text x="385" y="160" fill="#38bdf8" fontSize="12">Δy</text>

            {/* Limit Definition Formula */}
            <rect x="180" y="20" width="240" height="35" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#ef4444" strokeWidth="1.5" />
            <text x="300" y="42" textAnchor="middle" fill="#fca5a5" fontSize="13" fontWeight="900">m = f'(x) = lim(h→0) [f(x+h) − f(x)] / h</text>
          </svg>
        );

      case 'discontinuity_graph':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Coordinate Axes */}
            <line x1="60" y1="260" x2="540" y2="260" stroke="#94a3b8" strokeWidth="2" />
            <text x="550" y="265" fill="#fff" fontSize="13" fontWeight="bold">x</text>
            <line x1="80" y1="280" x2="80" y2="30" stroke="#94a3b8" strokeWidth="2" />
            <text x="75" y="25" fill="#fff" fontSize="13" fontWeight="bold">y</text>

            {/* 1. Removable Discontinuity at x = 2 */}
            <path d="M 80 220 Q 130 180, 180 140" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <path d="M 180 140 Q 210 120, 240 100" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <circle cx="180" cy="140" r="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
            <text x="180" y="280" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">x = a (فجوة نقطية)</text>
            <text x="180" y="115" textAnchor="middle" fill="#38bdf8" fontSize="11">عدم اتصال قابل للإزالة</text>

            {/* 2. Jump Discontinuity at x = 4 */}
            <line x1="280" y1="200" x2="360" y2="170" stroke="#10b981" strokeWidth="3" />
            <circle cx="360" cy="170" r="5" fill="#10b981" />
            <line x1="360" y1="100" x2="440" y2="70" stroke="#10b981" strokeWidth="3" />
            <circle cx="360" cy="100" r="5" fill="#0f172a" stroke="#10b981" strokeWidth="3" />
            <line x1="360" y1="170" x2="360" y2="100" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="360" y="280" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="bold">x = b (قفزة)</text>
            <text x="360" y="55" textAnchor="middle" fill="#10b981" fontSize="11">عدم اتصال قفزي</text>

            {/* 3. Infinite Asymptote at x = c */}
            <line x1="480" y1="30" x2="480" y2="270" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 450 240 Q 470 200, 475 50" stroke="#f87171" strokeWidth="3" fill="none" />
            <path d="M 485 270 Q 490 120, 530 100" stroke="#f87171" strokeWidth="3" fill="none" />
            <text x="480" y="295" textAnchor="middle" fill="#f87171" fontSize="12" fontWeight="bold">خط تقارب رأسي</text>
          </svg>
        );

      case 'unit_circle_trig':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Unit Circle Trigonometry */}
            <circle cx="300" cy="160" r="110" fill="rgba(56, 189, 248, 0.05)" stroke="#38bdf8" strokeWidth="2.5" />
            
            {/* Coordinate Axes */}
            <line x1="150" y1="160" x2="450" y2="160" stroke="#94a3b8" strokeWidth="2" />
            <text x="465" y="165" fill="#fff" fontSize="14" fontWeight="bold">x (cos θ)</text>
            <line x1="300" y1="280" x2="300" y2="40" stroke="#94a3b8" strokeWidth="2" />
            <text x="300" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">y (sin θ)</text>

            {/* Radius vector to (cos θ, sin θ) at 45 deg (pi/4) */}
            <line x1="300" y1="160" x2="378" y2="82" stroke="#ef4444" strokeWidth="3" />
            <circle cx="378" cy="82" r="6" fill="#fbbf24" stroke="#fff" strokeWidth="1.5" />
            <text x="390" y="75" fill="#fbbf24" fontSize="13" fontWeight="bold">P(cos θ, sin θ)</text>

            {/* Triangle components */}
            <line x1="300" y1="160" x2="378" y2="160" stroke="#10b981" strokeWidth="2.5" />
            <text x="339" y="180" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">cos θ</text>
            <line x1="378" y1="160" x2="378" y2="82" stroke="#60a5fa" strokeWidth="2.5" strokeDasharray="3 3" />
            <text x="395" y="125" fill="#93c5fd" fontSize="12" fontWeight="bold">sin θ</text>

            {/* Angle arc θ */}
            <path d="M 335 160 A 35 35 0 0 0 325 135" fill="none" stroke="#fbbf24" strokeWidth="2" />
            <text x="340" y="145" fill="#fbbf24" fontSize="12" fontWeight="bold">θ</text>

            {/* Pythagorean Identity Box */}
            <rect x="50" y="60" width="170" height="40" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#38bdf8" />
            <text x="135" y="85" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="900">sin²θ + cos²θ = 1</text>
          </svg>
        );

      case 'solid_revolution':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Volume of Revolution: Disk Method 3D Cylinder Slices */}
            <line x1="80" y1="160" x2="520" y2="160" stroke="#94a3b8" strokeWidth="2.5" />
            <text x="535" y="165" fill="#fff" fontSize="14" fontWeight="bold">x</text>
            <line x1="120" y1="280" x2="120" y2="40" stroke="#94a3b8" strokeWidth="2" />
            <text x="120" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">y = f(x)</text>

            {/* Parabolic Profile Top & Bottom Reflection */}
            <path d="M 160 160 Q 300 60, 440 40" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <path d="M 160 160 Q 300 260, 440 280" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" fill="none" />

            {/* 3D Circular Revolution Rings */}
            <ellipse cx="440" cy="160" rx="20" ry="120" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="2.5" />
            <ellipse cx="320" cy="160" rx="16" ry="85" fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" strokeWidth="2" />
            <ellipse cx="336" cy="160" rx="16" ry="85" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Sample Disk Slice Callout */}
            <line x1="320" y1="160" x2="320" y2="75" stroke="#ef4444" strokeWidth="2.5" />
            <text x="330" y="120" fill="#fca5a5" fontSize="12" fontWeight="bold">نصف القطر r = f(x)</text>
            <text x="328" y="260" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold">شريحة أسطوانية (dx)</text>

            {/* Rotation Arrow */}
            <path d="M 480 140 A 25 25 0 1 1 480 180" fill="none" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowRed)" />
            <text x="515" y="165" fill="#fbbf24" fontSize="11" fontWeight="bold">دوران 360°</text>

            {/* Disk Formula Box */}
            <rect x="180" y="15" width="240" height="35" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#0284c7" />
            <text x="300" y="38" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="900">V = π ∫ₐᵇ [f(x)]² dx</text>
          </svg>
        );

      case 'chemistry_mixtures_solutions':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <text x="300" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontWeight="bold">المخاليط والمحاليل</text>
            <rect x="55" y="82" width="215" height="180" rx="14" fill="rgba(30,41,59,.72)" stroke="#38bdf8" strokeWidth="2" />
            <text x="162" y="112" textAnchor="middle" fill="#7dd3fc" fontSize="15" fontWeight="bold">مخلوط غير متجانس</text>
            <circle cx="110" cy="164" r="18" fill="#f59e0b" /><circle cx="185" cy="178" r="24" fill="#a78bfa" />
            <circle cx="135" cy="224" r="12" fill="#34d399" /><circle cx="225" cy="132" r="10" fill="#fb7185" />
            <text x="162" y="250" textAnchor="middle" fill="#cbd5e1" fontSize="12">مكونات متميزة</text>
            <text x="300" y="185" textAnchor="middle" fill="#fbbf24" fontSize="27">→</text>
            <rect x="330" y="82" width="215" height="180" rx="14" fill="rgba(30,41,59,.72)" stroke="#34d399" strokeWidth="2" />
            <text x="437" y="112" textAnchor="middle" fill="#6ee7b7" fontSize="15" fontWeight="bold">محلول متجانس</text>
            <circle cx="375" cy="150" r="7" fill="#f59e0b" /><circle cx="425" cy="150" r="7" fill="#38bdf8" />
            <circle cx="475" cy="150" r="7" fill="#f59e0b" /><circle cx="515" cy="150" r="7" fill="#38bdf8" />
            <circle cx="395" cy="190" r="7" fill="#38bdf8" /><circle cx="450" cy="190" r="7" fill="#f59e0b" />
            <circle cx="500" cy="190" r="7" fill="#38bdf8" /><circle cx="375" cy="225" r="7" fill="#f59e0b" />
            <circle cx="425" cy="225" r="7" fill="#38bdf8" /><circle cx="475" cy="225" r="7" fill="#f59e0b" />
            <text x="437" y="250" textAnchor="middle" fill="#cbd5e1" fontSize="12">جسيمات موزعة بانتظام</text>
          </svg>
        );

      case 'chemistry_acid_base':
        if (isNeutralization) {
          return (
            <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
              <text x="300" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontWeight="bold">التعادل الأيوني</text>
              <rect x="55" y="102" width="190" height="100" rx="18" fill="rgba(127,29,29,.35)" stroke="#fb7185" strokeWidth="2" />
              <text x="150" y="145" textAnchor="middle" fill="#fda4af" fontSize="19" fontWeight="bold">H₃O⁺</text>
              <text x="150" y="175" textAnchor="middle" fill="#cbd5e1" fontSize="13">من الحمض</text>
              <text x="300" y="160" textAnchor="middle" fill="#fbbf24" fontSize="25">+</text>
              <rect x="355" y="102" width="190" height="100" rx="18" fill="rgba(30,64,175,.32)" stroke="#60a5fa" strokeWidth="2" />
              <text x="450" y="145" textAnchor="middle" fill="#93c5fd" fontSize="19" fontWeight="bold">OH⁻</text>
              <text x="450" y="175" textAnchor="middle" fill="#cbd5e1" fontSize="13">من القاعدة</text>
              <text x="300" y="248" textAnchor="middle" fill="#6ee7b7" fontSize="19" fontWeight="bold">H₃O⁺ + OH⁻ → 2H₂O</text>
              <text x="300" y="280" textAnchor="middle" fill="#cbd5e1" fontSize="13">وتبقى الأيونات الأخرى لتكوين الملح</text>
            </svg>
          );
        }
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <text x="300" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontWeight="bold">مقياس الرقم الهيدروجيني</text>
            <rect x="70" y="96" width="153" height="44" rx="18" fill="#e11d48" />
            <rect x="223" y="96" width="154" height="44" fill="#65a30d" />
            <rect x="377" y="96" width="153" height="44" rx="18" fill="#0284c7" />
            <line x1="300" y1="85" x2="300" y2="158" stroke="#fff" strokeWidth="3" />
            <text x="300" y="182" textAnchor="middle" fill="#fef08a" fontSize="16" fontWeight="bold">7</text>
            <text x="70" y="81" textAnchor="middle" fill="#fda4af" fontSize="14">0</text>
            <text x="530" y="81" textAnchor="middle" fill="#7dd3fc" fontSize="14">14</text>
            <text x="170" y="225" textAnchor="middle" fill="#fda4af" fontSize="15" fontWeight="bold">حمضي</text>
            <text x="300" y="225" textAnchor="middle" fill="#bef264" fontSize="15" fontWeight="bold">متعادل</text>
            <text x="430" y="225" textAnchor="middle" fill="#7dd3fc" fontSize="15" fontWeight="bold">قاعدي</text>
            <text x="170" y="256" textAnchor="middle" fill="#cbd5e1" fontSize="12">H₃O⁺ أكبر نسبيًا</text>
            <text x="430" y="256" textAnchor="middle" fill="#cbd5e1" fontSize="12">OH⁻ أكبر نسبيًا</text>
            <text x="300" y="292" textAnchor="middle" fill="#94a3b8" fontSize="12">انخفاض pH يعني زيادة حمضية المحلول المائي</text>
          </svg>
        );

      case 'chemistry_redox':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <text x="300" y="40" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontWeight="bold">انتقال الإلكترونات في تفاعل أكسدة واختزال</text>
            <rect x="55" y="90" width="205" height="140" rx="16" fill="rgba(127,29,29,.35)" stroke="#fb7185" strokeWidth="2" />
            <text x="157" y="125" textAnchor="middle" fill="#fda4af" fontSize="18" fontWeight="bold">Zn → Zn²⁺ + 2e⁻</text>
            <text x="157" y="166" textAnchor="middle" fill="#fecdd3" fontSize="16">أكسدة: فقد إلكترونات</text>
            <text x="157" y="198" textAnchor="middle" fill="#cbd5e1" fontSize="13">يرتفع عدد التأكسد</text>
            <text x="300" y="157" textAnchor="middle" fill="#fbbf24" fontSize="24">2e⁻ →</text>
            <rect x="340" y="90" width="205" height="140" rx="16" fill="rgba(30,64,175,.32)" stroke="#60a5fa" strokeWidth="2" />
            <text x="442" y="125" textAnchor="middle" fill="#93c5fd" fontSize="18" fontWeight="bold">Cu²⁺ + 2e⁻ → Cu</text>
            <text x="442" y="166" textAnchor="middle" fill="#bfdbfe" fontSize="16">اختزال: اكتساب إلكترونات</text>
            <text x="442" y="198" textAnchor="middle" fill="#cbd5e1" fontSize="13">ينخفض عدد التأكسد</text>
            <text x="300" y="274" textAnchor="middle" fill="#e2e8f0" fontSize="15">الأكسدة والاختزال عمليتان متلازمتان</text>
          </svg>
        );

      case 'chemistry_electrochemistry':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <text x="300" y="34" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontWeight="bold">مخطط خلية كهروكيميائية</text>
            <path d="M145 98 H455 V218 H145 Z" fill="rgba(30,41,59,.55)" stroke="#94a3b8" strokeWidth="2" />
            <path d="M300 130 C280 155 320 180 300 205" fill="none" stroke="#fbbf24" strokeWidth="12" strokeLinecap="round" />
            <text x="300" y="232" textAnchor="middle" fill="#fde68a" fontSize="12">جسر ملحي</text>
            <line x1="205" y1="90" x2="205" y2="183" stroke="#fb7185" strokeWidth="8" />
            <line x1="395" y1="90" x2="395" y2="183" stroke="#60a5fa" strokeWidth="8" />
            <path d="M205 90 V64 H395 V90" fill="none" stroke="#34d399" strokeWidth="3" />
            <text x="300" y="59" textAnchor="middle" fill="#6ee7b7" fontSize="13">{isElectrolysis ? 'مصدر طاقة خارجي' : 'مسار الإلكترونات →'}</text>
            <text x="205" y="202" textAnchor="middle" fill="#fda4af" fontSize="14" fontWeight="bold">المصعد</text>
            <text x="205" y="251" textAnchor="middle" fill="#fecdd3" fontSize="12">أكسدة</text>
            <text x="395" y="202" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="bold">المهبط</text>
            <text x="395" y="251" textAnchor="middle" fill="#bfdbfe" fontSize="12">اختزال</text>
            <text x="300" y="290" textAnchor="middle" fill="#cbd5e1" fontSize="12">
              {isElectrolysis ? 'التحليل الكهربائي يدفع تفاعلًا غير تلقائي' : 'تفاعل أكسدة واختزال يحول الطاقة الكيميائية إلى كهربائية'}
            </text>
          </svg>
        );

      case 'chemical_kinetics':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Reaction Coordinate & Activation Energy */}
            <line x1="80" y1="270" x2="520" y2="270" stroke="#94a3b8" strokeWidth="2" />
            <text x="300" y="295" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">سير التفاعل (Reaction Coordinate)</text>
            <line x1="90" y1="280" x2="90" y2="40" stroke="#94a3b8" strokeWidth="2" />
            <text x="85" y="30" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">طاقة الوضع (kJ/mol)</text>

            {/* Reactants plateau */}
            <line x1="90" y1="200" x2="160" y2="200" stroke="#60a5fa" strokeWidth="3" />
            <text x="125" y="190" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="bold">المتفاعلات</text>

            {/* Uncatalyzed Energy Peak (Red) */}
            <path d="M 160 200 C 240 20, 280 20, 360 230" stroke="#ef4444" strokeWidth="3.5" fill="none" />
            <circle cx="250" cy="55" r="6" fill="#ef4444" />
            <text x="250" y="45" textAnchor="middle" fill="#fca5a5" fontSize="12" fontWeight="bold">المعقد المنشط (بدون محفز)</text>

            {/* Catalyzed Energy Peak (Green) */}
            <path d="M 160 200 C 240 100, 280 100, 360 230" stroke="#10b981" strokeWidth="3" strokeDasharray="5 5" fill="none" />
            <circle cx="250" cy="120" r="5" fill="#10b981" />
            <text x="250" y="140" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">طاقة التنشيط مع المحفز</text>

            {/* Products plateau */}
            <line x1="360" y1="230" x2="480" y2="230" stroke="#a855f7" strokeWidth="3" />
            <text x="420" y="220" textAnchor="middle" fill="#c084fc" fontSize="13" fontWeight="bold">النواتج</text>

            {/* Enthalpy delta H */}
            <line x1="470" y1="200" x2="470" y2="230" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowRed)" />
            <text x="515" y="218" fill="#fbbf24" fontSize="12" fontWeight="bold">ΔH (طارد)</text>
          </svg>
        );

      case 'dna_cell_biology':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* DNA Double Helix Structure */}
            {/* Strand 1 Sine wave (Cyan) */}
            <path d="M 80 160 Q 140 60, 200 160 T 320 160 T 440 160 T 540 160" fill="none" stroke="#38bdf8" strokeWidth="4" />
            {/* Strand 2 Cosine wave (Purple) */}
            <path d="M 80 160 Q 140 260, 200 160 T 320 160 T 440 160 T 540 160" fill="none" stroke="#a855f7" strokeWidth="4" />

            {/* Hydrogen Bonds / Base Pairs */}
            <line x1="140" y1="85" x2="140" y2="235" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 2" />
            <text x="140" y="150" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold">A = T</text>

            <line x1="260" y1="85" x2="260" y2="235" stroke="#10b981" strokeWidth="3" strokeDasharray="4 2" />
            <text x="260" y="150" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">G ≡ C</text>

            <line x1="380" y1="85" x2="380" y2="235" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 2" />
            <text x="380" y="150" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold">T = A</text>

            <line x1="500" y1="85" x2="500" y2="235" stroke="#10b981" strokeWidth="3" strokeDasharray="4 2" />
            <text x="500" y="150" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">C ≡ G</text>

            {/* Labels Header */}
            <rect x="170" y="20" width="260" height="35" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#a855f7" />
            <text x="300" y="42" textAnchor="middle" fill="#e879f9" fontSize="13" fontWeight="bold">اللولب المزدوج والقواعد النيتروجينية</text>
          </svg>
        );

      case 'binary_tree_cs':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Binary Search Tree (BST) Node Graph */}
            {/* Edges */}
            <line x1="300" y1="60" x2="200" y2="130" stroke="#64748b" strokeWidth="2.5" />
            <line x1="300" y1="60" x2="400" y2="130" stroke="#64748b" strokeWidth="2.5" />
            <line x1="200" y1="130" x2="140" y2="210" stroke="#64748b" strokeWidth="2.5" />
            <line x1="200" y1="130" x2="250" y2="210" stroke="#64748b" strokeWidth="2.5" />
            <line x1="400" y1="130" x2="350" y2="210" stroke="#64748b" strokeWidth="2.5" />
            <line x1="400" y1="130" x2="460" y2="210" stroke="#64748b" strokeWidth="2.5" />

            {/* Root Node (50) */}
            <circle cx="300" cy="60" r="22" fill="#0284c7" stroke="#38bdf8" strokeWidth="3" />
            <text x="300" y="66" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">50</text>
            <text x="300" y="25" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">الجذر (Root)</text>

            {/* Left Child (30) */}
            <circle cx="200" cy="130" r="18" fill="#10b981" stroke="#34d399" strokeWidth="2.5" />
            <text x="200" y="135" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">30</text>

            {/* Right Child (70) */}
            <circle cx="400" cy="130" r="18" fill="#10b981" stroke="#34d399" strokeWidth="2.5" />
            <text x="400" y="135" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">70</text>

            {/* Leaves */}
            <circle cx="140" cy="210" r="16" fill="#6366f1" stroke="#818cf8" strokeWidth="2" />
            <text x="140" y="215" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">20</text>

            <circle cx="250" cy="210" r="16" fill="#6366f1" stroke="#818cf8" strokeWidth="2" />
            <text x="250" y="215" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">40</text>

            <circle cx="350" cy="210" r="16" fill="#6366f1" stroke="#818cf8" strokeWidth="2" />
            <text x="350" y="215" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">60</text>

            <circle cx="460" cy="210" r="16" fill="#6366f1" stroke="#818cf8" strokeWidth="2" />
            <text x="460" y="215" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">80</text>

            {/* BST Rule callout */}
            <rect x="150" y="265" width="300" height="35" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#10b981" />
            <text x="300" y="287" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold">قاعدة BST: الأيسر &lt; الجذر &lt; الأيمن | O(log n)</text>
          </svg>
        );

      case 'primary_fractions':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Visual Fraction Models for Primary */}
            {/* 1. Half Fraction Circle */}
            <circle cx="160" cy="130" r="65" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
            <path d="M 160 65 A 65 65 0 0 1 160 195 Z" fill="#0284c7" />
            <text x="160" y="225" textAnchor="middle" fill="#38bdf8" fontSize="16" fontWeight="bold">النصف (1/2)</text>

            {/* 2. Quarter Fraction Circle (3/4 shaded) */}
            <circle cx="440" cy="130" r="65" fill="#1e293b" stroke="#10b981" strokeWidth="3" />
            <path d="M 440 65 A 65 65 0 1 1 375 130 L 440 130 Z" fill="#059669" />
            <text x="440" y="225" textAnchor="middle" fill="#34d399" fontSize="16" fontWeight="bold">ثلاثة أرباع (3/4)</text>

            {/* Fraction Bar Model in Bottom */}
            <rect x="100" y="255" width="400" height="40" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <rect x="100" y="255" width="100" height="40" rx="4" fill="#f59e0b" />
            <rect x="200" y="255" width="100" height="40" rx="4" fill="#fbbf24" opacity="0.8" />
            <rect x="300" y="255" width="100" height="40" rx="4" fill="#fde68a" opacity="0.6" />
            <text x="300" y="280" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">تمثيل الأجزاء المتساوية من الكل</text>
          </svg>
        );

      case 'primary_water_cycle':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Water Cycle Illustration */}
            {/* Sun */}
            <circle cx="100" cy="70" r="30" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3" />
            <text x="100" y="75" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">الشمس</text>

            {/* Clouds (Condensation) */}
            <ellipse cx="300" cy="70" rx="55" ry="25" fill="#cbd5e1" />
            <ellipse cx="340" cy="65" rx="40" ry="20" fill="#e2e8f0" />
            <text x="320" y="75" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">تكثف (سحب)</text>

            {/* Rain (Precipitation) */}
            <line x1="310" y1="105" x2="300" y2="140" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 4" />
            <line x1="330" y1="105" x2="320" y2="140" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 4" />
            <line x1="350" y1="105" x2="340" y2="140" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 4" />
            <text x="370" y="130" fill="#38bdf8" fontSize="12" fontWeight="bold">هطول الأمطار</text>

            {/* Mountain & Land */}
            <polygon points="400,280 500,120 600,280" fill="#475569" />
            <polygon points="470,120 500,120 520,150 460,150" fill="#e2e8f0" />

            {/* Ocean / Lake (Collection) */}
            <rect x="0" y="240" width="450" height="80" fill="#0284c7" />
            <text x="200" y="275" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">تجمع المياه (البحار والمحيطات)</text>

            {/* Evaporation Wavy Arrows */}
            <path d="M 170 230 C 160 190, 180 160, 170 120" fill="none" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowRed)" />
            <text x="130" y="170" fill="#fbbf24" fontSize="12" fontWeight="bold">تبخر ↑</text>
          </svg>
        );

      case 'islamic_pillars':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Islamic 5 Pillars Architecture */}
            {/* Dome on top */}
            <path d="M 200 110 Q 300 20, 400 110 Z" fill="#047857" stroke="#10b981" strokeWidth="3" />
            <circle cx="300" cy="30" r="8" fill="#fbbf24" />
            <text x="300" y="90" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">أركان الإسلام الخمسة</text>

            {/* 5 Pillars */}
            {/* Pillar 1: Shahada */}
            <rect x="70" y="110" width="70" height="150" rx="6" fill="#065f46" stroke="#34d399" strokeWidth="2" />
            <text x="105" y="180" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">الشهادتان</text>

            {/* Pillar 2: Salah */}
            <rect x="170" y="110" width="70" height="150" rx="6" fill="#065f46" stroke="#34d399" strokeWidth="2" />
            <text x="205" y="180" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">الصلاة</text>

            {/* Pillar 3: Zakat */}
            <rect x="270" y="110" width="70" height="150" rx="6" fill="#065f46" stroke="#34d399" strokeWidth="2" />
            <text x="305" y="180" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">الزكاة</text>

            {/* Pillar 4: Sawm */}
            <rect x="370" y="110" width="70" height="150" rx="6" fill="#065f46" stroke="#34d399" strokeWidth="2" />
            <text x="405" y="180" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">الصوم</text>

            {/* Pillar 5: Hajj */}
            <rect x="470" y="110" width="70" height="150" rx="6" fill="#065f46" stroke="#34d399" strokeWidth="2" />
            <text x="505" y="180" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">الحج</text>

            {/* Foundation Base */}
            <rect x="40" y="260" width="520" height="35" rx="8" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="300" y="283" textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="bold">بُني الإسلام على خمس — صدق رسول الله ﷺ</text>
          </svg>
        );

      case 'atomic_structure':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Bohr Atomic Model with Nucleus (Protons + Neutrons) and Electron Shells */}
            {/* Outer Electron Shell (Level 2) */}
            <circle cx="300" cy="160" r="120" fill="none" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="2" strokeDasharray="6 6" />
            {/* Inner Electron Shell (Level 1) */}
            <circle cx="300" cy="160" r="70" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="2" strokeDasharray="5 5" />

            {/* Central Nucleus */}
            <circle cx="300" cy="160" r="36" fill="rgba(15, 23, 42, 0.85)" stroke="#fbbf24" strokeWidth="2.5" />
            
            {/* Protons inside nucleus (Red +) */}
            <circle cx="288" cy="150" r="10" fill="#ef4444" />
            <text x="288" y="154" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">+</text>
            <circle cx="312" cy="152" r="10" fill="#ef4444" />
            <text x="312" y="156" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">+</text>
            <circle cx="295" cy="170" r="10" fill="#ef4444" />
            <text x="295" y="174" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">+</text>

            {/* Neutrons inside nucleus (Grey 0) */}
            <circle cx="305" cy="145" r="10" fill="#64748b" />
            <text x="305" y="149" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">n⁰</text>
            <circle cx="285" cy="165" r="10" fill="#64748b" />
            <text x="285" y="169" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">n⁰</text>
            <circle cx="312" cy="168" r="10" fill="#64748b" />
            <text x="312" y="172" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">n⁰</text>

            {/* Nucleus Label */}
            <text x="300" y="215" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="bold">النواة (بروتونات p⁺ و نيوترونات n⁰)</text>

            {/* Electrons in Inner Shell (Level 1, e⁻) */}
            <circle cx="300" cy="90" r="8" fill="#38bdf8" />
            <text x="300" y="94" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">−</text>
            <circle cx="300" cy="230" r="8" fill="#38bdf8" />
            <text x="300" y="234" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">−</text>

            {/* Electrons in Outer Shell (Level 2, e⁻) */}
            <circle cx="180" cy="160" r="8" fill="#38bdf8" />
            <text x="180" y="164" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">−</text>
            <circle cx="420" cy="160" r="8" fill="#38bdf8" />
            <text x="420" y="164" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">−</text>
            <circle cx="215" cy="75" r="8" fill="#38bdf8" />
            <text x="215" y="79" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">−</text>
            <circle cx="385" cy="245" r="8" fill="#38bdf8" />
            <text x="385" y="249" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">−</text>

            {/* Formula Callout */}
            <rect x="80" y="15" width="440" height="35" rx="10" fill="rgba(15, 23, 42, 0.9)" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="300" y="38" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="900">العدد الكتلي A = p⁺ + n⁰ | العدد الذري Z = p⁺</text>
          </svg>
        );

      case 'matter_states_compound':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* 3 Categories: Element vs Compound vs Mixture */}
            {/* 1. Element Box (Pure Identical Atoms) */}
            <rect x="40" y="50" width="160" height="210" rx="12" fill="rgba(15, 23, 42, 0.7)" stroke="#38bdf8" strokeWidth="2" />
            <text x="120" y="78" textAnchor="middle" fill="#38bdf8" fontSize="13.5" fontWeight="bold">عنصر نقي (Element)</text>
            {/* 6 identical blue atoms */}
            <circle cx="85" cy="120" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="155" cy="120" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="85" cy="165" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="155" cy="165" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="120" cy="210" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="120" y="245" textAnchor="middle" fill="#94a3b8" fontSize="12">ذرات متطابقة (نحاس Cu)</text>

            {/* 2. Compound Box (Chemically bonded H2O molecules) */}
            <rect x="220" y="50" width="160" height="210" rx="12" fill="rgba(15, 23, 42, 0.7)" stroke="#10b981" strokeWidth="2" />
            <text x="300" y="78" textAnchor="middle" fill="#34d399" fontSize="13.5" fontWeight="bold">مركب (Compound)</text>
            {/* Molecule 1 H2O */}
            <circle cx="300" cy="125" r="16" fill="#ef4444" />
            <circle cx="282" cy="142" r="10" fill="#cbd5e1" />
            <circle cx="318" cy="142" r="10" fill="#cbd5e1" />
            {/* Molecule 2 H2O */}
            <circle cx="300" cy="185" r="16" fill="#ef4444" />
            <circle cx="282" cy="202" r="10" fill="#cbd5e1" />
            <circle cx="318" cy="202" r="10" fill="#cbd5e1" />
            <text x="300" y="245" textAnchor="middle" fill="#94a3b8" fontSize="12">نسب ثابتة وروابط (الماء H₂O)</text>

            {/* 3. Mixture Box (Physical blend) */}
            <rect x="400" y="50" width="160" height="210" rx="12" fill="rgba(15, 23, 42, 0.7)" stroke="#f59e0b" strokeWidth="2" />
            <text x="480" y="78" textAnchor="middle" fill="#fbbf24" fontSize="13.5" fontWeight="bold">مخلوط (Mixture)</text>
            {/* Mixed particles without bonding */}
            <circle cx="445" cy="120" r="12" fill="#0284c7" />
            <rect x="495" y="110" width="20" height="20" rx="4" fill="#a855f7" />
            <circle cx="475" cy="155" r="14" fill="#ef4444" />
            <polygon points="440,195 455,165 425,165" fill="#10b981" />
            <circle cx="515" cy="180" r="12" fill="#fbbf24" />
            <text x="480" y="245" textAnchor="middle" fill="#94a3b8" fontSize="12">خلط فيزيائي يمكن فصله</text>

            {/* Footer Summary - Generous width pill with perfect text margins */}
            <rect x="25" y="274" width="550" height="36" rx="18" fill="rgba(15, 23, 42, 0.9)" stroke="#64748b" strokeWidth="1.5" />
            <text x="300" y="297" textAnchor="middle" fill="#cbd5e1" fontSize="12.5" fontWeight="bold">المركب يتحد كيميائياً بنسب ثابتة، بينما المخلوط يُفصل بطرق فيزيائية</text>
          </svg>
        );

      case 'arabic_parts_of_speech':
        return (
          <svg viewBox="0 0 600 340" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="arabicHeaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <rect width="600" height="340" fill="rgba(15, 23, 42, 0.95)" rx="16" />

            {/* Top Root Node: الكلمة في اللغة العربية */}
            <rect x="200" y="15" width="200" height="42" rx="10" fill="url(#arabicHeaderGrad)" stroke="#a78bfa" strokeWidth="2" />
            <text x="300" y="42" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">أقسام الكلمة في اللغة العربية</text>

            {/* Connecting Lines */}
            <line x1="300" y1="57" x2="300" y2="75" stroke="#a78bfa" strokeWidth="2" />
            <line x1="110" y1="75" x2="490" y2="75" stroke="#a78bfa" strokeWidth="2" />
            <line x1="110" y1="75" x2="110" y2="95" stroke="#38bdf8" strokeWidth="2" />
            <line x1="300" y1="75" x2="300" y2="95" stroke="#10b981" strokeWidth="2" />
            <line x1="490" y1="75" x2="490" y2="95" stroke="#f59e0b" strokeWidth="2" />

            {/* Column 1: الاسم (Noun) */}
            <rect x="25" y="95" width="170" height="210" rx="10" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="2" />
            <rect x="35" y="105" width="150" height="30" rx="6" fill="#0284c7" />
            <text x="110" y="125" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">1. الاسْمُ (Noun)</text>
            <text x="110" y="150" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="bold">يدل على معنى دون زمن</text>
            <line x1="40" y1="160" x2="180" y2="160" stroke="rgba(56, 189, 248, 0.3)" />
            <text x="175" y="180" textAnchor="end" fill="#e0f2fe" fontSize="11">✓ التنوين (كتابٌ)</text>
            <text x="175" y="202" textAnchor="end" fill="#e0f2fe" fontSize="11">✓ أل التعريف (المدرسة)</text>
            <text x="175" y="224" textAnchor="end" fill="#e0f2fe" fontSize="11">✓ حرف الجر (في الفصلِ)</text>
            <text x="175" y="246" textAnchor="end" fill="#e0f2fe" fontSize="11">✓ النداء (يا طالبُ)</text>
            <rect x="40" y="262" width="140" height="24" rx="4" fill="rgba(2, 132, 199, 0.3)" />
            <text x="110" y="278" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">مثال: زَيْدٌ ، العِلْمُ</text>

            {/* Column 2: الفعل (Verb) */}
            <rect x="215" y="95" width="170" height="210" rx="10" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" />
            <rect x="225" y="105" width="150" height="30" rx="6" fill="#059669" />
            <text x="300" y="125" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">2. الفِعْلُ (Verb)</text>
            <text x="300" y="150" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="bold">يدل على حدث مقترن بزمن</text>
            <line x1="230" y1="160" x2="370" y2="160" stroke="rgba(16, 185, 129, 0.3)" />
            <text x="365" y="180" textAnchor="end" fill="#d1fae5" fontSize="11">✓ ماضٍ: قبول تاء الفاعل (كتبتُ)</text>
            <text x="365" y="202" textAnchor="end" fill="#d1fae5" fontSize="11">✓ مضارع: قبول (لم / سين) (سيكتب)</text>
            <text x="365" y="224" textAnchor="end" fill="#d1fae5" fontSize="11">✓ أمر: دلالة الطلب + ياء المخاطبة</text>
            <text x="365" y="246" textAnchor="end" fill="#d1fae5" fontSize="11">✓ تاء التأنيث الساكنة (قامتْ)</text>
            <rect x="230" y="262" width="140" height="24" rx="4" fill="rgba(5, 150, 105, 0.3)" />
            <text x="300" y="278" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">مثال: قَرَأَ ، يَقْرَأُ ، اقْرَأْ</text>

            {/* Column 3: الحرف (Particle) */}
            <rect x="405" y="95" width="170" height="210" rx="10" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="2" />
            <rect x="415" y="105" width="150" height="30" rx="6" fill="#d97706" />
            <text x="490" y="125" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">3. الحَرْفُ (Particle)</text>
            <text x="490" y="150" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold">لا يظهر معناه إلا مع غيره</text>
            <line x1="420" y1="160" x2="560" y2="160" stroke="rgba(245, 158, 11, 0.3)" />
            <text x="555" y="180" textAnchor="end" fill="#fef3c7" fontSize="11">✓ لا يقبل علامات الاسم</text>
            <text x="555" y="202" textAnchor="end" fill="#fef3c7" fontSize="11">✓ لا يقبل علامات الفعل</text>
            <text x="555" y="224" textAnchor="end" fill="#fef3c7" fontSize="11">✓ حروف الجر: (من، إلى، عن، في)</text>
            <text x="555" y="246" textAnchor="end" fill="#fef3c7" fontSize="11">✓ حروف العطف: (الواو، الفاء، ثم)</text>
            <rect x="420" y="262" width="140" height="24" rx="4" fill="rgba(217, 119, 6, 0.3)" />
            <text x="490" y="278" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">مثال: فِي ، إِلَى ، ثُمَّ</text>

            {/* Bottom Insight Footer */}
            <rect x="60" y="312" width="480" height="22" rx="6" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" />
            <text x="300" y="327" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold">قاعدة ابن مالك: بالجر والتنوين والندا وأل ومسندٍ للاسم تمييزٌ حصل</text>
          </svg>
        );

      case 'arabic_sentence_structure':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="320" fill="rgba(15, 23, 42, 0.95)" rx="16" />

            {/* Header: بنية الجملة العربية */}
            <rect x="180" y="15" width="240" height="38" rx="8" fill="#4338ca" stroke="#818cf8" strokeWidth="2" />
            <text x="300" y="40" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="bold">بنية الجملة العربية الأساسية</text>

            {/* 2 Main Columns: Nominal vs Verbal */}
            {/* 1. Nominal Sentence */}
            <rect x="30" y="70" width="255" height="220" rx="12" fill="rgba(99, 102, 241, 0.1)" stroke="#818cf8" strokeWidth="2" />
            <rect x="45" y="82" width="225" height="32" rx="6" fill="#4f46e5" />
            <text x="157" y="103" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">الجملة الاسمية (تبدأ باسم)</text>
            
            {/* Mubtada Box */}
            <rect x="45" y="125" width="105" height="70" rx="8" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" />
            <text x="97" y="148" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">المُبْتَدَأُ</text>
            <text x="97" y="168" textAnchor="middle" fill="#e0f2fe" fontSize="10">اسم مرفوع تبدأ</text>
            <text x="97" y="183" textAnchor="middle" fill="#e0f2fe" fontSize="10">به الجملة غالباً</text>

            {/* Plus sign */}
            <text x="157" y="165" textAnchor="middle" fill="#818cf8" fontSize="20" fontWeight="bold">+</text>

            {/* Khabar Box */}
            <rect x="165" y="125" width="105" height="70" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" />
            <text x="217" y="148" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">الخَبَرُ</text>
            <text x="217" y="168" textAnchor="middle" fill="#d1fae5" fontSize="10">الجزء المتمم</text>
            <text x="217" y="183" textAnchor="middle" fill="#d1fae5" fontSize="10">لفائدة المعنى</text>

            {/* Example Box */}
            <rect x="45" y="205" width="225" height="40" rx="6" fill="rgba(15, 23, 42, 0.8)" stroke="#64748b" />
            <text x="157" y="223" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">"العِلْمُ نُورٌ سَاطِعٌ"</text>
            <text x="157" y="238" textAnchor="middle" fill="#94a3b8" fontSize="10">العلم: مبتدأ مرفوع | نور: خبر مرفوع</text>

            <text x="157" y="272" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold">حكمهما الإعرابي: الرَّفْعُ دائماً</text>

            {/* 2. Verbal Sentence */}
            <rect x="315" y="70" width="255" height="220" rx="12" fill="rgba(16, 185, 129, 0.1)" stroke="#34d399" strokeWidth="2" />
            <rect x="330" y="82" width="225" height="32" rx="6" fill="#059669" />
            <text x="442" y="103" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">الجملة الفعلية (تبدأ بفعل)</text>

            {/* Verb Box */}
            <rect x="330" y="125" width="70" height="70" rx="8" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" />
            <text x="365" y="148" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">الفِعْلُ</text>
            <text x="365" y="168" textAnchor="middle" fill="#fef3c7" fontSize="10">الحدث والزمن</text>
            <text x="365" y="183" textAnchor="middle" fill="#fef3c7" fontSize="10">(ماض/مضارع/أمر)</text>

            {/* Plus sign */}
            <text x="407" y="165" textAnchor="middle" fill="#34d399" fontSize="18" fontWeight="bold">+</text>

            {/* Faail Box */}
            <rect x="415" y="125" width="65" height="70" rx="8" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" />
            <text x="447" y="148" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">الفَاعِلُ</text>
            <text x="447" y="168" textAnchor="middle" fill="#e0f2fe" fontSize="10">من قام</text>
            <text x="447" y="183" textAnchor="middle" fill="#e0f2fe" fontSize="10">بالفعل (مرفوع)</text>

            {/* Plus sign */}
            <text x="487" y="165" textAnchor="middle" fill="#34d399" fontSize="18" fontWeight="bold">+</text>

            {/* Maf'ool Box */}
            <rect x="495" y="125" width="60" height="70" rx="8" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" />
            <text x="525" y="148" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold">مَفْعُول بِهِ</text>
            <text x="525" y="168" textAnchor="middle" fill="#fee2e2" fontSize="9">وقع عليه</text>
            <text x="525" y="183" textAnchor="middle" fill="#fee2e2" fontSize="9">الفعل (منصوب)</text>

            {/* Example Box */}
            <rect x="330" y="205" width="225" height="40" rx="6" fill="rgba(15, 23, 42, 0.8)" stroke="#64748b" />
            <text x="442" y="223" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">"كَتَبَ الطَّالِبُ الدَّرْسَ"</text>
            <text x="442" y="238" textAnchor="middle" fill="#94a3b8" fontSize="10">كتب: فعل | الطالبُ: فاعل | الدرسَ: مفعول به</text>

            <text x="442" y="272" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="bold">الفاعل مرفوع دائماً | المفعول به منصوب</text>

            {/* Bottom summary */}
            <rect x="100" y="295" width="400" height="20" rx="5" fill="rgba(15, 23, 42, 0.9)" />
            <text x="300" y="309" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="bold">الجملة الاسمية تفيد الثبوت والاستقرار، والجملة الفعلية تفيد التجدد والحدوث</text>
          </svg>
        );

      case 'rhetoric_simile_map':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="320" fill="rgba(15, 23, 42, 0.95)" rx="16" />

            {/* Header: علم البيان: شجرة أركان التشبيه البلاغي */}
            <rect x="170" y="15" width="260" height="38" rx="8" fill="#7c3aed" stroke="#c4b5fd" strokeWidth="2" />
            <text x="300" y="40" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="bold">أركان التشبيه البلاغي الأربعة</text>

            {/* 4 Pillars Grid */}
            {/* 1. المشبه */}
            <rect x="30" y="70" width="125" height="95" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="2" />
            <text x="92" y="95" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">1. المُشَبَّهُ</text>
            <text x="92" y="118" textAnchor="middle" fill="#e0f2fe" fontSize="10">الطرف الأول المراد</text>
            <text x="92" y="133" textAnchor="middle" fill="#e0f2fe" fontSize="10">إيضاح صفته</text>
            <text x="92" y="152" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">(المعلمُ)</text>

            {/* 2. أداة التشبيه */}
            <rect x="170" y="70" width="125" height="95" rx="10" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="2" />
            <text x="232" y="95" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="bold">2. أداة التشبيه</text>
            <text x="232" y="118" textAnchor="middle" fill="#fef3c7" fontSize="10">حرف (كـ ، كأن)</text>
            <text x="232" y="133" textAnchor="middle" fill="#fef3c7" fontSize="10">أو اسم (مثل) أو فعل</text>
            <text x="232" y="152" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">(كـ / مثل)</text>

            {/* 3. المشبه به */}
            <rect x="310" y="70" width="125" height="95" rx="10" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="2" />
            <text x="372" y="95" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold">3. المُشَبَّهُ بِهِ</text>
            <text x="372" y="118" textAnchor="middle" fill="#d1fae5" fontSize="10">الطرف الأقوى في</text>
            <text x="372" y="133" textAnchor="middle" fill="#d1fae5" fontSize="10">الصفة المشتركة</text>
            <text x="372" y="152" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">(البَحْرِ)</text>

            {/* 4. وجه الشبه */}
            <rect x="450" y="70" width="125" height="95" rx="10" fill="rgba(236, 72, 153, 0.15)" stroke="#ec4899" strokeWidth="2" />
            <text x="512" y="95" textAnchor="middle" fill="#f472b6" fontSize="13" fontWeight="bold">4. وَجْهُ الشَّبَهِ</text>
            <text x="512" y="118" textAnchor="middle" fill="#fce7f3" fontSize="10">الصفة المشتركة</text>
            <text x="512" y="133" textAnchor="middle" fill="#fce7f3" fontSize="10">بين الطرفين</text>
            <text x="512" y="152" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">(في الجُودِ)</text>

            {/* Bottom: Classification & Types of Simile */}
            <rect x="30" y="180" width="545" height="125" rx="10" fill="rgba(30, 41, 59, 0.7)" stroke="#64748b" />
            <text x="300" y="202" textAnchor="middle" fill="#c4b5fd" fontSize="13" fontWeight="bold">مراتب التشبيه وأنواعه حسب الحذف والذكر:</text>
            
            <text x="560" y="228" textAnchor="end" fill="#e2e8f0" fontSize="11">🔹 <tspan fontWeight="bold" fill="#38bdf8">التشبيه التام (المفصل المرسل):</tspan> ذُكرت فيه الأركان الأربعة ("المعلم كالبحر في العطاء")</text>
            <text x="560" y="250" textAnchor="end" fill="#e2e8f0" fontSize="11">🔹 <tspan fontWeight="bold" fill="#f59e0b">التشبيه المؤكد:</tspan> حُذفت منه الأداة فقط ("المعلم بحر في العطاء")</text>
            <text x="560" y="272" textAnchor="end" fill="#e2e8f0" fontSize="11">🔹 <tspan fontWeight="bold" fill="#34d399">التشبيه المجمل:</tspan> حُذف منه وجه الشبه فقط ("المعلم كالبحر")</text>
            <text x="560" y="294" textAnchor="end" fill="#e2e8f0" fontSize="11">👑 <tspan fontWeight="bold" fill="#ec4899">التشبيه البليغ (أعلى المراتب):</tspan> حُذفت الأداة ووجه الشبه معاً وبقي الطرفان ("المعلمُ بحرٌ")</text>
          </svg>
        );

      case 'rhetoric_metaphor_map':
        return (
          <svg viewBox="0 0 600 330" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Background Grid */}
            <rect width="600" height="330" fill="rgba(15, 23, 42, 0.7)" rx="12" stroke="#334155" />

            {/* Header */}
            <rect x="160" y="12" width="280" height="32" rx="8" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" />
            <text x="300" y="33" textAnchor="middle" fill="#c4b5fd" fontSize="13" fontWeight="bold">شجرة الاستعارة البلاغية (تشبيه حُذف أحد طرفيه)</text>

            {/* Two Main Branches: Makniyyah vs Tasrihiyyah */}
            {/* Branch 1: الاستعارة المكنية */}
            <rect x="25" y="58" width="260" height="155" rx="10" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" strokeWidth="1.8" />
            <rect x="40" y="70" width="230" height="26" rx="6" fill="#0284c7" />
            <text x="155" y="87" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">1. الاستعارة المَكْنِيَّة (Makniyyah)</text>
            
            <text x="270" y="118" textAnchor="end" fill="#e2e8f0" fontSize="11">🔹 <tspan fontWeight="bold" fill="#38bdf8">المشبه:</tspan> مَذْكُور ومصرح به</text>
            <text x="270" y="138" textAnchor="end" fill="#fca5a5" fontSize="11">❌ <tspan fontWeight="bold" fill="#ef4444">المشبه به:</tspan> مَحْذُوف مع بقاء لوازمه</text>
            <text x="270" y="158" textAnchor="end" fill="#fde047" fontSize="11">💡 <tspan fontWeight="bold" fill="#eab308">القرينة:</tspan> إثبات صفة خاصة بالمحذوف</text>
            <rect x="40" y="172" width="230" height="30" rx="6" fill="rgba(15, 23, 42, 0.8)" stroke="#38bdf8" strokeDasharray="3 3" />
            <text x="155" y="191" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="bold">مثال: "بَكَتِ السَّمَاءُ" (شُبّهت بإنسان)</text>

            {/* Branch 2: الاستعارة التصريحية */}
            <rect x="315" y="58" width="260" height="155" rx="10" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="1.8" />
            <rect x="330" y="70" width="230" height="26" rx="6" fill="#059669" />
            <text x="445" y="87" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">2. الاستعارة التَّصْرِيحِيَّة (Tasrihiyyah)</text>
            
            <text x="560" y="118" textAnchor="end" fill="#fca5a5" fontSize="11">❌ <tspan fontWeight="bold" fill="#ef4444">المشبه:</tspan> مَحْذُوف من السياق</text>
            <text x="560" y="138" textAnchor="end" fill="#34d399" fontSize="11">🔹 <tspan fontWeight="bold" fill="#10b981">المشبه به:</tspan> مُصَرَّحٌ بلفظه مباشرة</text>
            <text x="560" y="158" textAnchor="end" fill="#fde047" fontSize="11">💡 <tspan fontWeight="bold" fill="#eab308">القرينة:</tspan> تمنع إرادة المعنى الحقيقي</text>
            <rect x="330" y="172" width="230" height="30" rx="6" fill="rgba(15, 23, 42, 0.8)" stroke="#10b981" strokeDasharray="3 3" />
            <text x="445" y="191" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="bold">مثال: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ" (أي دينه)</text>

            {/* Bottom: Aesthetic Aims (أسرار الجمال البلاغي) */}
            <rect x="25" y="225" width="550" height="92" rx="10" fill="rgba(30, 41, 59, 0.85)" stroke="#64748b" />
            <text x="300" y="247" textAnchor="middle" fill="#f472b6" fontSize="12" fontWeight="bold">أسرار الجمال والأثر البلاغي للاستعارة في المعنى:</text>
            
            <text x="560" y="272" textAnchor="end" fill="#e2e8f0" fontSize="11">👤 <tspan fontWeight="bold" fill="#38bdf8">التشخيص:</tspan> منح الجمادات والمعنويات صفات الأشخاص العاقلين ("تحدث التاريخ")</text>
            <text x="560" y="292" textAnchor="end" fill="#e2e8f0" fontSize="11">🧱 <tspan fontWeight="bold" fill="#f59e0b">التجسيم:</tspan> تحويل المعنويات المجردة إلى صور مادية ملموسة ("افترس اليأس قلبه")</text>
            <text x="560" y="310" textAnchor="end" fill="#e2e8f0" fontSize="11">✨ <tspan fontWeight="bold" fill="#34d399">التوضيح:</tspan> إبراز المعنى الحقيقي في صورة جلية تزيد الفكرة رسوخاً وإقناعاً</text>
          </svg>
        );

      case 'rhetoric_badi_map':
        return (
          <svg viewBox="0 0 600 330" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="330" fill="rgba(15, 23, 42, 0.7)" rx="12" stroke="#334155" />

            {/* Title */}
            <rect x="170" y="12" width="260" height="32" rx="8" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" />
            <text x="300" y="33" textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="bold">خريطة علم البديع: المحسنات اللفظية والمعنوية</text>

            {/* Left Box: المحسنات اللفظية */}
            <rect x="25" y="58" width="265" height="255" rx="10" fill="rgba(56, 189, 248, 0.08)" stroke="#38bdf8" strokeWidth="1.8" />
            <rect x="40" y="70" width="235" height="26" rx="6" fill="#0284c7" />
            <text x="157" y="87" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">1. المحسنات اللفظية (تضفي جرساً موسيقياً)</text>

            {/* Jinas */}
            <rect x="40" y="105" width="235" height="60" rx="6" fill="rgba(15, 23, 42, 0.7)" stroke="#38bdf8" strokeDasharray="2 2" />
            <text x="265" y="123" textAnchor="end" fill="#38bdf8" fontSize="11" fontWeight="bold">🔹 الجناس (تشابه اللفظ واختلاف المعنى):</text>
            <text x="265" y="141" textAnchor="end" fill="#cbd5e1" fontSize="10">• تام: "يوم تقوم الساعة يقسم المجرمون ما لبثوا غير ساعة"</text>
            <text x="265" y="157" textAnchor="end" fill="#cbd5e1" fontSize="10">• ناقص: "عَبْرَة للمعتبر، وعِبْرَة في العين"</text>

            {/* Saj */}
            <rect x="40" y="173" width="235" height="60" rx="6" fill="rgba(15, 23, 42, 0.7)" stroke="#38bdf8" strokeDasharray="2 2" />
            <text x="265" y="191" textAnchor="end" fill="#38bdf8" fontSize="11" fontWeight="bold">🔹 السجع (توافق فواصل النثر في الحرف الأخير):</text>
            <text x="265" y="211" textAnchor="end" fill="#cbd5e1" fontSize="10">• "الصومُ حِرمانٌ مشروع، وتأديبٌ بالْجُوع، وخُشوعٌ لِلرَّبِّ الْمَتْبُوع"</text>

            {/* Tasree */}
            <rect x="40" y="241" width="235" height="60" rx="6" fill="rgba(15, 23, 42, 0.7)" stroke="#38bdf8" strokeDasharray="2 2" />
            <text x="265" y="259" textAnchor="end" fill="#38bdf8" fontSize="11" fontWeight="bold">🔹 التصريع (اتفاق قافيتي شطري البيت الأول):</text>
            <text x="265" y="279" textAnchor="end" fill="#cbd5e1" fontSize="10">• "قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ ... بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ"</text>

            {/* Right Box: المحسنات المعنوية */}
            <rect x="310" y="58" width="265" height="255" rx="10" fill="rgba(236, 72, 153, 0.08)" stroke="#ec4899" strokeWidth="1.8" />
            <rect x="325" y="70" width="235" height="26" rx="6" fill="#be185d" />
            <text x="442" y="87" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">2. المحسنات المعنوية (تعمق وتوضح المعنى)</text>

            {/* Tibaq */}
            <rect x="325" y="105" width="235" height="60" rx="6" fill="rgba(15, 23, 42, 0.7)" stroke="#ec4899" strokeDasharray="2 2" />
            <text x="550" y="123" textAnchor="end" fill="#f472b6" fontSize="11" fontWeight="bold">🔸 الطباق (تضاد بين كلمتين منفردتين):</text>
            <text x="550" y="141" textAnchor="end" fill="#cbd5e1" fontSize="10">• إيجاب: "يُحْيِي وَيُمِيتُ" / "الليل والنهار"</text>
            <text x="550" y="157" textAnchor="end" fill="#cbd5e1" fontSize="10">• سلب: "يَعْلَمُونَ وَلَا يَعْلَمُونَ"</text>

            {/* Muqabalah */}
            <rect x="325" y="173" width="235" height="60" rx="6" fill="rgba(15, 23, 42, 0.7)" stroke="#ec4899" strokeDasharray="2 2" />
            <text x="550" y="191" textAnchor="end" fill="#f472b6" fontSize="11" fontWeight="bold">🔸 المقابلة (تضاد تركيبي متعدد على الترتيب):</text>
            <text x="550" y="211" textAnchor="end" fill="#cbd5e1" fontSize="10">• "يُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ"</text>
            <text x="550" y="226" textAnchor="end" fill="#cbd5e1" fontSize="9">(يحل ضد يحرم، الطيبات ضد الخبائث)</text>

            {/* Tawriyah */}
            <rect x="325" y="241" width="235" height="60" rx="6" fill="rgba(15, 23, 42, 0.7)" stroke="#ec4899" strokeDasharray="2 2" />
            <text x="550" y="259" textAnchor="end" fill="#f472b6" fontSize="11" fontWeight="bold">🔸 التورية (لفظ له معنيان قريب وبعيد مقصود):</text>
            <text x="550" y="279" textAnchor="end" fill="#cbd5e1" fontSize="10">• "والنَّهْرُ يُشْبِهُ مِبْرَداً ... فَلأَجْلِ ذَا يَجْلُو الصَّدَى"</text>
            <text x="550" y="294" textAnchor="end" fill="#cbd5e1" fontSize="9">(الصدى القريب: صدأ الحديد، والبعيد المراد: العطش)</text>
          </svg>
        );

      case 'literary_criticism_map':
        return (
          <svg viewBox="0 0 600 330" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="330" fill="rgba(15, 23, 42, 0.7)" rx="12" stroke="#334155" />

            {/* Header */}
            <rect x="150" y="12" width="300" height="32" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" />
            <text x="300" y="33" textAnchor="middle" fill="#6ee7b7" fontSize="13" fontWeight="bold">أركان النقد والتحليل الأدبي للنصوص</text>

            {/* 4 Cardinal Pillars of Literary Work */}
            {/* 1. Emotion */}
            <rect x="25" y="58" width="125" height="135" rx="10" fill="rgba(239, 68, 68, 0.12)" stroke="#ef4444" strokeWidth="1.8" />
            <rect x="35" y="68" width="105" height="24" rx="5" fill="#dc2626" />
            <text x="87" y="84" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">1. العاطفة والشعور</text>
            <text x="87" y="110" textAnchor="middle" fill="#fca5a5" fontSize="10">صدق الإحساس</text>
            <text x="87" y="128" textAnchor="middle" fill="#fca5a5" fontSize="10">قوة التأثير والحرارة</text>
            <text x="87" y="146" textAnchor="middle" fill="#fca5a5" fontSize="10">الثبات والانسجام</text>
            <text x="87" y="175" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">(المحرك الوجداني)</text>

            {/* 2. Idea */}
            <rect x="165" y="58" width="125" height="135" rx="10" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" strokeWidth="1.8" />
            <rect x="175" y="68" width="105" height="24" rx="5" fill="#0284c7" />
            <text x="227" y="84" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">2. الفكرة والمعنى</text>
            <text x="227" y="110" textAnchor="middle" fill="#bae6fd" fontSize="10">العمق والأصالة</text>
            <text x="227" y="128" textAnchor="middle" fill="#bae6fd" fontSize="10">الصحة والملاءمة</text>
            <text x="227" y="146" textAnchor="middle" fill="#bae6fd" fontSize="10">الترابط المنطقي</text>
            <text x="227" y="175" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">(الجوهر الفكري)</text>

            {/* 3. Imagery */}
            <rect x="305" y="58" width="125" height="135" rx="10" fill="rgba(168, 85, 247, 0.12)" stroke="#a855f7" strokeWidth="1.8" />
            <rect x="315" y="68" width="105" height="24" rx="5" fill="#7e22ce" />
            <text x="367" y="84" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">3. الخيال والتصوير</text>
            <text x="367" y="110" textAnchor="middle" fill="#e9d5ff" fontSize="10">التشبيه والاستعارة</text>
            <text x="367" y="128" textAnchor="middle" fill="#e9d5ff" fontSize="10">التشخيص والتجسيم</text>
            <text x="367" y="146" textAnchor="middle" fill="#e9d5ff" fontSize="10">ابتكار الصور الحية</text>
            <text x="367" y="175" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">(الرداء الجمالي)</text>

            {/* 4. Style */}
            <rect x="445" y="58" width="125" height="135" rx="10" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" strokeWidth="1.8" />
            <rect x="455" y="68" width="105" height="24" rx="5" fill="#d97706" />
            <text x="507" y="84" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">4. الأسلوب والإيقاع</text>
            <text x="507" y="110" textAnchor="middle" fill="#fde68a" fontSize="10">فصاحة الألفاظ</text>
            <text x="507" y="128" textAnchor="middle" fill="#fde68a" fontSize="10">الموسيقى والوزن</text>
            <text x="507" y="146" textAnchor="middle" fill="#fde68a" fontSize="10">مطابقة مقتضى الحال</text>
            <text x="507" y="175" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">(البناء اللغوي)</text>

            {/* Bottom: Organic Unity (الوحدة العضوية والموضوعية) */}
            <rect x="25" y="208" width="545" height="110" rx="10" fill="rgba(30, 41, 59, 0.85)" stroke="#38bdf8" />
            <text x="300" y="230" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">💎 غاية النقد: تقييم "الوحدة العضوية" والتكامل الفني للنص</text>
            <text x="550" y="255" textAnchor="end" fill="#e2e8f0" fontSize="11">🔹 <tspan fontWeight="bold" fill="#34d399">وحدة الموضوع:</tspan> دوران النص حول قضية أو تجربة إنسانية واحدة دون تشتت</text>
            <text x="550" y="277" textAnchor="end" fill="#e2e8f0" fontSize="11">🔹 <tspan fontWeight="bold" fill="#f472b6">وحدة الجو النفسي:</tspan> سيطرة عاطفة منسجمة تتدرج طبيعياً من مطلع النص إلى ختامه</text>
            <text x="550" y="299" textAnchor="end" fill="#e2e8f0" fontSize="11">🔹 <tspan fontWeight="bold" fill="#fde047">ترابط الأفكار:</tspan> تسلسل منطقي وشعوري محكم يجعل كل بيت أو فقرة جزءاً حياً لا يتجزأ</text>
          </svg>
        );

      case 'plant_animal_cell':
        return (
          <svg viewBox="0 0 600 330" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="330" fill="rgba(15, 23, 42, 0.7)" rx="12" stroke="#334155" />

            {/* Title */}
            <rect x="150" y="10" width="300" height="30" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" />
            <text x="300" y="30" textAnchor="middle" fill="#6ee7b7" fontSize="13" fontWeight="bold">المقارنة الدقيقة بين الخلية النباتية والخلية الحيوانية</text>

            {/* Left: Plant Cell (Green Hexagonal) */}
            <g transform="translate(10, 50)">
              {/* Outer Cell Wall */}
              <polygon points="50,15 200,15 240,110 200,205 50,205 10,110" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="4" />
              {/* Inner Cell Membrane */}
              <polygon points="55,23 195,23 232,110 195,197 55,197 18,110" fill="rgba(6, 78, 59, 0.3)" stroke="#34d399" strokeWidth="2" />
              
              {/* Large Central Vacuole */}
              <ellipse cx="110" cy="110" rx="48" ry="55" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" strokeWidth="2" />
              <text x="110" y="114" textAnchor="middle" fill="#bae6fd" fontSize="10" fontWeight="bold">فجوة عصارية كبيرة</text>

              {/* Chloroplasts */}
              <ellipse cx="185" cy="70" rx="16" ry="10" fill="#15803d" stroke="#22c55e" strokeWidth="1.5" />
              <ellipse cx="180" cy="155" rx="16" ry="10" fill="#15803d" stroke="#22c55e" strokeWidth="1.5" />
              <text x="182" y="180" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="bold">بلاستيدة خضراء</text>

              {/* Plant Nucleus */}
              <circle cx="65" cy="65" r="18" fill="#a855f7" stroke="#c084fc" strokeWidth="1.5" />
              <text x="65" y="69" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">النواة</text>

              <text x="125" y="222" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">الخلية النباتية (Plant Cell)</text>
              <text x="125" y="238" textAnchor="middle" fill="#94a3b8" fontSize="9">جدار خلوي + بلاستيدات + فجوة ضخمة</text>
            </g>

            {/* Right: Animal Cell (Blue/Purple Rounded) */}
            <g transform="translate(340, 50)">
              {/* Flexible Cell Membrane */}
              <ellipse cx="125" cy="110" rx="110" ry="95" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="3" />

              {/* Animal Nucleus (Center) */}
              <circle cx="125" cy="110" r="28" fill="#a855f7" stroke="#c084fc" strokeWidth="2" />
              <circle cx="125" cy="110" r="10" fill="#6b21a8" />
              <text x="125" y="114" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">النواة + DNA</text>

              {/* Mitochondria */}
              <ellipse cx="65" cy="70" rx="16" ry="9" fill="#ef4444" stroke="#f87171" strokeWidth="1.5" />
              <text x="65" y="93" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="bold">ميتوكوندريا</text>

              {/* Small Vacuoles */}
              <circle cx="190" cy="80" r="9" fill="rgba(56, 189, 248, 0.4)" stroke="#38bdf8" />
              <circle cx="180" cy="150" r="8" fill="rgba(56, 189, 248, 0.4)" stroke="#38bdf8" />
              <text x="185" y="172" textAnchor="middle" fill="#bae6fd" fontSize="8">فجوات صغيرة</text>

              {/* Centrosome */}
              <rect x="60" y="145" width="12" height="12" fill="#f59e0b" />
              <rect x="75" y="145" width="12" height="12" fill="#f59e0b" />
              <text x="73" y="170" textAnchor="middle" fill="#fbbf24" fontSize="8">جسم مركزي</text>

              <text x="125" y="222" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="bold">الخلية الحيوانية (Animal Cell)</text>
              <text x="125" y="238" textAnchor="middle" fill="#94a3b8" fontSize="9">غشاء مرن + شكل غير منتظم + جسم مركزي</text>
            </g>

            {/* Bottom: Key Distinctions Summary */}
            <rect x="25" y="255" width="550" height="65" rx="8" fill="rgba(30, 41, 59, 0.9)" stroke="#64748b" />
            <text x="560" y="275" textAnchor="end" fill="#e2e8f0" fontSize="11">🌿 <tspan fontWeight="bold" fill="#34d399">خاص بالنبات:</tspan> الجدار الخلوي (السليلوز للحماية والدعامة) + البلاستيدات الخضراء (للبناء الضوئي)</text>
            <text x="560" y="295" textAnchor="end" fill="#e2e8f0" fontSize="11">⚡ <tspan fontWeight="bold" fill="#38bdf8">مشترك بينهما:</tspan> النواة (التحكم والوراثة) + الميتوكوندريا (إنتاج طاقة ATP) + الغشاء البلازمي والسيتوبلازم</text>
            <text x="560" y="313" textAnchor="end" fill="#e2e8f0" fontSize="10">🐾 <tspan fontWeight="bold" fill="#f59e0b">خاص بالحيوان:</tspan> الجسم المركزي (السنتروسوم للمساعدة في الانقسام الخلوي)</text>
          </svg>
        );

      case 'forces_motion_vector':
        return (
          <svg viewBox="0 0 600 330" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrowGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
              </marker>
              <marker id="arrowOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
              </marker>
              <marker id="arrowBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
              </marker>
            </defs>

            <rect width="600" height="330" fill="rgba(15, 23, 42, 0.7)" rx="12" stroke="#334155" />

            {/* Title */}
            <rect x="150" y="10" width="300" height="30" rx="8" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" />
            <text x="300" y="30" textAnchor="middle" fill="#7dd3fc" fontSize="13" fontWeight="bold">مخطط متجهات القوى، والسرعة، والحركة المتزنة</text>

            {/* Ground Line */}
            <line x1="30" y1="170" x2="350" y2="170" stroke="#64748b" strokeWidth="3" />
            <pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse">
              <line x1="0" y1="10" x2="10" y2="0" stroke="#475569" strokeWidth="1" />
            </pattern>
            <rect x="30" y="170" width="320" height="15" fill="url(#hatch)" />

            {/* Moving Object Block */}
            <rect x="140" y="110" width="100" height="60" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="190" y="138" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">جسم كتلته m</text>
            <text x="190" y="155" textAnchor="middle" fill="#94a3b8" fontSize="11">m = 20 kg</text>

            {/* Force Vectors */}
            {/* Applied Force (Right) */}
            <line x1="240" y1="140" x2="330" y2="140" stroke="#10b981" strokeWidth="3.5" markerEnd="url(#arrowGreen)" />
            <text x="290" y="130" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">قوة السحب F = 100 N</text>

            {/* Friction Force (Left) */}
            <line x1="140" y1="140" x2="60" y2="140" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowOrange)" />
            <text x="95" y="130" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">احتكاك f = 40 N</text>

            {/* Normal Force (Up) */}
            <line x1="190" y1="110" x2="190" y2="55" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrowBlue)" />
            <text x="190" y="48" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontWeight="bold">القوة العمودية F_N</text>

            {/* Gravity (Down) */}
            <line x1="190" y1="170" x2="190" y2="215" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
            <text x="190" y="230" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">الوزن / الجاذبية F_g</text>

            {/* Right Box: Kinematics Triangle & Newton Law */}
            <rect x="375" y="50" width="205" height="155" rx="10" fill="rgba(30, 41, 59, 0.85)" stroke="#38bdf8" />
            <text x="477" y="72" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">مثلث حساب السرعة المتوسطة</text>
            
            {/* Triangle */}
            <polygon points="477,85 425,145 530,145" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="2" />
            <line x1="445" y1="120" x2="510" y2="120" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="477" y1="120" x2="477" y2="145" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="477" y="112" textAnchor="middle" fill="#fde047" fontSize="13" fontWeight="bold">المسافة (d)</text>
            <text x="452" y="138" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">السرعة (v)</text>
            <text x="502" y="138" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">الزمن (t)</text>
            
            <text x="477" y="168" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold">v = d ÷ t  |  d = v × t</text>
            <text x="477" y="190" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">القوة المحصلة: F_net = F - f = 60 N</text>

            {/* Bottom: Balanced vs Unbalanced Forces */}
            <rect x="25" y="242" width="555" height="78" rx="8" fill="rgba(30, 41, 59, 0.9)" stroke="#64748b" />
            <text x="565" y="263" textAnchor="end" fill="#e2e8f0" fontSize="11">⚖️ <tspan fontWeight="bold" fill="#34d399">القوى المتزنة (ΣF = 0):</tspan> القوة المحصلة تساوي صفراً؛ يظل الجسم ساكناً أو يتحرك بسرعة ثابتة في خط مستقيم.</text>
            <text x="565" y="285" textAnchor="end" fill="#e2e8f0" fontSize="11">🚀 <tspan fontWeight="bold" fill="#f59e0b">القوى غير المتزنة (ΣF ≠ 0):</tspan> القوة المحصلة لا تساوي صفراً؛ تُحدث تسارعاً (تغير السرعة بالمقدار أو الاتجاه: a = F_net / m).</text>
            <text x="565" y="307" textAnchor="end" fill="#e2e8f0" fontSize="10">🛑 <tspan fontWeight="bold" fill="#ef4444">قوة الاحتكاك:</tspan> قوة تعاكس دائماً اتجاه حركة الجسم وتعتمد على طبيعة السطحين المتلامسين والقوة الضاغطة.</text>
          </svg>
        );

      case 'energy_transformation_chain':
        return (
          <svg viewBox="0 0 600 330" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrowGold" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
              </marker>
            </defs>

            <rect width="600" height="330" fill="rgba(15, 23, 42, 0.7)" rx="12" stroke="#334155" />

            {/* Title */}
            <rect x="140" y="10" width="320" height="30" rx="8" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" />
            <text x="300" y="30" textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="bold">سلاسل تحولات الطاقة وقانون حفظ الطاقة الكلي</text>

            {/* Energy Chain Blocks */}
            {/* 1. Solar / Chemical */}
            <rect x="25" y="55" width="115" height="110" rx="10" fill="rgba(234, 179, 8, 0.15)" stroke="#eab308" strokeWidth="2" />
            <circle cx="82" cy="85" r="18" fill="#ca8a04" />
            <text x="82" y="89" textAnchor="middle" fill="#fff" fontSize="14">☀️</text>
            <text x="82" y="120" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold">طاقة شمسية</text>
            <text x="82" y="136" textAnchor="middle" fill="#cbd5e1" fontSize="9">إشعاع ضوئي وحراري</text>
            <text x="82" y="152" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">بناء ضوئي</text>

            {/* Arrow 1 */}
            <line x1="145" y1="110" x2="165" y2="110" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowGold)" />

            {/* 2. Chemical Potential */}
            <rect x="170" y="55" width="115" height="110" rx="10" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="2" />
            <circle cx="227" cy="85" r="18" fill="#059669" />
            <text x="227" y="89" textAnchor="middle" fill="#fff" fontSize="14">🍎</text>
            <text x="227" y="120" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="bold">طاقة كيميائية</text>
            <text x="227" y="136" textAnchor="middle" fill="#cbd5e1" fontSize="9">مخزونة في الغذاء/الوقود</text>
            <text x="227" y="152" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">احتراق / هضم</text>

            {/* Arrow 2 */}
            <line x1="290" y1="110" x2="310" y2="110" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowGold)" />

            {/* 3. Kinetic & Mechanical */}
            <rect x="315" y="55" width="115" height="110" rx="10" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="372" cy="85" r="18" fill="#0284c7" />
            <text x="372" y="89" textAnchor="middle" fill="#fff" fontSize="14">🏃</text>
            <text x="372" y="120" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="bold">طاقة حركية</text>
            <text x="372" y="136" textAnchor="middle" fill="#cbd5e1" fontSize="9">حركة العضلات والآلات</text>
            <text x="372" y="152" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">E_k = ½ m v²</text>

            {/* Arrow 3 */}
            <line x1="435" y1="110" x2="455" y2="110" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowGold)" />

            {/* 4. Electrical / Thermal Output */}
            <rect x="460" y="55" width="115" height="110" rx="10" fill="rgba(236, 72, 153, 0.15)" stroke="#ec4899" strokeWidth="2" />
            <circle cx="517" cy="85" r="18" fill="#be185d" />
            <text x="517" y="89" textAnchor="middle" fill="#fff" fontSize="14">💡</text>
            <text x="517" y="120" textAnchor="middle" fill="#f472b6" fontSize="11" fontWeight="bold">طاقة كهربائية/ضوء</text>
            <text x="517" y="136" textAnchor="middle" fill="#cbd5e1" fontSize="9">إضاءة + حرارة مهدورة</text>
            <text x="517" y="152" textAnchor="middle" fill="#ec4899" fontSize="8" fontWeight="bold">إنتاج وتشغيل</text>

            {/* Pendulum Potential-Kinetic Exchange */}
            <rect x="25" y="178" width="550" height="65" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#64748b" />
            <text x="300" y="198" textAnchor="middle" fill="#fde047" fontSize="11" fontWeight="bold">تبادل طاقتي الوضع والحركة (مثال البندول والسقوط الحر):</text>
            <text x="560" y="218" textAnchor="end" fill="#e2e8f0" fontSize="10">🔹 <tspan fontWeight="bold" fill="#38bdf8">عند أعلى نقطة (أقصى ارتفاع):</tspan> طاقة الوضع قصوى (E_p = max) بينما طاقة الحركة صفر (E_k = 0).</text>
            <text x="560" y="235" textAnchor="end" fill="#e2e8f0" fontSize="10">🔹 <tspan fontWeight="bold" fill="#34d399">عند أسفل نقطة (لحظة المرور بالقاع):</tspan> طاقة الحركة قصوى (E_k = max) بينما طاقة الوضع أقل ما يمكن.</text>

            {/* Bottom: Conservation Law Banner */}
            <rect x="25" y="252" width="550" height="68" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#f59e0b" strokeWidth="1.8" />
            <text x="300" y="272" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">👑 القانون الخالد: قانون حفظ الطاقة (Conservation of Energy)</text>
            <text x="300" y="291" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">"الطاقة لا تفنى ولا تُستحدث من العدم، وإنما تتحول من شكل إلى آخر"</text>
            <text x="300" y="308" textAnchor="middle" fill="#94a3b8" fontSize="10">الطاقة الكلية = طاقة الوضع + طاقة الحركة + الطاقة الحرارية = مقدار ثابت دائماً</text>
          </svg>
        );
      case 'neural_network_ai':
        return (
          <svg viewBox="0 0 600 330" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="neuronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient id="hiddenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <marker id="arrowPurple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc" />
              </marker>
            </defs>

            <rect width="600" height="330" fill="rgba(15, 23, 42, 0.75)" rx="12" stroke="#334155" />

            {/* Title */}
            <rect x="130" y="10" width="340" height="30" rx="8" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" />
            <text x="300" y="30" textAnchor="middle" fill="#c7d2fe" fontSize="13" fontWeight="bold">بنية الشبكة العصبية الاصطناعية (Deep Neural Network)</text>

            {/* Interconnection Synapses (Weights w_ij) */}
            {/* Input to Hidden 1 */}
            <line x1="90" y1="90" x2="230" y2="70" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
            <line x1="90" y1="90" x2="230" y2="120" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
            <line x1="90" y1="90" x2="230" y2="170" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
            <line x1="90" y1="140" x2="230" y2="70" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
            <line x1="90" y1="140" x2="230" y2="120" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
            <line x1="90" y1="140" x2="230" y2="170" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
            <line x1="90" y1="190" x2="230" y2="70" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
            <line x1="90" y1="190" x2="230" y2="120" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
            <line x1="90" y1="190" x2="230" y2="170" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />

            {/* Hidden 1 to Hidden 2 */}
            <line x1="230" y1="70" x2="370" y2="85" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.5" />
            <line x1="230" y1="70" x2="370" y2="155" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.5" />
            <line x1="230" y1="120" x2="370" y2="85" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.5" />
            <line x1="230" y1="120" x2="370" y2="155" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.5" />
            <line x1="230" y1="170" x2="370" y2="85" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.5" />
            <line x1="230" y1="170" x2="370" y2="155" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.5" />

            {/* Hidden 2 to Output */}
            <line x1="370" y1="85" x2="510" y2="110" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" />
            <line x1="370" y1="85" x2="510" y2="170" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" />
            <line x1="370" y1="155" x2="510" y2="110" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" />
            <line x1="370" y1="155" x2="510" y2="170" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" />

            {/* Input Nodes (X1, X2, X3) */}
            <circle cx="90" cy="90" r="18" fill="url(#neuronGrad)" stroke="#38bdf8" strokeWidth="2" />
            <text x="90" y="95" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">x₁</text>
            <circle cx="90" cy="140" r="18" fill="url(#neuronGrad)" stroke="#38bdf8" strokeWidth="2" />
            <text x="90" y="145" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">x₂</text>
            <circle cx="90" cy="190" r="18" fill="url(#neuronGrad)" stroke="#38bdf8" strokeWidth="2" />
            <text x="90" y="195" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">x₃</text>
            <text x="90" y="224" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">طبقة المدخلات</text>
            <text x="90" y="238" textAnchor="middle" fill="#94a3b8" fontSize="9">Input Features</text>

            {/* Hidden Layer 1 Nodes */}
            <circle cx="230" cy="70" r="17" fill="url(#hiddenGrad)" stroke="#a855f7" strokeWidth="2" />
            <text x="230" y="74" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">h₁¹</text>
            <circle cx="230" cy="120" r="17" fill="url(#hiddenGrad)" stroke="#a855f7" strokeWidth="2" />
            <text x="230" y="124" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">h₂¹</text>
            <circle cx="230" cy="170" r="17" fill="url(#hiddenGrad)" stroke="#a855f7" strokeWidth="2" />
            <text x="230" y="174" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">h₃¹</text>
            <text x="230" y="204" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="bold">الطبقة الخفية 1</text>
            <text x="230" y="218" textAnchor="middle" fill="#94a3b8" fontSize="9">z = Σwᵢxᵢ + b</text>

            {/* Hidden Layer 2 Nodes */}
            <circle cx="370" cy="85" r="17" fill="url(#hiddenGrad)" stroke="#ec4899" strokeWidth="2" />
            <text x="370" y="89" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">h₁²</text>
            <circle cx="370" cy="155" r="17" fill="url(#hiddenGrad)" stroke="#ec4899" strokeWidth="2" />
            <text x="370" y="159" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">h₂²</text>
            <text x="370" y="204" textAnchor="middle" fill="#f472b6" fontSize="11" fontWeight="bold">الطبقة الخفية 2</text>
            <text x="370" y="218" textAnchor="middle" fill="#94a3b8" fontSize="9">a = ReLU(z)</text>

            {/* Output Nodes (y1, y2) */}
            <circle cx="510" cy="110" r="18" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <text x="510" y="115" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">ŷ₁</text>
            <circle cx="510" cy="170" r="18" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <text x="510" y="175" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">ŷ₂</text>
            <text x="510" y="204" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">طبقة المخرجات</text>
            <text x="510" y="218" textAnchor="middle" fill="#94a3b8" fontSize="9">Softmax / Sigmoid</text>

            {/* Backpropagation feedback loop */}
            <path d="M 485 60 C 370 35, 230 35, 115 60" fill="none" stroke="#c084fc" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowPurple)" />
            <rect x="220" y="38" width="160" height="20" rx="4" fill="rgba(15, 23, 42, 0.9)" stroke="#c084fc" />
            <text x="300" y="52" textAnchor="middle" fill="#e9d5ff" fontSize="10" fontWeight="bold">الانتشار الخلفي (Backpropagation)</text>

            {/* Bottom: 3 Modular Structured Information Cards */}
            {/* Card 1: Forward Pass */}
            <g transform="translate(20, 245)">
              <rect width="176" height="66" rx="8" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="88" y="20" textAnchor="middle" fill="#7dd3fc" fontSize="10.5" fontWeight="bold">⚡ التمرير الأمامي (Forward)</text>
              <text x="88" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="9.5">z = Σ(wᵢ · xᵢ) + b</text>
              <text x="88" y="54" textAnchor="middle" fill="#38bdf8" fontSize="9">حساب التنبؤ ŷ = f(z)</text>
            </g>

            {/* Card 2: ReLU Activation */}
            <g transform="translate(212, 245)">
              <rect width="176" height="66" rx="8" fill="rgba(52, 211, 153, 0.12)" stroke="#34d399" strokeWidth="1.2" />
              <text x="88" y="20" textAnchor="middle" fill="#6ee7b7" fontSize="10.5" fontWeight="bold">🎯 دالة التنشيط (ReLU)</text>
              <text x="88" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="9.5">a = max(0, z)</text>
              <text x="88" y="54" textAnchor="middle" fill="#34d399" fontSize="9">تفادي تلاشي التدرج</text>
            </g>

            {/* Card 3: Backpropagation */}
            <g transform="translate(404, 245)">
              <rect width="176" height="66" rx="8" fill="rgba(192, 132, 252, 0.12)" stroke="#c084fc" strokeWidth="1.2" />
              <text x="88" y="20" textAnchor="middle" fill="#e9d5ff" fontSize="10.5" fontWeight="bold">🔄 التمرير الخلفي (Backprop)</text>
              <text x="88" y="38" textAnchor="middle" fill="#e2e8f0" fontSize="9.5">w ← w − η · (∂L/∂w)</text>
              <text x="88" y="54" textAnchor="middle" fill="#c084fc" fontSize="9">تحديث الأوزان وتقليل الخطأ</text>
            </g>
          </svg>
        );

      case 'ml_pipeline_model':
        return (
          <svg viewBox="0 0 600 330" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrowCyan2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
              </marker>
            </defs>

            <rect width="600" height="330" fill="rgba(15, 23, 42, 0.75)" rx="12" stroke="#334155" />

            {/* Title */}
            <rect x="140" y="10" width="320" height="30" rx="8" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" />
            <text x="300" y="30" textAnchor="middle" fill="#7dd3fc" fontSize="13" fontWeight="bold">دورة حياة وتصنيف خوارزميات تعلم الآلة (ML Pipeline)</text>

            {/* 3 Main Paradigms Comparison (Top Row) */}
            {/* Supervised */}
            <rect x="25" y="55" width="170" height="100" rx="8" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" strokeWidth="1.8" />
            <rect x="35" y="65" width="150" height="22" rx="4" fill="#0284c7" />
            <text x="110" y="80" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">1. التعلم الموجه (Supervised)</text>
            <text x="110" y="104" textAnchor="middle" fill="#bae6fd" fontSize="10">بيانات موسومة (Labeled Data)</text>
            <text x="110" y="122" textAnchor="middle" fill="#e2e8f0" fontSize="9">• تصنيف (Classification)</text>
            <text x="110" y="138" textAnchor="middle" fill="#e2e8f0" fontSize="9">• انحدار خطي (Regression)</text>

            {/* Unsupervised */}
            <rect x="215" y="55" width="170" height="100" rx="8" fill="rgba(168, 85, 247, 0.12)" stroke="#a855f7" strokeWidth="1.8" />
            <rect x="225" y="65" width="150" height="22" rx="4" fill="#7e22ce" />
            <text x="300" y="80" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">2. غير الموجه (Unsupervised)</text>
            <text x="300" y="104" textAnchor="middle" fill="#e9d5ff" fontSize="10">بيانات غير موسومة (Unlabeled)</text>
            <text x="300" y="122" textAnchor="middle" fill="#e2e8f0" fontSize="9">• التجميع والتكتل (Clustering)</text>
            <text x="300" y="138" textAnchor="middle" fill="#e2e8f0" fontSize="9">• تقليل الأبعاد (PCA / t-SNE)</text>

            {/* Reinforcement */}
            <rect x="405" y="55" width="170" height="100" rx="8" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" strokeWidth="1.8" />
            <rect x="415" y="65" width="150" height="22" rx="4" fill="#d97706" />
            <text x="490" y="80" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">3. التعزيزي (Reinforcement)</text>
            <text x="490" y="104" textAnchor="middle" fill="#fde68a" fontSize="10">بيئة تفاعلية ومكافآت (Agent)</text>
            <text x="490" y="122" textAnchor="middle" fill="#e2e8f0" fontSize="9">• اتخاذ القرارات والسياسات</text>
            <text x="490" y="138" textAnchor="middle" fill="#e2e8f0" fontSize="9">• ألعاب الروبوتات والمركبات</text>

            {/* Model Evaluation Metrics Row (Middle) */}
            <rect x="25" y="165" width="550" height="65" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#64748b" />
            <text x="300" y="185" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">معايير تقييم نماذج التصنيف (Confusion Matrix Metrics)</text>
            <text x="100" y="210" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Accuracy = (TP+TN) / Total</text>
            <text x="300" y="210" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">Precision = TP / (TP + FP)</text>
            <text x="500" y="210" textAnchor="middle" fill="#ec4899" fontSize="11" fontWeight="bold">Recall = TP / (TP + FN)</text>

            {/* Bottom: Gradient Descent Optimization Loop */}
            <rect x="25" y="240" width="550" height="80" rx="8" fill="rgba(15, 23, 42, 0.95)" stroke="#6366f1" strokeWidth="1.8" />
            <text x="300" y="260" textAnchor="middle" fill="#818cf8" fontSize="12" fontWeight="bold">🔄 حلقة التدريب والتحسين: خوارزمية التدرج الهابط (Gradient Descent)</text>
            <text x="300" y="282" textAnchor="middle" fill="#e2e8f0" fontSize="10.5">1. إدخال البيانات المجهزة ← 2. حساب المخرجات ودالة الخسارة Loss(y, ŷ) ← 3. حساب مشتقات التدرج</text>
            <text x="300" y="304" textAnchor="middle" fill="#cbd5e1" fontSize="10">4. تحديث الأوزان بمعدل التعلم Learning Rate (η) للوصول لأدنى قيمة خطأ (Global Minimum)</text>
          </svg>
        );

      case 'activation_functions_ai':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="320" fill="#0f172a" rx="10" />
            <rect x="150" y="10" width="300" height="28" rx="6" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" />
            <text x="300" y="29" textAnchor="middle" fill="#818cf8" fontSize="12" fontWeight="bold">مقارنة دوال التنشيط غير الخطية (Activation Functions)</text>

            {/* ReLU */}
            <g transform="translate(30, 50)">
              <rect width="165" height="240" rx="8" fill="rgba(30, 41, 59, 0.7)" stroke="#10b981" strokeWidth="1.5" />
              <rect x="10" y="10" width="145" height="22" rx="4" fill="#059669" />
              <text x="82" y="25" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">1. دالة ReLU</text>
              {/* Axes */}
              <line x1="20" y1="130" x2="145" y2="130" stroke="#64748b" strokeWidth="1" />
              <line x1="82" y1="55" x2="82" y2="180" stroke="#64748b" strokeWidth="1" />
              {/* Curve */}
              <path d="M 25 130 L 82 130 L 140 70" fill="none" stroke="#34d399" strokeWidth="3" />
              <text x="82" y="200" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">f(z) = max(0, z)</text>
              <text x="82" y="220" textAnchor="middle" fill="#94a3b8" fontSize="9">المجال: [0, +∞)</text>
              <text x="82" y="234" textAnchor="middle" fill="#6ee7b7" fontSize="8.5">• الأسرع في الشبكات العميقة</text>
            </g>

            {/* Sigmoid */}
            <g transform="translate(217, 50)">
              <rect width="165" height="240" rx="8" fill="rgba(30, 41, 59, 0.7)" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="10" y="10" width="145" height="22" rx="4" fill="#0284c7" />
              <text x="82" y="25" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">2. دالة Sigmoid (σ)</text>
              {/* Axes */}
              <line x1="20" y1="130" x2="145" y2="130" stroke="#64748b" strokeWidth="1" />
              <line x1="82" y1="55" x2="82" y2="180" stroke="#64748b" strokeWidth="1" />
              {/* S-Curve */}
              <path d="M 25 170 C 60 170, 70 130, 82 130 C 94 130, 105 80, 140 80" fill="none" stroke="#38bdf8" strokeWidth="3" />
              <text x="82" y="200" textAnchor="middle" fill="#bae6fd" fontSize="10" fontWeight="bold">σ(z) = 1 / (1 + e⁻ᶻ)</text>
              <text x="82" y="220" textAnchor="middle" fill="#94a3b8" fontSize="9">المجال: (0, 1)</text>
              <text x="82" y="234" textAnchor="middle" fill="#7dd3fc" fontSize="8.5">• التصنيف الثنائي والاحتمالات</text>
            </g>

            {/* Softmax */}
            <g transform="translate(405, 50)">
              <rect width="165" height="240" rx="8" fill="rgba(30, 41, 59, 0.7)" stroke="#ec4899" strokeWidth="1.5" />
              <rect x="10" y="10" width="145" height="22" rx="4" fill="#db2777" />
              <text x="82" y="25" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">3. دالة Softmax</text>
              {/* Bars representing normalized probabilities */}
              <rect x="35" y="130" width="25" height="45" rx="3" fill="#ec4899" />
              <text x="47" y="125" textAnchor="middle" fill="#fbcfe8" fontSize="9">0.65</text>
              <rect x="70" y="150" width="25" height="25" rx="3" fill="#f472b6" />
              <text x="82" y="145" textAnchor="middle" fill="#fbcfe8" fontSize="9">0.25</text>
              <rect x="105" y="165" width="25" height="10" rx="3" fill="#f9a8d4" />
              <text x="117" y="160" textAnchor="middle" fill="#fbcfe8" fontSize="9">0.10</text>
              <text x="82" y="200" textAnchor="middle" fill="#fbcfe8" fontSize="9.5" fontWeight="bold">eᶻⁱ / Σ eᶻʲ</text>
              <text x="82" y="220" textAnchor="middle" fill="#94a3b8" fontSize="9">المجموع = 1.0 (100%)</text>
              <text x="82" y="234" textAnchor="middle" fill="#f472b6" fontSize="8.5">• التصنيف متعدد الفئات</text>
            </g>
          </svg>
        );

      case 'decision_tree_ml':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="320" fill="#0f172a" rx="10" />
            <rect x="130" y="10" width="340" height="28" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" />
            <text x="300" y="29" textAnchor="middle" fill="#6ee7b7" fontSize="12" fontWeight="bold">شجرة القرار وخوارزميات التصنيف (Decision Tree Model)</text>

            {/* Root Node */}
            <rect x="220" y="55" width="160" height="42" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <text x="300" y="73" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">شرط الجذر (العمر &lt; 30؟)</text>
            <text x="300" y="88" textAnchor="middle" fill="#94a3b8" fontSize="9">Root Decision Node</text>

            {/* Connectors */}
            <line x1="260" y1="97" x2="160" y2="145" stroke="#ef4444" strokeWidth="2" />
            <text x="195" y="118" fill="#ef4444" fontSize="10" fontWeight="bold">نعم (Yes)</text>

            <line x1="340" y1="97" x2="440" y2="145" stroke="#10b981" strokeWidth="2" />
            <text x="405" y="118" fill="#10b981" fontSize="10" fontWeight="bold">لا (No)</text>

            {/* Level 1 Nodes */}
            <rect x="80" y="145" width="160" height="42" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <text x="160" y="163" textAnchor="middle" fill="#f59e0b" fontSize="10.5" fontWeight="bold">الدخل &gt; 50,000 ريال؟</text>
            <text x="160" y="178" textAnchor="middle" fill="#94a3b8" fontSize="8.5">Internal Split Node</text>

            <rect x="360" y="145" width="160" height="42" rx="8" fill="#065f46" stroke="#10b981" strokeWidth="2" />
            <text x="440" y="163" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="bold">الفئة: مؤهل (Eligible)</text>
            <text x="440" y="178" textAnchor="middle" fill="#6ee7b7" fontSize="9">Leaf Node (نقاء 96%)</text>

            {/* Connectors Level 2 */}
            <line x1="120" y1="187" x2="60" y2="235" stroke="#10b981" strokeWidth="2" />
            <text x="80" y="210" fill="#10b981" fontSize="9" fontWeight="bold">نعم</text>

            <line x1="200" y1="187" x2="260" y2="235" stroke="#ef4444" strokeWidth="2" />
            <text x="235" y="210" fill="#ef4444" fontSize="9" fontWeight="bold">لا</text>

            {/* Leaves */}
            <rect x="10" y="235" width="110" height="38" rx="6" fill="#065f46" stroke="#10b981" />
            <text x="65" y="252" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontWeight="bold">مؤهل (Approved)</text>
            <text x="65" y="265" textAnchor="middle" fill="#d1fae5" fontSize="8">Gini = 0.0</text>

            <rect x="200" y="235" width="120" height="38" rx="6" fill="#881337" stroke="#f43f5e" />
            <text x="260" y="252" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">غير مؤهل (Rejected)</text>
            <text x="260" y="265" textAnchor="middle" fill="#fee2e2" fontSize="8">Entropy = 0.0</text>

            {/* Formula box */}
            <rect x="360" y="225" width="220" height="75" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#64748b" />
            <text x="470" y="247" textAnchor="middle" fill="#fcd34d" fontSize="10.5" fontWeight="bold">معيار قياس نقاء التقسيم (Gini / Entropy)</text>
            <text x="470" y="268" textAnchor="middle" fill="#38bdf8" fontSize="10">Gini = 1 - Σ (pᵢ)²</text>
            <text x="470" y="288" textAnchor="middle" fill="#ec4899" fontSize="10">Entropy = - Σ pᵢ · log₂(pᵢ)</text>
          </svg>
        );

      case 'algorithm_complexity_big_o':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="320" fill="#0f172a" rx="10" />
            <rect x="140" y="10" width="320" height="28" rx="6" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" />
            <text x="300" y="29" textAnchor="middle" fill="#fda4af" fontSize="12" fontWeight="bold">منحنيات التعقيد الزمني وتحليل الخوارزميات (Big-O)</text>

            {/* Axes */}
            <line x1="70" y1="270" x2="550" y2="270" stroke="#64748b" strokeWidth="2" />
            <text x="540" y="290" fill="#94a3b8" fontSize="11" fontWeight="bold">حجم المدخلات (n)</text>
            <line x1="70" y1="270" x2="70" y2="50" stroke="#64748b" strokeWidth="2" />
            <text x="40" y="65" fill="#94a3b8" fontSize="11" fontWeight="bold">الزمن (t)</text>

            {/* O(1) Green Line */}
            <line x1="70" y1="255" x2="540" y2="255" stroke="#10b981" strokeWidth="2.5" />
            <text x="545" y="258" fill="#10b981" fontSize="10" fontWeight="bold">O(1) ثابت</text>

            {/* O(log n) Cyan Line */}
            <path d="M 70 270 Q 150 240, 540 220" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="545" y="223" fill="#38bdf8" fontSize="10" fontWeight="bold">O(log n) لوغاريتمي</text>

            {/* O(n) Yellow Line */}
            <line x1="70" y1="270" x2="540" y2="160" stroke="#f59e0b" strokeWidth="2.5" />
            <text x="545" y="163" fill="#f59e0b" fontSize="10" fontWeight="bold">O(n) خطي</text>

            {/* O(n log n) Orange Line */}
            <path d="M 70 270 Q 250 200, 500 100" fill="none" stroke="#f97316" strokeWidth="2.5" />
            <text x="505" y="98" fill="#f97316" fontSize="10" fontWeight="bold">O(n log n)</text>

            {/* O(n^2) Red Curve */}
            <path d="M 70 270 Q 140 240, 240 60" fill="none" stroke="#ef4444" strokeWidth="3" />
            <text x="245" y="60" fill="#ef4444" fontSize="10" fontWeight="bold">O(n²) تربيعي</text>

            {/* O(2^n) Magenta Curve */}
            <path d="M 70 270 Q 100 240, 140 60" fill="none" stroke="#ec4899" strokeWidth="3" />
            <text x="145" y="55" fill="#ec4899" fontSize="10" fontWeight="bold">O(2ⁿ) أسي</text>
          </svg>
        );

      case 'stack_queue_cs':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="320" fill="#0f172a" rx="10" />
            <rect x="140" y="10" width="320" height="28" rx="6" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" />
            <text x="300" y="29" textAnchor="middle" fill="#7dd3fc" fontSize="12" fontWeight="bold">مقارنة هياكل البيانات: المكدس (Stack) والطابور (Queue)</text>

            {/* Stack Box */}
            <g transform="translate(40, 55)">
              <rect width="240" height="240" rx="8" fill="rgba(30, 41, 59, 0.7)" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="20" y="10" width="200" height="24" rx="4" fill="#0284c7" />
              <text x="120" y="26" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">المكدس: LIFO (Last-In First-Out)</text>

              {/* Stack U container */}
              <path d="M 60 60 L 60 210 L 180 210 L 180 60" fill="none" stroke="#64748b" strokeWidth="3" />
              <rect x="70" y="170" width="100" height="30" rx="4" fill="#0369a1" />
              <text x="120" y="190" textAnchor="middle" fill="#fff" fontSize="10">العنصر 1 (القاع)</text>
              <rect x="70" y="135" width="100" height="30" rx="4" fill="#0284c7" />
              <text x="120" y="155" textAnchor="middle" fill="#fff" fontSize="10">العنصر 2</text>
              <rect x="70" y="100" width="100" height="30" rx="4" fill="#38bdf8" />
              <text x="120" y="120" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">العنصر 3 (القمة Top)</text>

              <text x="120" y="230" textAnchor="middle" fill="#94a3b8" fontSize="9">العمليات: Push() للإضافة | Pop() للحذف</text>
            </g>

            {/* Queue Box */}
            <g transform="translate(320, 55)">
              <rect width="240" height="240" rx="8" fill="rgba(30, 41, 59, 0.7)" stroke="#10b981" strokeWidth="1.5" />
              <rect x="20" y="10" width="200" height="24" rx="4" fill="#059669" />
              <text x="120" y="26" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">الطابور: FIFO (First-In First-Out)</text>

              {/* Queue pipe */}
              <line x1="20" y1="100" x2="220" y2="100" stroke="#64748b" strokeWidth="3" />
              <line x1="20" y1="160" x2="220" y2="160" stroke="#64748b" strokeWidth="3" />

              {/* Items in pipe */}
              <rect x="40" y="110" width="45" height="40" rx="4" fill="#10b981" />
              <text x="62" y="135" textAnchor="middle" fill="#fff" fontSize="10">Front 1</text>
              <rect x="95" y="110" width="45" height="40" rx="4" fill="#34d399" />
              <text x="117" y="135" textAnchor="middle" fill="#0f172a" fontSize="10">Item 2</text>
              <rect x="150" y="110" width="45" height="40" rx="4" fill="#6ee7b7" />
              <text x="172" y="135" textAnchor="middle" fill="#0f172a" fontSize="10">Rear 3</text>

              <text x="25" y="90" fill="#ef4444" fontSize="9" fontWeight="bold">← خروج Dequeue</text>
              <text x="155" y="90" fill="#10b981" fontSize="9" fontWeight="bold">دخول Enqueue ←</text>
              <text x="120" y="230" textAnchor="middle" fill="#94a3b8" fontSize="9">العمليات: Enqueue(Rear) | Dequeue(Front)</text>
            </g>
          </svg>
        );

      case 'maxwell_boltzmann_chem':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="320" fill="#0f172a" rx="10" />
            <rect x="130" y="10" width="340" height="28" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" />
            <text x="300" y="29" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold">توزيع ماكسويل-بولتزمان الحركي وتأثير درجة الحرارة على Ea</text>

            {/* Axes */}
            <line x1="70" y1="270" x2="550" y2="270" stroke="#64748b" strokeWidth="2" />
            <text x="520" y="290" fill="#94a3b8" fontSize="11" fontWeight="bold">طاقة الحركة (Kinetic Energy)</text>
            <line x1="70" y1="270" x2="70" y2="50" stroke="#64748b" strokeWidth="2" />
            <text x="30" y="65" fill="#94a3b8" fontSize="10" fontWeight="bold">عدد الجزيئات</text>

            {/* T1 Curve (Cold - Blue) */}
            <path d="M 70 270 Q 150 50, 230 180 T 520 270" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="190" y="110" fill="#38bdf8" fontSize="11" fontWeight="bold">T₁ (درجة حرارة منخفضة)</text>

            {/* T2 Curve (Hot - Orange) */}
            <path d="M 70 270 Q 190 120, 290 190 T 540 270" fill="none" stroke="#f97316" strokeWidth="2.5" />
            <text x="320" y="160" fill="#f97316" fontSize="11" fontWeight="bold">T₂ (درجة حرارة مرتفعة T₂ &gt; T₁)</text>

            {/* Ea Activation Energy Vertical Barrier */}
            <line x1="390" y1="60" x2="390" y2="270" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
            <rect x="340" y="65" width="100" height="22" rx="4" fill="#dc2626" />
            <text x="390" y="80" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">طاقة التنشيط Ea</text>

            {/* Shaded Area under T2 past Ea */}
            <path d="M 390 220 Q 450 250, 540 270 L 390 270 Z" fill="rgba(249, 115, 22, 0.4)" />
            <text x="470" y="240" fill="#fdba74" fontSize="9.5" fontWeight="bold">جزيئات تتفاعل عند T₂ (أضعاف مضاعفة)</text>
          </svg>
        );

      case 'dna_replication_fork':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="320" fill="#0f172a" rx="10" />
            <rect x="140" y="10" width="320" height="28" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" />
            <text x="300" y="29" textAnchor="middle" fill="#6ee7b7" fontSize="12" fontWeight="bold">شوكة تضاعف DNA والإنزيمات المشتركة (Replication Fork)</text>

            {/* Template Double Helix on left splitting */}
            <path d="M 50 140 Q 150 140, 240 90 L 520 90" fill="none" stroke="#38bdf8" strokeWidth="3" />
            <text x="530" y="95" fill="#38bdf8" fontSize="10" fontWeight="bold">3' قالب</text>

            <path d="M 50 180 Q 150 180, 240 230 L 520 230" fill="none" stroke="#38bdf8" strokeWidth="3" />
            <text x="530" y="235" fill="#38bdf8" fontSize="10" fontWeight="bold">5' قالب</text>

            {/* Helicase Enzyme */}
            <polygon points="210,130 250,160 210,190" fill="#f59e0b" stroke="#fbbf24" strokeWidth="2" />
            <text x="210" y="120" textAnchor="middle" fill="#fde68a" fontSize="10" fontWeight="bold">Helicase (فك اللولب)</text>

            {/* Leading Strand (Continuous green) */}
            <line x1="250" y1="105" x2="500" y2="105" stroke="#10b981" strokeWidth="3" />
            <polygon points="245,105 255,100 255,110" fill="#10b981" />
            <text x="380" y="122" fill="#6ee7b7" fontSize="10" fontWeight="bold">السلسلة الرائدة 5' → 3' (متصلة)</text>

            {/* DNA Polymerase Top */}
            <circle cx="340" cy="98" r="14" fill="#8b5cf6" stroke="#c4b5fd" />
            <text x="340" y="102" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Pol</text>

            {/* Lagging Strand (Okazaki fragments) */}
            <line x1="300" y1="215" x2="360" y2="215" stroke="#ec4899" strokeWidth="3" />
            <line x1="380" y1="215" x2="440" y2="215" stroke="#ec4899" strokeWidth="3" />
            <line x1="460" y1="215" x2="510" y2="215" stroke="#ec4899" strokeWidth="3" />
            <text x="400" y="255" fill="#f472b6" fontSize="10" fontWeight="bold">قطع أوكازاكي (السلسلة المتأخرة غير المتصلة)</text>

            {/* DNA Ligase */}
            <circle cx="450" cy="215" r="12" fill="#ef4444" stroke="#fca5a5" />
            <text x="450" y="219" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold">Ligase</text>
          </svg>
        );

      case 'arabic_inna_kana_map':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="320" fill="#0f172a" rx="10" />
            <rect x="130" y="10" width="340" height="28" rx="6" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" />
            <text x="300" y="29" textAnchor="middle" fill="#d8b4fe" fontSize="12" fontWeight="bold">خريطة نواسخ الابتداء: كان وأخواتها وإن وأخواتها</text>

            {/* Kana Box */}
            <g transform="translate(30, 50)">
              <rect width="250" height="245" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#38bdf8" strokeWidth="1.8" />
              <rect x="15" y="10" width="220" height="25" rx="4" fill="#0284c7" />
              <text x="125" y="27" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">1. الأفعال الناسخة (كان وأخواتها)</text>
              <text x="235" y="60" textAnchor="end" fill="#93c5fd" fontSize="10">• كان، أصبح، أضحى، أمسى، ظل، بات، صار، ليس</text>
              <rect x="15" y="75" width="220" height="50" rx="6" fill="rgba(2, 132, 199, 0.15)" stroke="#38bdf8" />
              <text x="125" y="95" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">الأثر الإعرابي:</text>
              <text x="125" y="115" textAnchor="middle" fill="#e2e8f0" fontSize="10">ترفع المبتدأ (اسمها) + تنصب الخبر (خبرها)</text>
              <text x="235" y="150" textAnchor="end" fill="#a7f3d0" fontSize="10">مثال: كانَ <u>العِلْمُ</u> <u>نُوراً</u></text>
              <text x="235" y="170" textAnchor="end" fill="#94a3b8" fontSize="9">العلمُ: اسم كان مرفوع بالضمة</text>
              <text x="235" y="188" textAnchor="end" fill="#94a3b8" fontSize="9">نوراً: خبر كان منصوب بالفتحة</text>
            </g>

            {/* Inna Box */}
            <g transform="translate(320, 50)">
              <rect width="250" height="245" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#ec4899" strokeWidth="1.8" />
              <rect x="15" y="10" width="220" height="25" rx="4" fill="#db2777" />
              <text x="125" y="27" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">2. الحروف الناسخة (إن وأخواتها)</text>
              <text x="235" y="60" textAnchor="end" fill="#fbcfe8" fontSize="10">• إنَّ، أنَّ، كأنَّ، لكنَّ، ليتَ، لعلَّ</text>
              <rect x="15" y="75" width="220" height="50" rx="6" fill="rgba(219, 39, 119, 0.15)" stroke="#ec4899" />
              <text x="125" y="95" textAnchor="middle" fill="#f472b6" fontSize="11" fontWeight="bold">الأثر الإعرابي:</text>
              <text x="125" y="115" textAnchor="middle" fill="#e2e8f0" fontSize="10">تنصب المبتدأ (اسمها) + ترفع الخبر (خبرها)</text>
              <text x="235" y="150" textAnchor="end" fill="#fde68a" fontSize="10">مثال: إنَّ <u>العِلْمَ</u> <u>نُورٌ</u></text>
              <text x="235" y="170" textAnchor="end" fill="#94a3b8" fontSize="9">العلمَ: اسم إنّ منصوب بالفتحة</text>
              <text x="235" y="188" textAnchor="end" fill="#94a3b8" fontSize="9">نورٌ: خبر إنّ مرفوع بالضمة</text>
            </g>
          </svg>
        );

      case 'arabic_learning_map': {
        const steps = (diagram.visualSteps || []).slice(0, 4);
        const visualId = diagram.id.replace(/[^a-zA-Z0-9_-]/g, '-');
        const colors = ['#22d3ee', '#818cf8', '#34d399', '#fbbf24'];

        return (
          <svg
            viewBox="0 0 760 250"
            className="scientific-svg"
            role="img"
            aria-label={title}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${visualId}-background`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#101d37" />
                <stop offset="100%" stopColor="#172554" />
              </linearGradient>
              <marker id={`${visualId}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#67e8f9" />
              </marker>
            </defs>
            <rect width="760" height="250" rx="16" fill={`url(#${visualId}-background)`} />
            {steps.map((step, index) => {
              const visualIndex = isEn ? index : steps.length - index - 1;
              const x = 28 + visualIndex * 184;
              const color = colors[index % colors.length];
              const label = isEn ? step.labelEn : step.labelAr;
              const lines: string[] = [];
              label.split(' ').forEach((word) => {
                const lastLine = lines.length - 1;
                if (lastLine < 0 || `${lines[lastLine]} ${word}`.length > 15) {
                  lines.push(word);
                } else {
                  lines[lastLine] = `${lines[lastLine]} ${word}`;
                }
              });

              return (
                <g key={`${label}-${index}`}>
                  {index < steps.length - 1 && (
                    <path
                      d={isEn ? `M ${x + 160} 120 L ${x + 178} 120` : `M ${x} 120 L ${x - 18} 120`}
                      stroke="#67e8f9"
                      strokeWidth="2.5"
                      markerEnd={`url(#${visualId}-arrow)`}
                    />
                  )}
                  <rect x={x} y="48" width="160" height="144" rx="14" fill="#1e293b" stroke={color} strokeWidth="1.5" />
                  <circle cx={x + 80} cy="88" r="24" fill={color} opacity="0.18" />
                  <text x={x + 80} y="94" textAnchor="middle" fill={color} fontSize="17" fontWeight="800">
                    {index + 1}
                  </text>
                  <text
                    x={x + 80}
                    y={lines.length > 1 ? '137' : '144'}
                    textAnchor="middle"
                    direction={isEn ? 'ltr' : 'rtl'}
                    unicodeBidi="plaintext"
                    fill="#f8fafc"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="inherit"
                  >
                    {lines.map((line, lineIndex) => (
                      <tspan key={`${line}-${lineIndex}`} x={x + 80} dy={lineIndex === 0 ? 0 : 18}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </svg>
        );
      }
    }
  };

  return (
    <figure className="curriculum-diagram-container">
      {/* Header Bar */}
      <div className="diagram-header-bar">
        <div className="diagram-header-title-group">
          <div className="diagram-icon-pill">
            <Layers size={15} />
            <span>{figureNum}</span>
          </div>
          <h4 className="diagram-title-text">{title}</h4>
        </div>

        <div className="diagram-actions-group">
          <button 
            type="button" 
            className="btn-diagram-zoom" 
            onClick={() => setIsExpanded(true)}
            title={isEn ? "Expand Fullscreen" : "تكبير الرسم التوضيحي"}
          >
            <Maximize2 size={14} />
            <span>{isEn ? "Zoom" : "تكبير"}</span>
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="diagram-canvas-box">
        {diagram.imageUrl ? (
          <img src={diagram.imageUrl} alt={title} className="diagram-image-loaded" />
        ) : (
          renderSvgModel()
        )}
      </div>

      {/* Caption & Key Takeaway */}
      <figcaption className="diagram-caption-footer">
        <div className="caption-text-block">
          <Info size={16} className="caption-icon text-indigo-400" />
          <p className="caption-body">{caption}</p>
        </div>

        {formula && (
          <div className="diagram-formula-badge">
            <Sparkles size={13} className="text-amber-400" />
            <span>القاعدة المستنتجة: <code>{formula}</code></span>
          </div>
        )}

        {/* Interactive Key Tags */}
        {diagram.keyLabels && diagram.keyLabels.length > 0 && (
          <div className="diagram-key-tags-row">
            {diagram.keyLabels.map((lbl, li) => (
              <span 
                key={li} 
                className={`diagram-key-chip ${activeLabelIdx === li ? 'chip-active' : ''}`}
                onClick={() => setActiveLabelIdx(activeLabelIdx === li ? null : li)}
                title={isEn ? lbl.descEn || lbl.tagEn : lbl.descAr || lbl.tagAr}
              >
                <CheckCircle2 size={12} className="text-emerald-400" />
                {isEn ? lbl.tagEn : lbl.tagAr}
              </span>
            ))}
          </div>
        )}
      </figcaption>

      {/* Fullscreen Zoom Modal */}
      {isExpanded && (
        <div className="diagram-fullscreen-overlay" onClick={() => setIsExpanded(false)}>
          <div className="diagram-fullscreen-modal" onClick={(e) => e.stopPropagation()}>
            <div className="df-header">
              <div className="df-title-row">
                <span className="df-figure-badge">{figureNum}</span>
                <h3 className="df-title">{title}</h3>
              </div>
              <button type="button" className="btn-close-df" onClick={() => setIsExpanded(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="df-canvas-body">
              {diagram.imageUrl ? (
                <img src={diagram.imageUrl} alt={title} className="df-image" />
              ) : (
                renderSvgModel()
              )}
            </div>

            <div className="df-footer">
              <p className="df-caption">{caption}</p>
              {formula && (
                <div className="df-formula-pill">
                  <span>القانون الرياضي: <code>{formula}</code></span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </figure>
  );
};
