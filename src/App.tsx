import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "./lib/utils";

export default function App() {
  return (
    <ThemeProvider>
      <div
        className={cn("flex flex-row items-center justify-center space-x-2")}
      >
        <div className={cn("flex items-center justify-center min-h-screen")}>
          <div className={cn("text-4xl drop-shadow-sm")}>💭</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
