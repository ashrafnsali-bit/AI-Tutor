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
    switch (diagram.diagramType) {
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
            <rect x="180" y="15" width="240" height="35" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#38bdf8" />
            <text x="300" y="38" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="900">العدد الكتلي A = p⁺ + n⁰ | العدد الذري Z = p⁺</text>
          </svg>
        );

      case 'matter_states_compound':
        return (
          <svg viewBox="0 0 600 320" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            {/* 3 Categories: Element vs Compound vs Mixture */}
            {/* 1. Element Box (Pure Identical Atoms) */}
            <rect x="40" y="50" width="160" height="210" rx="12" fill="rgba(15, 23, 42, 0.7)" stroke="#38bdf8" strokeWidth="2" />
            <text x="120" y="80" textAnchor="middle" fill="#38bdf8" fontSize="15" fontWeight="bold">عنصر نقي (Element)</text>
            {/* 6 identical blue atoms */}
            <circle cx="85" cy="120" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="155" cy="120" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="85" cy="165" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="155" cy="165" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="120" cy="210" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="120" y="245" textAnchor="middle" fill="#94a3b8" fontSize="12">ذرات متطابقة (نحاس Cu)</text>

            {/* 2. Compound Box (Chemically bonded H2O molecules) */}
            <rect x="220" y="50" width="160" height="210" rx="12" fill="rgba(15, 23, 42, 0.7)" stroke="#10b981" strokeWidth="2" />
            <text x="300" y="80" textAnchor="middle" fill="#34d399" fontSize="15" fontWeight="bold">مركب كيميائي (Compound)</text>
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
            <text x="480" y="80" textAnchor="middle" fill="#fbbf24" fontSize="15" fontWeight="bold">مخلوط (Mixture)</text>
            {/* Mixed particles without bonding */}
            <circle cx="445" cy="120" r="12" fill="#0284c7" />
            <rect x="495" y="110" width="20" height="20" rx="4" fill="#a855f7" />
            <circle cx="475" cy="155" r="14" fill="#ef4444" />
            <polygon points="440,195 455,165 425,165" fill="#10b981" />
            <circle cx="515" cy="180" r="12" fill="#fbbf24" />
            <text x="480" y="245" textAnchor="middle" fill="#94a3b8" fontSize="12">خلط فيزيائي يمكن فصله</text>

            {/* Footer Summary */}
            <rect x="120" y="275" width="360" height="34" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="#64748b" />
            <text x="300" y="297" textAnchor="middle" fill="#cbd5e1" fontSize="13" fontWeight="bold">المركب يتحد كيميائياً بنسب ثابتة، بينما المخلوط يُفصل بطرق فيزيائية</text>
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

      default:
        return (
          <svg viewBox="0 0 600 300" className="scientific-svg" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="300" fill="rgba(30, 41, 59, 0.5)" rx="16" />
            <circle cx="300" cy="140" r="60" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="2" />
            <text x="300" y="145" textAnchor="middle" fill="#38bdf8" fontSize="16" fontWeight="bold">نموذج علمي معتمد</text>
            <text x="300" y="220" textAnchor="middle" fill="#94a3b8" fontSize="13">رسم بياني توضيحي مطابق لمعايير الكتاب المدرسي المقرّر</text>
          </svg>
        );
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
