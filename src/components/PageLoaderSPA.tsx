"use client";

import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/icons/logo.svg";

/**
 * PageLoader que simula o carregamento real da logo/imagem
 * A logo é revelada progressivamente conforme o site carrega
 */
const PageLoaderDrawing: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Bloqueia scroll
    document.body.style.overflow = "hidden";

    let progressValue = 0;
    let animationFrameId: number;

    // Pré-carrega a imagem da logo
    const img = new Image();
    img.src = logo.src || logo;
    
    img.onload = () => {
      setImageLoaded(true);
    };

    // Função de progresso suave
    const updateProgress = () => {
      // Incremento variável baseado no estado de carregamento
      const increment = 
        !imageLoaded ? 0.3 :           // Lento enquanto imagem não carregou
        document.readyState === "complete" ? 2 : // Rápido quando já carregou
        progressValue < 30 ? 1.2 :     // Médio no início
        progressValue < 70 ? 0.8 :     // Mais lento no meio
        0.5;                            // Bem lento perto do fim

      progressValue = Math.min(progressValue + increment, 100);
      setProgress(Math.floor(progressValue));

      if (progressValue < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Chegou a 100%
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "unset";
        }, 800);
      }
    };

    // Detecta quando a página está carregada
    const handleLoad = () => {
      // Força progresso para 95% quando tudo carregou
      if (progressValue < 95) {
        progressValue = 95;
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Inicia animação de progresso
    animationFrameId = requestAnimationFrame(updateProgress);

    // Timeout de segurança (5s)
    const safetyTimeout = setTimeout(() => {
      progressValue = 100;
    }, 5000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("load", handleLoad);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = "unset";
    };
  }, [imageLoaded]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
          className="
            fixed inset-0 z-[9999]
            flex flex-col items-center justify-center gap-12
            bg-neutral-950
          "
        >
          {/* Container da Logo com efeito de "carregamento" */}
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            
            {/* Logo sendo "revelada" progressivamente */}
            <div className="relative w-full h-full">
              
              {/* Máscara de carregamento (efeito de scan/reveal) */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(0 0 ${100 - progress}% 0)`,
                }}
              >
                <img
                  src={logo.src || logo}
                  alt="Loading"
                  className="w-full h-full object-contain"
                />
                
                {/* Linha de "scan" que mostra onde está carregando */}
                <motion.div
                  animate={{
                    y: [`${progress - 2}%`, `${progress + 2}%`],
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "linear",
                  }}
                  className="
                    absolute inset-x-0 h-1
                    bg-gradient-to-r from-transparent via-purple-400/80 to-transparent
                    blur-sm
                  "
                  style={{
                    top: `${progress}%`,
                  }}
                />
              </motion.div>

              {/* Placeholder (área ainda não carregada) */}
              <motion.div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(${progress}% 0 0 0)`,
                }}
              >
                <div className="w-full h-full bg-neutral-800/30 backdrop-blur-sm" />
              </motion.div>

              {/* Borda da área de carregamento */}
              <div className="absolute inset-0 border border-neutral-700/30 rounded-lg" />
            </div>

            {/* Efeito de brilho quando completa */}
            {progress === 100 && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: [0, 0.6, 0],
                    scale: [0.9, 1.2, 1.4],
                  }}
                  transition={{ 
                    duration: 1,
                    ease: "easeOut"
                  }}
                  className="
                    absolute inset-0 -m-8
                    rounded-full
                    bg-gradient-to-r from-purple-500/40 to-blue-500/40
                    blur-2xl
                  "
                />
                
                <motion.div
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ 
                    scale: [1, 1.1, 1.3],
                    opacity: [0.5, 0.2, 0],
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="
                    absolute inset-0 -m-4
                    rounded-lg
                    border-2 border-purple-400
                  "
                />
              </>
            )}
          </div>

          {/* Status de carregamento */}
          <div className="w-72 md:w-96 space-y-4">
            
            {/* Texto de status */}
            <div className="flex items-center justify-between px-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="
                  text-neutral-400 text-sm font-medium
                  tracking-wider uppercase
                "
              >
                {progress < 100 ? "Carregando" : "✓ Completo"}
              </motion.p>
              
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="
                  text-neutral-500 text-sm font-mono
                  tabular-nums
                "
              >
                {progress}%
              </motion.span>
            </div>

            {/* Barra de progresso técnica */}
            <div className="relative">
              {/* Background da barra */}
              <div className="
                h-2 w-full
                bg-neutral-900
                rounded-sm
                border border-neutral-800
                overflow-hidden
              ">
                {/* Progresso */}
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ 
                    duration: 0.1, 
                    ease: "linear" 
                  }}
                  className="
                    h-full 
                    bg-gradient-to-r from-purple-600 to-purple-500
                    relative
                  "
                >
                  {/* Efeito de "dados sendo processados" */}
                  <motion.div
                    animate={{
                      x: progress < 100 ? ["0%", "100%"] : "100%",
                      opacity: progress < 100 ? [0.5, 1, 0.5] : 0,
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: progress < 100 ? Infinity : 0,
                      ease: "linear",
                    }}
                    className="
                      absolute inset-y-0 w-16
                      bg-gradient-to-r from-transparent via-white/60 to-transparent
                    "
                  />
                </motion.div>
              </div>

              {/* Marcadores de progresso */}
              <div className="absolute inset-0 flex justify-between px-0.5">
                {[25, 50, 75].map((mark) => (
                  <div
                    key={mark}
                    className={`
                      w-px h-full
                      ${progress >= mark ? 'bg-neutral-700' : 'bg-neutral-800'}
                      transition-colors
                    `}
                  />
                ))}
              </div>
            </div>

            {/* Info técnica (opcional - pode remover) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="
                flex gap-4 text-xs text-neutral-600 
                font-mono justify-center
              "
            >
              <span>
                {imageLoaded ? "✓ Assets" : "⟳ Assets"}
              </span>
              <span>
                {document.readyState === "complete" ? "✓ DOM" : "⟳ DOM"}
              </span>
              <span>
                {progress === 100 ? "✓ Ready" : "⟳ Init"}
              </span>
            </motion.div>
          </div>

          {/* Grid de fundo (estilo técnico) */}
          <div className="
            absolute inset-0 
            bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]
            bg-[size:4rem_4rem]
            opacity-20
            pointer-events-none
          " />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoaderDrawing;