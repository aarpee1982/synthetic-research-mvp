"use client";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { gsap } from "gsap";

const chapters = ["Evidence", "Analysis", "Decision"];
export default function ResearchScene() {
  const host = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const select = useRef<(stage: number) => void>(() => {});
  const [isPaused, setIsPaused] = useState(false);
  const [stage, setStage] = useState(0);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    import("three")
      .then((THREE) => {
        if (disposed || !host.current) return;
        const container = host.current;
        let renderer: InstanceType<typeof THREE.WebGLRenderer>;
        try {
          renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true,
          });
        } catch {
          return;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.setAttribute("aria-hidden", "true");
        container.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-10, 10, 5, -5, 0.1, 100);
        camera.position.set(0, 5, 14);
        camera.lookAt(0, 0, 0);
        scene.add(new THREE.HemisphereLight(0xd8eaff, 0x283142, 2.5));
        const key = new THREE.DirectionalLight(0xffffff, 4);
        key.position.set(-4, 9, 7);
        key.castShadow = true;
        key.shadow.mapSize.set(1024, 1024);
        key.shadow.camera.left = -12;
        key.shadow.camera.right = 12;
        key.shadow.camera.top = 10;
        key.shadow.camera.bottom = -10;
        key.shadow.normalBias = 0.03;
        scene.add(key);
        const blue = new THREE.DirectionalLight(0x3976ff, 3);
        blue.position.set(5, 3, -5);
        scene.add(blue);
        const root = new THREE.Group();
        scene.add(root);
        const model = new THREE.Group();
        root.add(model);
        model.rotation.y = -0.38;
        const assets: InstanceType<typeof THREE.Texture>[] = [];
        const plate = new THREE.Mesh(
          new THREE.BoxGeometry(6.8, 0.16, 4.5),
          new THREE.MeshStandardMaterial({
            color: 0x222832,
            metalness: 0.7,
            roughness: 0.35,
          }),
        );
        plate.position.y = -1.9;
        plate.receiveShadow = true;
        model.add(plate);
        const plateEdge = new THREE.LineSegments(
          new THREE.EdgesGeometry(plate.geometry),
          new THREE.LineBasicMaterial({
            color: 0x5073a0,
            transparent: true,
            opacity: 0.5,
          }),
        );
        plate.add(plateEdge);
        const grid = new THREE.GridHelper(6.5, 13, 0x355280, 0x233249);
        grid.position.y = -1.807;
        grid.scale.z = 0.65;
        model.add(grid);
        const bars: InstanceType<typeof THREE.Mesh>[] = [];
        for (let i = 0; i < 18; i++) {
          const color =
            i % 6 === 5 ? 0x57d1cd : i % 3 === 0 ? 0xd5e6f0 : 0x2460ef;
          const mat = new THREE.MeshPhysicalMaterial({
            color,
            metalness: 0.32,
            roughness: 0.24,
            clearcoat: 0.75,
            clearcoatRoughness: 0.2,
          });
          const bar = new THREE.Mesh(new THREE.BoxGeometry(0.58, 1, 0.58), mat);
          bar.castShadow = true;
          bar.receiveShadow = true;
          const edges = new THREE.LineSegments(
            new THREE.EdgesGeometry(bar.geometry),
            new THREE.LineBasicMaterial({
              color: i % 3 === 0 ? 0xffffff : 0x80acff,
              transparent: true,
              opacity: 0.45,
            }),
          );
          bar.add(edges);
          bars.push(bar);
          model.add(bar);
        }
        function texture(kind: "report" | "source") {
          const canvas = document.createElement("canvas");
          canvas.width = 900;
          canvas.height = 1200;
          const c = canvas.getContext("2d")!;
          c.fillStyle = kind === "report" ? "#f3f6fa" : "#163867";
          c.fillRect(0, 0, 900, 1200);
          c.fillStyle = kind === "report" ? "#0e1b2b" : "#ffffff";
          c.font = "bold 48px Georgia";
          c.fillText("Synthetic", 65, 100);
          c.font = "20px Arial";
          c.fillText("MARKET RESEARCH", 65, 135);
          c.fillStyle = kind === "report" ? "#245bef" : "#8fd9f2";
          c.fillRect(65, 215, 70, 5);
          c.font = "18px Arial";
          c.fillText("SCENARIO-LED INTELLIGENCE", 65, 280);
          c.fillStyle = kind === "report" ? "#111c2c" : "#ffffff";
          c.font = "bold 64px Georgia";
          (kind === "report"
            ? ["From evidence", "to a decision."]
            : ["The evidence", "behind the view."]
          ).forEach((line, i) => c.fillText(line, 65, 390 + i * 82));
          if (kind === "report") {
            c.strokeStyle = "#d1d9e1";
            c.lineWidth = 2;
            for (let i = 0; i < 5; i++) {
              c.beginPath();
              c.moveTo(65, 680 + i * 65);
              c.lineTo(835, 680 + i * 65);
              c.stroke();
            }
            ["DOWNSIDE", "REFERENCE", "UPSIDE"].forEach((label, i) => {
              c.fillStyle = ["#8c5149", "#245bef", "#087f82"][i];
              c.fillRect(65, 665 + i * 100, 8, 58);
              c.font = "28px Arial";
              c.fillText(label, 100, 705 + i * 100);
            });
            c.font = "18px Arial";
            c.fillStyle = "#65758a";
            c.fillText("CONDITIONS. EVIDENCE. DECISIONS.", 65, 1010);
          } else {
            [
              "Source register",
              "Definitions & boundaries",
              "Assumptions & sensitivities",
              "Human review",
            ].forEach((line, i) => {
              c.font = "26px Arial";
              c.fillStyle = "#cfdeee";
              c.fillText(line, 65, 680 + i * 80);
              c.fillStyle = "#45658c";
              c.fillRect(65, 706 + i * 80, 765, 2);
            });
          }
          c.font = "18px Arial";
          c.fillStyle = kind === "report" ? "#647082" : "#a6c9e6";
          c.fillText("HUMAN-LED. AI-ASSISTED.", 65, 1130);
          const t = new THREE.CanvasTexture(canvas);
          t.colorSpace = THREE.SRGBColorSpace;
          t.anisotropy = renderer.capabilities.getMaxAnisotropy();
          assets.push(t);
          return t;
        }
        function report(kind: "report" | "source") {
          const group = new THREE.Group();
          const body = new THREE.Mesh(
            new THREE.BoxGeometry(2.75, 3.67, 0.13),
            new THREE.MeshStandardMaterial({
              color: kind === "report" ? 0xccd5df : 0x194175,
              roughness: 0.5,
            }),
          );
          body.castShadow = true;
          group.add(body);
          const front = new THREE.Mesh(
            new THREE.PlaneGeometry(2.78, 3.7),
            new THREE.MeshStandardMaterial({
              map: texture(kind),
              roughness: 0.7,
            }),
          );
          front.position.z = 0.072;
          group.add(front);
          return group;
        }
        const book = report("report");
        const source = report("source");
        model.add(source, book);
        let phase = 0,
          elapsed = 0,
          time = 0,
          px = 0,
          inView = true,
          frame = 0,
          last = performance.now();
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const motions: gsap.core.Tween[] = [];
        function targetPhase(next: number, instant = false) {
          phase = next;
          elapsed = 0;
          setStage(next);
          motions.splice(0).forEach((t) => t.kill());
          const duration = instant || media.matches ? 0 : 1.75;
          const tween = (target: object, vars: gsap.TweenVars) => {
            const t = gsap.to(target, {
              ...vars,
              duration,
              ease: "power3.inOut",
            });
            motions.push(t);
          };
          bars.forEach((bar, i) => {
            const col = i % 6,
              row = Math.floor(i / 6);
            const h =
              next === 0
                ? 0.55 + ((i * 7) % 5) * 0.16
                : next === 1
                  ? 0.65 + col * 0.47 + row * 0.3
                  : 0.48 + col * 0.15;
            const x =
              next === 0
                ? (col - 2.5) * 0.98
                : next === 1
                  ? (col - 2.5) * 0.95
                  : (col - 2.5) * 0.96;
            const y =
              next === 0 ? -0.95 + row * 0.95 + col * 0.14 : -1.8 + h / 2;
            const z =
              next === 0
                ? (row - 1) * 1.13
                : next === 1
                  ? (row - 1) * 1.06
                  : -1.25 + row * 0.65;
            tween(bar.position, { x, y, z, delay: instant ? 0 : i * 0.025 });
            tween(bar.scale, { y: h, delay: instant ? 0 : i * 0.025 });
            tween(bar.rotation, {
              y: next === 0 ? (i % 2 ? -0.22 : 0.22) : 0,
              z: 0,
            });
          });
          tween(book.scale, {
            x: next === 2 ? 1 : 0.001,
            y: next === 2 ? 1 : 0.001,
            z: next === 2 ? 1 : 0.001,
          });
          tween(book.position, {
            x: 0.32,
            y: next === 2 ? 0.48 : -1.8,
            z: 1.1,
          });
          tween(book.rotation, {
            x: -0.13,
            y: 0.18,
            z: next === 2 ? -0.09 : 0.2,
          });
          tween(source.scale, {
            x: next === 2 ? 0.87 : 0.001,
            y: next === 2 ? 0.87 : 0.001,
            z: next === 2 ? 0.87 : 0.001,
          });
          tween(source.position, {
            x: -1.25,
            y: next === 2 ? 0.5 : -1.8,
            z: 0.45,
          });
          tween(source.rotation, { x: -0.07, y: 0.28, z: 0.11 });
          tween(model.rotation, {
            y: next === 0 ? -0.38 : next === 1 ? -0.58 : -0.22,
          });
        }
        select.current = (next) => {
          targetPhase(next, paused.current || media.matches);
        };
        function resize() {
          const w = container.clientWidth,
            h = container.clientHeight;
          if (!w || !h) return;
          const small = window.innerWidth <= 1000;
          const half = small ? 3.8 : 5;
          camera.left = (-half * w) / h;
          camera.right = (half * w) / h;
          camera.top = half;
          camera.bottom = -half;
          camera.updateProjectionMatrix();
          root.position.x = small ? 0 : camera.right * 0.52;
          root.position.y = small ? -0.05 : 0.05;
          renderer.setSize(w, h);
          renderer.render(scene, camera);
        }
        const pointer = (e: PointerEvent) => {
          if (e.pointerType !== "touch")
            px = (e.clientX / window.innerWidth - 0.5) * 0.14;
        };
        const setMotionState = () => {
          motions.forEach((t) => {
            if (media.matches) {
              t.progress(1).pause();
            } else t.paused(paused.current || !inView || document.hidden);
          });
        };
        function draw(now: number) {
          frame = requestAnimationFrame(draw);
          const dt = Math.min((now - last) / 1000, 0.05);
          last = now;
          setMotionState();
          if (!inView || document.hidden) return;
          if (!paused.current && !media.matches) {
            time += dt;
            elapsed += dt;
            if (elapsed > 6.5) targetPhase((phase + 1) % 3);
            root.rotation.y += (px - root.rotation.y) * 0.03;
            root.rotation.z = Math.sin(time * 0.5) * 0.018;
            if (phase === 0)
              bars.forEach((bar, i) => {
                if (!gsap.isTweening(bar.position))
                  bar.position.y =
                    -0.95 +
                    Math.floor(i / 6) * 0.95 +
                    (i % 6) * 0.14 +
                    Math.sin(time * 1.5 + i * 0.5) * 0.14;
              });
            if (phase === 2 && !gsap.isTweening(book.position))
              book.position.y = 0.48 + Math.sin(time) * 0.12;
          }
          renderer.render(scene, camera);
        }
        const observer = new ResizeObserver(resize);
        observer.observe(container);
        const intersection = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting;
        });
        intersection.observe(container);
        const lost = () => setReady(false);
        renderer.domElement.addEventListener("webglcontextlost", lost);
        window.addEventListener("pointermove", pointer, { passive: true });
        media.addEventListener("change", setMotionState);
        targetPhase(0, true);
        resize();
        frame = requestAnimationFrame(draw);
        setReady(true);
        cleanup = () => {
          cancelAnimationFrame(frame);
          motions.forEach((t) => t.kill());
          observer.disconnect();
          intersection.disconnect();
          window.removeEventListener("pointermove", pointer);
          media.removeEventListener("change", setMotionState);
          renderer.domElement.removeEventListener("webglcontextlost", lost);
          scene.traverse((o) => {
            if (o instanceof THREE.Mesh || o instanceof THREE.LineSegments) {
              o.geometry.dispose();
              (Array.isArray(o.material) ? o.material : [o.material]).forEach(
                (m) => m.dispose(),
              );
            }
          });
          assets.forEach((t) => t.dispose());
          renderer.dispose();
          renderer.domElement.remove();
          select.current = () => {};
        };
      })
      .catch(() => {});
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
  return (
    <>
      <div
        ref={host}
        className={`smr-scene smr-cinematic-scene ${ready ? "is-ready" : ""}`}
      >
        <div className="smr-cinematic-fallback" aria-hidden="true">
          {[42, 65, 48, 83, 70, 100].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="smr-scene-caption">
        <span>FROM EVIDENCE TO INTELLIGENCE</span>
        <small>Human judgment. AI-assisted production.</small>
      </div>
      {ready && (
        <div className="smr-scene-controls">
          <div role="group" aria-label="Research animation chapters">
            {chapters.map((chapter, index) => (
              <button
                key={chapter}
                type="button"
                aria-pressed={stage === index}
                onClick={() => select.current(index)}
              >
                <span>0{index + 1}</span>
                {chapter}
                <i />
              </button>
            ))}
          </div>
          <button
            className="smr-motion"
            type="button"
            title={
              isPaused ? "Play report animation" : "Pause report animation"
            }
            aria-label={
              isPaused ? "Play report animation" : "Pause report animation"
            }
            aria-pressed={isPaused}
            onClick={() => {
              paused.current = !isPaused;
              setIsPaused(!isPaused);
            }}
          >
            {isPaused ? <Play size={15} /> : <Pause size={15} />}
          </button>
        </div>
      )}
    </>
  );
}
