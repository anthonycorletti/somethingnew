import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "./lib/utils";
import { PowerGlitch } from "powerglitch";

export default function App() {
  return (
    <ThemeProvider>
      <div
        className={cn("flex flex-row items-center justify-center space-x-2")}
      >
        <div className={cn("flex items-center justify-center min-h-screen")}>
          <div id="thoughtBubble" onMouseEnter={() => PowerGlitch.glitch("#thoughtBubble")} onClick={() => PowerGlitch.glitch("#thoughtBubble")} className={cn("text-5xl drop-shadow-sm")}>💭</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
