"useclient";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

// Theme provide from next-themes to allow for switching between light and dark mode
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}