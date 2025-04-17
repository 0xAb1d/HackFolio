import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle, Sun, MoonStar } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] light:bg-[#f1f5f1]">
      <div className="text-center p-8 bg-[#1a1a1a]/90 backdrop-blur-md rounded-xl border border-neon/30 max-w-md light:bg-white/90 light:border-darkgreen/30">
        <div className="flex justify-center mb-4">
          <AlertCircle className="text-neon w-16 h-16 light:text-darkgreen" />
        </div>
        <h1 className="text-4xl font-bold mb-4 font-terminal text-neon light:text-darkgreen">404</h1>
        <p className="text-xl text-gray-400 mb-6 light:text-gray-600">Access Denied: Page Not Found</p>
        <div className="mb-6 p-3 bg-[#0a0a0a]/90 backdrop-blur-md rounded-md text-sm text-gray-400 font-mono text-left light:bg-gray-100 light:text-gray-600">
          <p className="mb-1">$ cd {location.pathname}</p>
          <p className="mb-1">bash: cd: {location.pathname}: No such file or directory</p>
          <p>$ _<span className="animate-text-blink">|</span></p>
        </div>
        <a href="/" className="text-neon hover:text-white underline transition-colors light:text-darkgreen light:hover:text-darkgreen/70">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
