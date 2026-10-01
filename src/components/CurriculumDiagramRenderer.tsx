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
